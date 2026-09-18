import { NextResponse, type NextRequest } from "next/server";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  LOCALE_HEADER,
  PATHNAME_HEADER,
  detectLocale,
  isLocale,
  isPublicPath,
  localizedPath,
  splitLocalePrefix,
  type Locale,
} from "@/lib/i18n/config";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function setLocaleCookie(res: NextResponse, locale: Locale) {
  res.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: COOKIE_MAX_AGE,
    sameSite: "lax",
  });
}

// 表示言語の決定と、言語プレフィックス付きURL(/en, /en/start ...)の処理。
//
// 優先順位: ?lang=xx (Cookie に保存してクリーンなURLへリダイレクト)
//         > URLの言語プレフィックス > Cookie > Accept-Language > 日本語
//
// プレフィックス付きURLは公開ページ(トップ・ログイン・登録など)にだけ用意し、
// 内部的にはプレフィックスなしのページへ rewrite する。ダッシュボードや共有URL
// (/e/xxx)など、すでに配布済みのURLは一切変えない。
export function proxy(request: NextRequest) {
  const url = request.nextUrl;
  const [prefixLocale, pathname] = splitLocalePrefix(url.pathname);
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;

  // ?lang=xx : 言語切替。Cookie を保存し、その言語の正規URLへ移動する。
  const queryLang = url.searchParams.get("lang");
  if (queryLang !== null) {
    const target = url.clone();
    target.searchParams.delete("lang");
    if (isLocale(queryLang)) {
      target.pathname = isPublicPath(pathname) ? localizedPath(queryLang, pathname) : pathname;
      const res = NextResponse.redirect(target);
      setLocaleCookie(res, queryLang);
      return res;
    }
    return NextResponse.redirect(target);
  }

  if (prefixLocale) {
    // /ja/... と、公開ページ以外のプレフィックス付きURLは、プレフィックスなしへ寄せる
    // (言語の希望は Cookie に残す)。
    if (prefixLocale === DEFAULT_LOCALE || !isPublicPath(pathname)) {
      const target = url.clone();
      target.pathname = pathname;
      const res = NextResponse.redirect(target);
      setLocaleCookie(res, prefixLocale);
      return res;
    }
  }

  const locale: Locale =
    prefixLocale ??
    (isLocale(cookieLocale) ? cookieLocale : null) ??
    detectLocale(request.headers.get("accept-language")) ??
    DEFAULT_LOCALE;

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(LOCALE_HEADER, locale);
  requestHeaders.set(PATHNAME_HEADER, pathname);

  let res: NextResponse;
  if (prefixLocale) {
    const rewriteUrl = url.clone();
    rewriteUrl.pathname = pathname;
    res = NextResponse.rewrite(rewriteUrl, { request: { headers: requestHeaders } });
    // プレフィックス付きURLを開いた人は、その後のページ遷移も同じ言語にする。
    if (cookieLocale !== prefixLocale) setLocaleCookie(res, prefixLocale);
  } else {
    res = NextResponse.next({ request: { headers: requestHeaders } });
  }
  return res;
}

export const config = {
  // 静的ファイル(拡張子付き)・Next内部・APIは対象外。
  matcher: ["/((?!_next/|api/|.*\\..*).*)"],
};
