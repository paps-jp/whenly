import type { CompareSlug, Locale } from "@/lib/i18n/config";
import { compareEn, compareLabelsEn } from "./en";
import { compareJa, compareLabelsJa } from "./ja";
import type { CompareLabels, ComparePage } from "./types";

export type { CompareLabels, ComparePage, CompareRow } from "./types";

const PAGES: readonly ComparePage[] = [...compareJa, ...compareEn];

const LABELS: Partial<Record<Locale, CompareLabels>> = {
  ja: compareLabelsJa,
  en: compareLabelsEn,
};

export function getComparePage(slug: CompareSlug): ComparePage {
  const page = PAGES.find((p) => p.slug === slug);
  if (!page) throw new Error(`compare page not found: ${slug}`);
  return page;
}

// その言語で提供している比較ページ(トップや用途別ページからのリンク用)。
export function comparePagesForLocale(locale: Locale): readonly ComparePage[] {
  return PAGES.filter((p) => p.locale === locale);
}

export function getCompareLabels(locale: Locale): CompareLabels {
  return LABELS[locale] ?? compareLabelsEn;
}
