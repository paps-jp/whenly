"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Locale, Messages } from "./index";

type I18nContextValue = { locale: Locale; messages: Messages };

const I18nContext = createContext<I18nContextValue | null>(null);

// ルートレイアウトで現在の言語と辞書をクライアントコンポーネントへ配る。
export function I18nProvider({
  locale,
  messages,
  children,
}: I18nContextValue & { children: ReactNode }) {
  return (
    <I18nContext.Provider value={{ locale, messages }}>{children}</I18nContext.Provider>
  );
}

function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("I18nProvider is missing above this component");
  }
  return ctx;
}

export function useMessages(): Messages {
  return useI18n().messages;
}

export function useLocale(): Locale {
  return useI18n().locale;
}
