import { cache } from "react";
import { cookies, headers } from "next/headers";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  LOCALE_HEADER,
  PATHNAME_HEADER,
  detectLocale,
  getMessages,
  isLocale,
  type Locale,
  type Messages,
} from "./index";

// 現在のリクエストの表示言語。
// 通常は proxy.ts が決めてリクエストヘッダーに載せた値を使う。proxy を経由しない
// 経路(念のため)では Cookie → Accept-Language → 日本語 の順に決める。
export const getLocale = cache(async (): Promise<Locale> => {
  const headerList = await headers();
  const fromProxy = headerList.get(LOCALE_HEADER);
  if (isLocale(fromProxy)) return fromProxy;

  const cookieStore = await cookies();
  const fromCookie = cookieStore.get(LOCALE_COOKIE)?.value;
  if (isLocale(fromCookie)) return fromCookie;

  return detectLocale(headerList.get("accept-language")) ?? DEFAULT_LOCALE;
});

// 言語プレフィックスを取り除いた現在のパス(メタデータの canonical / hreflang 用)。
export async function getRequestPathname(): Promise<string | null> {
  const headerList = await headers();
  return headerList.get(PATHNAME_HEADER);
}

export async function getServerMessages(): Promise<Messages> {
  return getMessages(await getLocale());
}
