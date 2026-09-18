import type { IconName } from "@/components/Icons";
import type { UseCaseSlug } from "@/lib/i18n/config";

// 用途別ページとトップページの用途一覧で共通のアイコン。
export const USE_CASE_ICONS: Record<UseCaseSlug, IconName> = {
  nomikai: "glass",
  dousoukai: "graduation",
  nijikai: "heart",
  kangeikai: "gift",
  circle: "flag",
  kaigi: "briefcase",
  volunteer: "handHeart",
  lesson: "bookOpen",
};
