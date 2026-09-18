import type { MetadataRoute } from "next";
import {
  INDEXABLE_PATHS,
  LOCALES,
  localizedPath,
} from "@/lib/i18n/config";

const baseUrl = process.env.APP_BASE_URL ?? "https://whenly.paps.jp";

// ログイン・登録系はアカウント有無で内容が変わらず検索結果に出す価値が薄いため、
// サイトマップからは除外する(各ページには robots: { index: false } も設定済み)。
const SITEMAP_EXCLUDED_PATHS: readonly string[] = [
  "/login",
  "/signup",
  "/forgot-password",
  "/member/login",
  "/member/signup",
  "/member/forgot-password",
];

// 多言語化していない単独ページ(運営情報など)。日本語URLのみで提供する。
const STATIC_JA_PATHS: readonly string[] = ["/about", "/security", "/privacy", "/terms"];

function settings(pathname: string): {
  changeFrequency: "monthly" | "yearly";
  priority: number;
} {
  if (pathname === "/") return { changeFrequency: "monthly", priority: 1 };
  if (pathname.startsWith("/use/")) return { changeFrequency: "monthly", priority: 0.8 };
  if (pathname === "/start") return { changeFrequency: "monthly", priority: 0.8 };
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

  return [...localizedEntries, ...staticEntries];
}
