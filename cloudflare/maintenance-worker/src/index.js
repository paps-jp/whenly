// whenly メンテナンス用 Cloudflare Worker (build.py が生成。直接編集せず build.py を直す)
//
// whenly.paps.jp/* に割り当てる。通常はオリジン(Cloudflare Tunnel 経由の Next.js)へそのまま中継し、
// トンネル断などでオリジンが 5xx(502/503/504/52x/530)を返したとき、または FORCE_MAINTENANCE=1 の
// ときだけ whenly と同じ見た目のメンテナンス画面を 503 で返す。
// アプリ自身の 500 は本物のエラーなので隠さない。

const LOGO = "data:image/png;base64,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";

const MESSAGES = {
  "ja": {
    "title": "ただいまメンテナンス中です",
    "body": "whenly はサーバーの切り替え作業のため、一時的にご利用いただけません。数分後にもう一度お試しください。",
    "note": "すでに保存された回答やイベントはそのまま残っています。このページは自動的に再読み込みされます。",
    "retry": "再読み込み"
  },
  "en": {
    "title": "We're down for maintenance",
    "body": "whenly is temporarily unavailable while we switch servers. Please try again in a few minutes.",
    "note": "Your saved answers and events are safe. This page reloads automatically.",
    "retry": "Reload"
  },
  "ko": {
    "title": "현재 점검 중입니다",
    "body": "서버 전환 작업으로 whenly를 잠시 이용할 수 없습니다. 몇 분 후 다시 시도해 주세요.",
    "note": "저장된 답변과 이벤트는 그대로 보존됩니다. 이 페이지는 자동으로 새로고침됩니다.",
    "retry": "새로고침"
  },
  "zh": {
    "title": "系统维护中",
    "body": "whenly 正在切换服务器，暂时无法使用。请几分钟后再试。",
    "note": "已保存的回答和活动不会丢失。本页面会自动刷新。",
    "retry": "刷新"
  },
  "ru": {
    "title": "Идут технические работы",
    "body": "whenly временно недоступен: мы переносим сервер. Повторите попытку через несколько минут.",
    "note": "Сохранённые ответы и события не пропадут. Страница обновится автоматически.",
    "retry": "Обновить"
  },
  "ar": {
    "title": "الموقع قيد الصيانة حاليًا",
    "body": "whenly غير متاح مؤقتًا بسبب نقل الخادم. يرجى المحاولة مرة أخرى بعد بضع دقائق.",
    "note": "إجاباتك وفعالياتك المحفوظة آمنة. سيتم تحديث هذه الصفحة تلقائيًا.",
    "retry": "إعادة التحميل"
  },
  "hi": {
    "title": "अभी रखरखाव चल रहा है",
    "body": "सर्वर बदलने के कारण whenly कुछ समय के लिए उपलब्ध नहीं है। कृपया कुछ मिनट बाद फिर कोशिश करें।",
    "note": "आपके सहेजे गए जवाब और इवेंट सुरक्षित हैं। यह पेज अपने आप रीलोड होगा।",
    "retry": "रीलोड करें"
  },
  "es": {
    "title": "Estamos en mantenimiento",
    "body": "whenly no está disponible temporalmente mientras cambiamos de servidor. Inténtalo de nuevo en unos minutos.",
    "note": "Tus respuestas y eventos guardados están a salvo. Esta página se recargará automáticamente.",
    "retry": "Recargar"
  },
  "bn": {
    "title": "এখন রক্ষণাবেক্ষণ চলছে",
    "body": "সার্ভার পরিবর্তনের কারণে whenly সাময়িকভাবে বন্ধ আছে। কয়েক মিনিট পরে আবার চেষ্টা করুন।",
    "note": "আপনার সংরক্ষিত উত্তর ও ইভেন্ট নিরাপদে আছে। এই পেজটি স্বয়ংক্রিয়ভাবে রিলোড হবে।",
    "retry": "রিলোড"
  },
  "pt": {
    "title": "Estamos em manutenção",
    "body": "O whenly está temporariamente indisponível enquanto trocamos de servidor. Tente novamente em alguns minutos.",
    "note": "Suas respostas e eventos salvos estão seguros. Esta página recarrega automaticamente.",
    "retry": "Recarregar"
  },
  "id": {
    "title": "Sedang dalam pemeliharaan",
    "body": "whenly sementara tidak dapat diakses karena perpindahan server. Silakan coba lagi beberapa menit lagi.",
    "note": "Jawaban dan acara yang sudah tersimpan tetap aman. Halaman ini akan dimuat ulang otomatis.",
    "retry": "Muat ulang"
  },
  "uk": {
    "title": "Триває технічне обслуговування",
    "body": "whenly тимчасово недоступний: ми переносимо сервер. Спробуйте ще раз за кілька хвилин.",
    "note": "Збережені відповіді та події нікуди не зникнуть. Сторінка оновиться автоматично.",
    "retry": "Оновити"
  }
};

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
