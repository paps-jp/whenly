import { prisma } from "@/lib/prisma";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/lib/i18n";
import { buildSubtitle } from "@/lib/og/subtitle";
import { cacheKey, readCached, sweepIfDue, writeCached } from "@/lib/og/cache";
import { renderEventOgImage } from "@/lib/og/render";

// 共有ページ(/e/<token>)の OGP 画像。テンプレートにイベント名と候補日を描いて返す。
// 生成結果はディスクにキャッシュし、期限切れなら次のアクセスで作り直す(lib/og/cache.ts)。
// このパスは proxy.ts の対象外(/api/)なので、?l= で言語を明示する。

export async function GET(
  request: Request,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;
  const lang = new URL(request.url).searchParams.get("l");
  const locale: Locale = isLocale(lang) ? lang : DEFAULT_LOCALE;

  const event = await prisma.event.findUnique({
    where: { shareToken: token },
    select: {
      title: true,
      days: { orderBy: { date: "asc" }, select: { date: true } },
    },
  });
  if (!event) {
    return new Response("Not found", { status: 404 });
  }

  const subtitle = buildSubtitle(event.days, locale);
  // イベント名や候補日が変わればキーも変わり、古い画像は期限切れ掃除で消える。
  const key = cacheKey(["v1", token, locale, event.title, subtitle]);

  let image = await readCached(key);
  if (!image) {
    image = await renderEventOgImage({ title: event.title, subtitle, locale });
    await writeCached(key, image);
  }
  sweepIfDue();

  return new Response(new Uint8Array(image), {
    headers: {
      "Content-Type": "image/jpeg",
      "Content-Length": String(image.byteLength),
      // ブラウザは 1 時間、CDN(Cloudflare)は 1 日。ディスク側の 7 日より短くして再生成が反映されるようにする。
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "X-Robots-Tag": "noindex",
    },
  });
}
