import type { MetadataRoute } from "next";

const baseUrl = process.env.APP_BASE_URL ?? "https://whenly.paps.jp";

// /dashboard, /e/[token], /member, /calendar はイベント・参加者の実データや
// URL所持だけで認可される編集ページなので、検索エンジンに絶対にインデックスさせない。
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: ["/dashboard", "/e/", "/member", "/calendar", "/reset-password", "/admin"],
        allow: ["/member/login", "/member/signup", "/member/forgot-password"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
