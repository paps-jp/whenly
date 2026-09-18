import { headers } from "next/headers";

// 本番はCloudflare Tunnel等の経路でHostヘッダーが書き換わることがあるため、
// APP_BASE_URLが設定されていればそちらを信頼する。未設定時はリクエストヘッダーから推測する(ローカル開発用)。
export async function getBaseUrl(): Promise<string> {
  const envBaseUrl = process.env.APP_BASE_URL;
  if (envBaseUrl) {
    return envBaseUrl.replace(/\/$/, "");
  }

  const headerList = await headers();
  const host = headerList.get("host");
  const proto = headerList.get("x-forwarded-proto") ?? "http";
  return `${proto}://${host}`;
}
