# whenly メンテナンス Worker の生成スクリプト。
# ロゴ(public/logo.png)を縮小して data URI として埋め込み、12言語の文言と一緒に src/index.js を書き出す。
# 文言やレイアウトを変えたいときはこのファイルを編集して `python build.py` を実行する。
import base64
import io
import json
import os

from PIL import Image

ROOT = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.abspath(os.path.join(ROOT, "..", ".."))

im = Image.open(os.path.join(REPO, "public", "logo.png")).convert("RGBA").resize((112, 112), Image.LANCZOS)
buf = io.BytesIO()
im.save(buf, "PNG", optimize=True)
LOGO_B64 = base64.b64encode(buf.getvalue()).decode()

MESSAGES = {
    "ja": {"title": "ただいまメンテナンス中です", "body": "whenly はサーバーの切り替え作業のため、一時的にご利用いただけません。数分後にもう一度お試しください。", "note": "すでに保存された回答やイベントはそのまま残っています。このページは自動的に再読み込みされます。", "retry": "再読み込み"},
    "en": {"title": "We're down for maintenance", "body": "whenly is temporarily unavailable while we switch servers. Please try again in a few minutes.", "note": "Your saved answers and events are safe. This page reloads automatically.", "retry": "Reload"},
    "ko": {"title": "현재 점검 중입니다", "body": "서버 전환 작업으로 whenly를 잠시 이용할 수 없습니다. 몇 분 후 다시 시도해 주세요.", "note": "저장된 답변과 이벤트는 그대로 보존됩니다. 이 페이지는 자동으로 새로고침됩니다.", "retry": "새로고침"},
    "zh": {"title": "系统维护中", "body": "whenly 正在切换服务器，暂时无法使用。请几分钟后再试。", "note": "已保存的回答和活动不会丢失。本页面会自动刷新。", "retry": "刷新"},
    "ru": {"title": "Идут технические работы", "body": "whenly временно недоступен: мы переносим сервер. Повторите попытку через несколько минут.", "note": "Сохранённые ответы и события не пропадут. Страница обновится автоматически.", "retry": "Обновить"},
    "ar": {"title": "الموقع قيد الصيانة حاليًا", "body": "whenly غير متاح مؤقتًا بسبب نقل الخادم. يرجى المحاولة مرة أخرى بعد بضع دقائق.", "note": "إجاباتك وفعالياتك المحفوظة آمنة. سيتم تحديث هذه الصفحة تلقائيًا.", "retry": "إعادة التحميل"},
    "hi": {"title": "अभी रखरखाव चल रहा है", "body": "सर्वर बदलने के कारण whenly कुछ समय के लिए उपलब्ध नहीं है। कृपया कुछ मिनट बाद फिर कोशिश करें।", "note": "आपके सहेजे गए जवाब और इवेंट सुरक्षित हैं। यह पेज अपने आप रीलोड होगा।", "retry": "रीलोड करें"},
    "es": {"title": "Estamos en mantenimiento", "body": "whenly no está disponible temporalmente mientras cambiamos de servidor. Inténtalo de nuevo en unos minutos.", "note": "Tus respuestas y eventos guardados están a salvo. Esta página se recargará automáticamente.", "retry": "Recargar"},
    "bn": {"title": "এখন রক্ষণাবেক্ষণ চলছে", "body": "সার্ভার পরিবর্তনের কারণে whenly সাময়িকভাবে বন্ধ আছে। কয়েক মিনিট পরে আবার চেষ্টা করুন।", "note": "আপনার সংরক্ষিত উত্তর ও ইভেন্ট নিরাপদে আছে। এই পেজটি স্বয়ংক্রিয়ভাবে রিলোড হবে।", "retry": "রিলোড"},
    "pt": {"title": "Estamos em manutenção", "body": "O whenly está temporariamente indisponível enquanto trocamos de servidor. Tente novamente em alguns minutos.", "note": "Suas respostas e eventos salvos estão seguros. Esta página recarrega automaticamente.", "retry": "Recarregar"},
    "id": {"title": "Sedang dalam pemeliharaan", "body": "whenly sementara tidak dapat diakses karena perpindahan server. Silakan coba lagi beberapa menit lagi.", "note": "Jawaban dan acara yang sudah tersimpan tetap aman. Halaman ini akan dimuat ulang otomatis.", "retry": "Muat ulang"},
    "uk": {"title": "Триває технічне обслуговування", "body": "whenly тимчасово недоступний: ми переносимо сервер. Спробуйте ще раз за кілька хвилин.", "note": "Збережені відповіді та події нікуди не зникнуть. Сторінка оновиться автоматично.", "retry": "Оновити"},
}

