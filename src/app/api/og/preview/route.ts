import { DEFAULT_LOCALE, isLocale, type Locale } from "@/lib/i18n";
import { buildSubtitle } from "@/lib/og/subtitle";
import { renderEventOgImage } from "@/lib/og/render";

// 開発時の見た目確認用: DB なしで任意のタイトルを描画する。本番では 404。
//   /api/og/preview?title=飲み会&l=ja&dates=2026-09-25,2026-09-26
export async function GET(request: Request) {
  if (process.env.NODE_ENV === "production") {
    return new Response("Not found", { status: 404 });
  }
  const url = new URL(request.url);
  const lang = url.searchParams.get("l");
  const locale: Locale = isLocale(lang) ? lang : DEFAULT_LOCALE;
  const title = url.searchParams.get("title") || "サンプルイベント";
  const days = (url.searchParams.get("dates") || "")
    .split(",")
    .filter(Boolean)
    .map((d) => ({ date: new Date(`${d}T00:00:00Z`) }))
    .filter((d) => !Number.isNaN(d.date.getTime()));

  const image = await renderEventOgImage({ title, subtitle: buildSubtitle(days, locale), locale });
  return new Response(new Uint8Array(image), {
    headers: { "Content-Type": "image/jpeg", "Cache-Control": "no-store" },
  });
}
