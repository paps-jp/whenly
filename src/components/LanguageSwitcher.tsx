import { LOCALES, LOCALE_NAMES, type Locale } from "@/lib/i18n/config";

// qr.paps.jp と同じ、言語ごとの <a> リンク一覧。クローラーも辿れる。
// リンク先は常に /<言語><現在のパス>。公開ページはそのまま表示され、それ以外
// (ダッシュボードなど)と /ja は proxy.ts が Cookie を保存してプレフィックスなしへ
// リダイレクトするので、どのページからでも言語を切り替えられる。
export function LanguageSwitcher({
  locale,
  pathname,
  label,
}: {
  locale: Locale;
  pathname: string;
  label: string;
}) {
  const suffix = pathname === "/" ? "" : pathname;

  return (
    <nav aria-label={label} className="flex flex-wrap justify-center gap-x-1 gap-y-1 text-xs">
      {LOCALES.map((code, i) => (
        <span key={code} className="inline-flex items-center">
          {i > 0 && <span className="mx-1 text-slate-300">|</span>}
          {code === locale ? (
            <span aria-current="page" className="font-semibold text-slate-700">
              {LOCALE_NAMES[code]}
            </span>
          ) : (
            <a
              href={`/${code}${suffix}`}
              hrefLang={code}
              lang={code}
              className="text-indigo-600 hover:underline"
            >
              {LOCALE_NAMES[code]}
            </a>
          )}
        </span>
      ))}
    </nav>
  );
}
