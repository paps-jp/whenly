// qr.paps.jp と同じ対応言語。順序は言語切替の表示順。
export const LOCALES = [
  "ja", "en", "ko", "zh", "ru", "ar", "hi", "es", "bn", "pt", "id", "uk",
] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "ja";

export const LOCALE_COOKIE = "whenly_lang";
export const LOCALE_HEADER = "x-whenly-locale";
export const PATHNAME_HEADER = "x-whenly-pathname";

// 言語切替に表示する各言語の自称。
export const LOCALE_NAMES: Record<Locale, string> = {
  ja: "日本語",
  en: "English",
  ko: "한국어",
  zh: "中文",
  ru: "Русский",
  ar: "العربية",
  hi: "हिन्दी",
  es: "Español",
  bn: "বাংলা",
  pt: "Português",
  id: "Indonesia",
  uk: "Українська",
};

export const OG_LOCALES: Record<Locale, string> = {
  ja: "ja_JP",
  en: "en_US",
  ko: "ko_KR",
  zh: "zh_CN",
  ru: "ru_RU",
  ar: "ar_AR",
  hi: "hi_IN",
  es: "es_ES",
  bn: "bn_BD",
  pt: "pt_BR",
  id: "id_ID",
  uk: "uk_UA",
};

// 言語プレフィックス付きURL(/en, /en/start など)を提供する公開ページ。
// それ以外(ダッシュボード・共有URLなど)はプレフィックスなしのURLのみで、
// 言語はCookie / Accept-Language で決まる。
export const PUBLIC_PATHS = [
  "/",
  "/start",
  "/login",
  "/signup",
  "/forgot-password",
  "/member/login",
  "/member/signup",
  "/member/forgot-password",
] as const;

// 用途別ランディング(/use/<slug>)。辞書の useCases のキーと一致させる。
export const USE_CASE_SLUGS = [
  "nomikai",
  "dousoukai",
  "nijikai",
  "kangeikai",
  "circle",
  "kaigi",
  "volunteer",
  "lesson",
] as const;

export type UseCaseSlug = (typeof USE_CASE_SLUGS)[number];

export function isUseCaseSlug(value: string): value is UseCaseSlug {
  return (USE_CASE_SLUGS as readonly string[]).includes(value);
}

export function pathForUseCase(slug: UseCaseSlug): string {
  return `/use/${slug}`;
}

// 言語プレフィックス付きURLと sitemap の対象になる、すべての公開ページ。
export const INDEXABLE_PATHS: readonly string[] = [
  ...PUBLIC_PATHS,
  ...USE_CASE_SLUGS.map(pathForUseCase),
];

// 言語別のアイキャッチ画像(トップの hero と OGP で共用、1600x840)。
export function eyecatchPath(locale: Locale): string {
  return `/eyecatch/${locale}.jpg`;
}

export const EYECATCH_SIZE = { width: 1600, height: 840 } as const;

export function isLocale(value: string | null | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

export function isRTL(locale: Locale): boolean {
  return locale === "ar";
}

export function isPublicPath(pathname: string): boolean {
  return INDEXABLE_PATHS.includes(pathname);
}

// 公開ページの言語別URL。日本語(デフォルト)はプレフィックスなし。
export function localizedPath(locale: Locale, pathname: string): string {
  if (locale === DEFAULT_LOCALE) return pathname;
  return pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
}

// パスの先頭が言語コードならそれを取り除き、[言語, 残りのパス] を返す。
export function splitLocalePrefix(pathname: string): [Locale | null, string] {
  const match = pathname.match(/^\/([a-z]{2})(?=\/|$)/);
  if (match && isLocale(match[1])) {
    const rest = pathname.slice(match[0].length) || "/";
    return [match[1], rest];
  }
  return [null, pathname];
}

// Accept-Language ヘッダーから対応言語を選ぶ。一致しなければ null。
export function detectLocale(acceptLanguage: string | null): Locale | null {
  if (!acceptLanguage) return null;
  const candidates = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params
        .map((p) => p.trim())
        .find((p) => p.startsWith("q="));
      const quality = q ? parseFloat(q.slice(2)) : 1;
      return { tag: tag.trim().toLowerCase(), quality: Number.isNaN(quality) ? 0 : quality };
    })
    .filter((c) => c.tag && c.quality > 0)
    .sort((a, b) => b.quality - a.quality);

  for (const { tag } of candidates) {
    const primary = tag.split("-")[0];
    if (isLocale(primary)) return primary;
  }
  return null;
}