WORKER = r'''// whenly メンテナンス用 Cloudflare Worker (build.py が生成。直接編集せず build.py を直す)
//
// whenly.paps.jp/* に割り当てる。通常はオリジン(Cloudflare Tunnel 経由の Next.js)へそのまま中継し、
// トンネル断などでオリジンが 5xx(502/503/504/52x/530)を返したとき、または FORCE_MAINTENANCE=1 の
// ときだけ whenly と同じ見た目のメンテナンス画面を 503 で返す。
// アプリ自身の 500 は本物のエラーなので隠さない。

const LOGO = "data:image/png;base64,__LOGO__";

const MESSAGES = __MESSAGES__;

const LOCALES = Object.keys(MESSAGES);
const OUTAGE_STATUSES = new Set([502, 503, 504, 520, 521, 522, 523, 524, 525, 526, 527, 530]);

function pickLocale(request) {
  const url = new URL(request.url);
  const seg = url.pathname.split("/")[1];
  if (LOCALES.includes(seg)) return seg;
  const cookie = request.headers.get("Cookie") || "";
  const m = cookie.match(/(?:^|;\s*)whenly_lang=([a-z]{2})/);
  if (m && LOCALES.includes(m[1])) return m[1];
  const accept = (request.headers.get("Accept-Language") || "").toLowerCase();
  for (const part of accept.split(",")) {
    const tag = part.trim().split(";")[0].split("-")[0];
    if (LOCALES.includes(tag)) return tag;
  }
  return "ja";
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

export function renderPage(locale) {
  const t = MESSAGES[locale] || MESSAGES.ja;
  const dir = locale === "ar" ? "rtl" : "ltr";
  return `<!doctype html>
<html lang="${locale}" dir="${dir}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<meta http-equiv="refresh" content="30">
<title>${escapeHtml(t.title)} | whenly</title>
<link rel="icon" href="${LOGO}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap" rel="stylesheet">
<style>
  *{box-sizing:border-box}
  html,body{height:100%;margin:0}
  body{
    font-family:"Manrope",ui-sans-serif,system-ui,-apple-system,"Segoe UI","Hiragino Sans","Noto Sans JP",sans-serif;
    color:#0f172a;
    background:radial-gradient(ellipse 80% 50% at 50% -20%,rgba(99,102,241,.12),transparent),linear-gradient(to bottom,#f7f7fb,#f7f7fb);
    -webkit-font-smoothing:antialiased;
    display:flex;flex-direction:column;min-height:100%;
  }
  main{flex:1;display:flex;align-items:center;justify-content:center;padding:64px 16px}
  .card{width:100%;max-width:480px;background:rgba(255,255,255,.8);backdrop-filter:blur(8px);border:1px solid #f1f5f9;border-radius:16px;padding:40px 32px;text-align:center;box-shadow:0 1px 2px rgba(226,232,240,.5)}
  .logo{width:56px;height:56px;border-radius:16px;box-shadow:0 10px 15px -3px rgba(165,180,252,.5);display:block;margin:0 auto 20px}
  .brand{font-size:28px;font-weight:800;letter-spacing:-.02em;background:linear-gradient(to bottom right,#0f172a,#475569);-webkit-background-clip:text;background-clip:text;color:transparent;margin:0 0 20px}
  .badge{display:inline-flex;align-items:center;gap:8px;border-radius:9999px;background:#fffbeb;color:#b45309;font-size:12px;font-weight:600;padding:6px 12px;margin-bottom:16px}
  .dot{width:8px;height:8px;border-radius:9999px;background:#f59e0b;animation:pulse 1.4s ease-in-out infinite}
  @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.7)}}
  h1{font-size:22px;font-weight:800;letter-spacing:-.01em;margin:0 0 12px;line-height:1.35}
  p{margin:0;color:#64748b;font-size:14px;line-height:1.7}
  p.note{margin-top:12px;color:#94a3b8;font-size:12px}
  a.btn{display:inline-block;margin-top:24px;border-radius:9999px;padding:10px 24px;font-size:14px;font-weight:600;color:#fff;text-decoration:none;background:linear-gradient(to right,#4f46e5,#7c3aed);box-shadow:0 1px 2px rgba(165,180,252,.5)}
  a.btn:hover{filter:brightness(1.1)}
  footer{padding:24px;text-align:center;font-size:12px;color:#94a3b8}
  footer a{color:inherit;text-decoration:none}
  footer a:hover{color:#475569;text-decoration:underline}
</style>
</head>
<body>
<main>
  <div class="card">
    <img class="logo" src="${LOGO}" alt="whenly" width="56" height="56">
    <p class="brand">whenly</p>
    <div class="badge"><span class="dot"></span>503 Service Unavailable</div>
    <h1>${escapeHtml(t.title)}</h1>
    <p>${escapeHtml(t.body)}</p>
    <p class="note">${escapeHtml(t.note)}</p>
    <a class="btn" href="javascript:location.reload()">${escapeHtml(t.retry)}</a>
  </div>
</main>
<footer><a href="https://paps.jp" target="_blank" rel="noopener noreferrer">&copy; PAPS</a></footer>
</body>
</html>`;
}

function maintenanceResponse(request) {
  const accept = request.headers.get("Accept") || "";
  const wantsHtml = accept.includes("text/html") || accept === "*/*" || accept === "";
  const headers = {
    "Cache-Control": "no-store",
    "Retry-After": "120",
    "X-Robots-Tag": "noindex",
    "X-Whenly-Maintenance": "1",
  };
  if (!wantsHtml) {
    return new Response(JSON.stringify({ error: "maintenance" }), {
      status: 503,
      headers: { ...headers, "Content-Type": "application/json; charset=utf-8" },
    });
  }
  return new Response(renderPage(pickLocale(request)), {
    status: 503,
    headers: { ...headers, "Content-Type": "text/html; charset=utf-8" },
  });
}

export default {
  async fetch(request, env) {
    if (env.FORCE_MAINTENANCE === "1") {
      return maintenanceResponse(request);
    }
    let response;
    try {
      response = await fetch(request);
    } catch {
      return maintenanceResponse(request);
    }
    if (OUTAGE_STATUSES.has(response.status)) {
      return maintenanceResponse(request);
    }
    return response;
  },
};
'''

out = WORKER.replace("__LOGO__", LOGO_B64).replace("__MESSAGES__", json.dumps(MESSAGES, ensure_ascii=False, indent=2))
os.makedirs(os.path.join(ROOT, "src"), exist_ok=True)
with open(os.path.join(ROOT, "src", "index.js"), "w", encoding="utf-8", newline="\n") as f:
    f.write(out)

# ローカル確認用に日本語版をそのまま HTML として書き出す(git 管理外: preview/)
os.makedirs(os.path.join(ROOT, "preview"), exist_ok=True)
import subprocess, sys
node = subprocess.run(
    ["node", "--input-type=module", "-e",
     "import('./src/index.js').then(m=>{for (const l of ['ja','en','ar']) require('fs').writeFileSync(`preview/${l}.html`, m.renderPage(l));console.log('preview ok')})"
     .replace("require('fs')", "(await import('node:fs'))")],
    cwd=ROOT, capture_output=True, text=True)
print(node.stdout.strip(), node.stderr.strip()[:300])
print("logo inline chars:", len(LOGO_B64), "| worker bytes:", len(out.encode()))
