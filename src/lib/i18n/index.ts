import { DEFAULT_LOCALE, type Locale } from "./config";
import { ja, type Messages } from "./messages/ja";
import { en } from "./messages/en";
import { ko } from "./messages/ko";
import { zh } from "./messages/zh";
import { ru } from "./messages/ru";
import { ar } from "./messages/ar";
import { hi } from "./messages/hi";
import { es } from "./messages/es";
import { bn } from "./messages/bn";
import { pt } from "./messages/pt";
import { id } from "./messages/id";
import { uk } from "./messages/uk";

export type { Messages } from "./messages/ja";
export * from "./config";

const MESSAGES: Record<Locale, Messages> = {
  ja, en, ko, zh, ru, ar, hi, es, bn, pt, id, uk,
};

export function getMessages(locale: Locale): Messages {
  return MESSAGES[locale] ?? MESSAGES[DEFAULT_LOCALE];
}

// "{name} さん" のようなテンプレートのプレースホルダーを埋める。
export function interpolate(
  template: string,
  params: Record<string, string | number>
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in params ? String(params[key]) : match
  );
}

// Intl に渡すロケール。日付は UTC の 0:00 として保存されているので、
// 表示時も UTC 固定で読む(サーバーのタイムゾーンに左右されない)。
const INTL_LOCALES: Record<Locale, string> = {
  ja: "ja-JP",
  en: "en-US",
  ko: "ko-KR",
  zh: "zh-CN",
  ru: "ru-RU",
  ar: "ar",
  hi: "hi-IN",
  es: "es-ES",
  bn: "bn-BD",
  pt: "pt-BR",
  id: "id-ID",
  uk: "uk-UA",
};

// 例: ja "9月16日(火)" / en "Tue, Sep 16"
export function formatDayLabel(locale: Locale, date: Date): string {
  return new Intl.DateTimeFormat(INTL_LOCALES[locale], {
    month: locale === "ja" || locale === "zh" || locale === "ko" ? "long" : "short",
    day: "numeric",
    weekday: "short",
    timeZone: "UTC",
  }).format(date);
}

// 例: ja "2026年9月" / en "September 2026"
export function formatMonthLabel(locale: Locale, date: Date): string {
  return new Intl.DateTimeFormat(INTL_LOCALES[locale], {
    year: "numeric",
    month: "long",
    timeZone: "UTC",
  }).format(date);
}

// <input type="date"> の値(YYYY-MM-DD)から、その言語での日付ラベルを作る
// (クライアント側の確認ダイアログ用)。
export function formatDayLabelFromISO(locale: Locale, iso: string): string {
  const date = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return iso;
  return formatDayLabel(locale, date);
}
