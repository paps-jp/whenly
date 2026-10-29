import type { MetadataRoute } from "next";
import {
  COMPARE_SLUGS,
  INDEXABLE_PATHS,
  LOCALES,
  NOINDEX_PUBLIC_PATHS,
  localizedPath,
  pathForCompare,
} from "@/lib/i18n/config";

const baseUrl = process.env.APP_BASE_URL ?? "https://whenly.paps.jp";

// ログイン・登録系と /start は検索結果に出す価値が薄いため noindex にしており、
// サイトマップからも除外する(一覧は config の NOINDEX_PUBLIC_PATHS)。
const SITEMAP_EXCLUDED_PATHS: readonly string[] = NOINDEX_PUBLIC_PATHS;

// 多言語化していない単独ページ(運営情報など)。日本語URLのみで提供する。
const STATIC_JA_PATHS: readonly string[] = ["/about", "/security", "/privacy", "/terms"];

function settings(pathname: string): {
  changeFrequency: "monthly" | "yearly";
  priority: number;
} {
  if (pathname === "/") return { changeFrequency: "monthly", priority: 1 };
  if (pathname.startsWith("/use/")) return { changeFrequency: "monthly", priority: 0.8 };
  if (pathname === "/use") return { changeFrequency: "monthly", priority: 0.7 };
  return { changeFrequency: "yearly", priority: 0.3 };
}

// 公開ページ(トップ・用途別・アカウントなしで始める)を言語ごとのURLで列挙し、
// 各エントリに hreflang の alternates を付ける。ログイン系は検索結果に出さない。
export default function sitemap(): MetadataRoute.Sitemap {
  const localizedEntries = INDEXABLE_PATHS.filter(
    (pathname) => !SITEMAP_EXCLUDED_PATHS.includes(pathname)
  ).flatMap((pathname) => {
    const languages = Object.fromEntries(
      LOCALES.map((locale) => [locale, `${baseUrl}${localizedPath(locale, pathname)}`])
    );
    return LOCALES.map((locale) => ({
      url: `${baseUrl}${localizedPath(locale, pathname)}`,
      ...settings(pathname),
      alternates: { languages },
    }));
  });

  const staticEntries = STATIC_JA_PATHS.map((pathname) => ({
    url: `${baseUrl}${pathname}`,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  // 比較ページは対象ツールの言語で 1 本ずつ(言語別URLなし)。
  const compareEntries = COMPARE_SLUGS.map((slug) => ({
    url: `${baseUrl}${pathForCompare(slug)}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...localizedEntries, ...compareEntries, ...staticEntries];
}
