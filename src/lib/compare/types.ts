import type { CompareSlug, Locale } from "@/lib/i18n/config";

// 比較表の 1 行。文字列は「○ 対応」「× 非対応」「△ 条件付き」のような短い表記か、補足付きの文。
export type CompareRow = {
  readonly feature: string;
  readonly whenly: string;
  readonly other: string;
};

export type CompareFaq = { readonly q: string; readonly a: string };

// 比較ページ 1 本分。対象ツールの市場に合わせて言語は固定(ja / en)。
export type ComparePage = {
  readonly slug: CompareSlug;
  readonly locale: Locale;
  readonly competitor: string;
  readonly competitorUrl: string;
  readonly title: string;
  readonly description: string;
  readonly heading: string;
  readonly lead: string;
  readonly rows: readonly CompareRow[];
  readonly whenlyFor: readonly string[];
  readonly otherFor: readonly string[];
  readonly summary: string;
  readonly faqs: readonly CompareFaq[];
};

// 比較ページ共通の見出し類(言語ごと)。
export type CompareLabels = {
  readonly breadcrumb: string;
  readonly tableHeading: string;
  readonly feature: string;
  readonly whenlyForHeading: string;
  readonly otherForHeading: string;
  readonly summaryHeading: string;
  readonly faqHeading: string;
  readonly ctaHeading: string;
  readonly ctaBody: string;
  readonly cta: string;
  readonly disclaimer: string;
  readonly otherComparisons: string;
  readonly useCasesHeading: string;
};
