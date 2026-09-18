import { z } from "zod";

const daySchema = z.object({
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  comment: z.string().nullable().optional(),
  slots: z.array(z.string()).default([]),
});

const responseSchema = z.object({
  days: z.array(daySchema),
});

export type AiScheduleDay = z.infer<typeof daySchema>;

const JA_WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"];

function addDays(iso: string, days: number): string {
  const d = new Date(`${iso}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

// 「来週の金曜」のような相対表現は、曜日を与えないとモデルが計算を誤りやすい。
// 今日の曜日と「来週」の範囲(次の月曜〜日曜)を明示して精度を上げる。
function systemPrompt(todayISO: string, languageName: string): string {
  const today = new Date(`${todayISO}T00:00:00Z`);
  const weekday = JA_WEEKDAYS[today.getUTCDay()];
  const daysUntilNextMonday = ((8 - today.getUTCDay()) % 7) || 7;
  const nextMonday = addDays(todayISO, daysUntilNextMonday);
  const nextSunday = addDays(nextMonday, 6);
  return `あなたは日程調整アプリの入力補助AIです。ユーザーの自由記述から候補日程を抽出し、次のJSON形式のみで返してください(説明文やコードブロックは付けない):
{"days":[{"date":"YYYY-MM-DD","comment":string|null,"slots":string[]}]}
- dateは西暦の日付(YYYY-MM-DD)。
- slotsは時間帯などの候補(例: "午前","午後","19時〜")。日付そのままで1回だけなら空配列。
- commentはその日付についての補足(場所・持ち物など)。無ければnull。
- 今日の日付は${todayISO}(${weekday}曜日)です。「来週」「今週末」などの相対表現はこれを基準に計算してください。「来週」は次の月曜日から始まる週(${nextMonday}〜${nextSunday})を指します。曜日を正しく計算してから日付を決めてください。
- 「毎日」「毎週月曜日」「平日」「土日」のように終了時期が指定されていない繰り返し表現の場合は、今日から4週間(28日間)の範囲に含まれる該当日をすべて個別の日付として列挙してください(何日分か分からないという理由でdaysを空にしないでください)。曜日によって内容が異なる場合(例:「平日は19時〜、土日は10時〜と15時〜」)は、日付ごとに正しいslotsを設定してください。
- ユーザーの入力は日本語以外(例: ${languageName})の場合もあります。slotsとcommentの文字列は、ユーザーが入力した言語と同じ言語で書いてください。
- 日程が読み取れない場合のみ {"days":[]} を返してください。`;
}

function extractJsonBlock(text: string): string {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fenced) return fenced[1].trim();
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start !== -1 && end !== -1 && end > start) {
    return text.slice(start, end + 1);
  }
  return text.trim();
}

const BUSY_WAITING_THRESHOLD = 20;

export type AiQueueStatus = { reachable: boolean; running: number; waiting: number };

// vLLMの/metricsから現在の混雑状況を取得する。
export async function getAiQueueStatus(): Promise<AiQueueStatus> {
  const endpoint = process.env.AI_ENDPOINT_URL;
  if (!endpoint) return { reachable: false, running: 0, waiting: 0 };

  try {
    const res = await fetch(`${endpoint}/metrics`, {
      signal: AbortSignal.timeout(1500),
    });
    if (!res.ok) return { reachable: false, running: 0, waiting: 0 };
    const text = await res.text();
    const runningMatch = text.match(/vllm:num_requests_running\{[^}]*\}\s+([\d.]+)/);
    const waitingMatch = text.match(/vllm:num_requests_waiting\{[^}]*\}\s+([\d.]+)/);
    return {
      reachable: true,
      running: runningMatch ? Math.round(parseFloat(runningMatch[1])) : 0,
      waiting: waitingMatch ? Math.round(parseFloat(waitingMatch[1])) : 0,
    };
  } catch {
    return { reachable: false, running: 0, waiting: 0 };
  }
}

// ---- バックエンド定義 --------------------------------------------------------
//
// 主系: 自前の vLLM(AI_ENDPOINT_URL)。混雑・停止していなければこちらを使う。
// 予備: Gemini Flash の OpenAI 互換エンドポイント(GEMINI_API_KEY)。主系が使えない
//       とき、または主系の呼び出しが失敗したときに使う。主系が未設定なら Gemini が主系。
//
// どちらも OpenAI 互換の /chat/completions なので、呼び出し処理は共通。

type AiBackend = {
  name: "vllm" | "gemini";
  url: string;
  model: string;
  apiKey?: string;
  timeoutMs: number;
  // Gemini は response_format で JSON 出力を強制できる(vLLM側は使わない)。
  jsonMode: boolean;
};

const GEMINI_OPENAI_BASE = "https://generativelanguage.googleapis.com/v1beta/openai";
// 無料枠では上位モデルが混雑で 503 を返しやすいので、軽量モデルから順に試す。
const DEFAULT_GEMINI_MODELS = "gemini-3.5-flash-lite,gemini-3.6-flash";

function vllmBackend(): AiBackend | null {
  const endpoint = process.env.AI_ENDPOINT_URL;
  if (!endpoint) return null;
  return {
    name: "vllm",
    url: `${endpoint.replace(/\/$/, "")}/v1/chat/completions`,
    model: process.env.AI_MODEL || "qwen3.5",
    timeoutMs: 120000, // ローカルLLM(35Bクラス)は負荷次第で応答に1分以上かかることがある
    jsonMode: false,
  };
}

// GEMINI_MODEL はカンマ区切りで複数指定でき、先頭から順に試す。
function geminiBackends(): AiBackend[] {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return [];
  return (process.env.GEMINI_MODEL || DEFAULT_GEMINI_MODELS)
    .split(",")
    .map((m) => m.trim())
    .filter(Boolean)
    .map((model) => ({
      name: "gemini" as const,
      url: `${GEMINI_OPENAI_BASE}/chat/completions`,
      model,
      apiKey,
      timeoutMs: 30000,
      jsonMode: true,
    }));
}

async function isVllmUsable(): Promise<boolean> {
  const status = await getAiQueueStatus();
  return status.reachable && status.waiting <= BUSY_WAITING_THRESHOLD;
}

// AI入力欄を出すかどうか。Gemini が設定されていれば常に利用可能、
// そうでなければ vLLM が混雑しておらず到達可能なときだけ利用可能。
export async function isAiScheduleAvailable(): Promise<boolean> {
  if (geminiBackends().length > 0) return true;
  return isVllmUsable();
}

async function callBackend(
  backend: AiBackend,
  text: string,
  todayISO: string,
  languageName: string
): Promise<AiScheduleDay[]> {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (backend.apiKey) headers.Authorization = `Bearer ${backend.apiKey}`;

  const res = await fetch(backend.url, {
    method: "POST",
    headers,
    body: JSON.stringify({
      model: backend.model,
      messages: [
        { role: "system", content: systemPrompt(todayISO, languageName) },
        { role: "user", content: text },
      ],
      temperature: 0.2,
      ...(backend.jsonMode ? { response_format: { type: "json_object" } } : {}),
    }),
    signal: AbortSignal.timeout(backend.timeoutMs),
  });

  if (!res.ok) {
    throw new Error(`AI request to ${backend.name}/${backend.model} failed with status ${res.status}`);
  }

  const data = await res.json();
  const content: string = data?.choices?.[0]?.message?.content ?? "";
  const jsonText = extractJsonBlock(content);

  let parsed: unknown;
  try {
    parsed = JSON.parse(jsonText);
  } catch {
    throw new Error(`AIの応答をJSONとして解釈できませんでした (${backend.name})`);
  }

  const result = responseSchema.safeParse(parsed);
  if (!result.success) {
    throw new Error(`AIの応答の形式が不正です (${backend.name})`);
  }

  return result.data.days;
}

export async function extractScheduleFromText(
  text: string,
  todayISO: string,
  languageName: string
): Promise<AiScheduleDay[]> {
  const vllm = vllmBackend();
  const geminis = geminiBackends();
  if (!vllm && geminis.length === 0) {
    throw new Error("Neither AI_ENDPOINT_URL nor GEMINI_API_KEY is configured");
  }

  // 主系(vLLM)が使える状態なら先に試し、失敗したら Gemini に切り替える。
  // Gemini 未設定で vLLM が混雑中の場合も、待たされるくらいなら一度だけ試す。
  const chain: AiBackend[] = [];
  if (vllm && (geminis.length === 0 || (await isVllmUsable()))) chain.push(vllm);
  chain.push(...geminis);

  let lastError: unknown;
  for (const backend of chain) {
    try {
      return await callBackend(backend, text, todayISO, languageName);
    } catch (err) {
      lastError = err;
      console.warn(`schedule extraction via ${backend.name}/${backend.model} failed:`, err);
    }
  }
  throw lastError;
}
