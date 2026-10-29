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
  bounenkai: "glass",
  shinnenkai: "sun",
  hanami: "leaf",
  bbq: "flame",
  hanabi: "sparkles",
  christmas: "tree",
  birthday: "cake",
  joshikai: "coffee",
  lunch: "coffee",
  online: "video",
  uchiage: "trophy",
  futsal: "ball",
  golf: "target",
  baseball: "ball",
  tennis: "ball",
  bowling: "target",
  camp: "tent",
  ski: "snowflake",
  trip: "map",
  hiking: "mountain",
  band: "music",
  boardgame: "dice",
  bukatsu: "flag",
  hogoshakai: "users",
  kodomokai: "smile",
  jichikai: "home",
  family: "home",
  obkai: "graduation",
  happyoukai: "music",
  uchiawase: "handshake",
  mensetsu: "userCheck",
  shift: "grid",
  study: "lightbulb",
  seminar: "mic",
  workshop: "wrench",
  project: "video",
};

// 用途一覧ページ(/use)とトップページの分類。見出しは辞書の useCasePage.group* を使う。
export const USE_CASE_GROUP_KEYS = ["party", "hobby", "community", "work"] as const;
export type UseCaseGroupKey = (typeof USE_CASE_GROUP_KEYS)[number];

export const USE_CASE_GROUPS: Record<UseCaseGroupKey, readonly UseCaseSlug[]> = {
  party: [
    "nomikai", "bounenkai", "shinnenkai", "kangeikai", "nijikai", "hanami", "bbq", "hanabi",
    "christmas", "birthday", "joshikai", "lunch", "online", "uchiage",
  ],
  hobby: [
    "futsal", "golf", "baseball", "tennis", "bowling", "camp", "ski", "trip", "hiking", "band",
    "boardgame",
  ],
  community: [
    "dousoukai", "circle", "volunteer", "lesson", "bukatsu", "hogoshakai", "kodomokai", "jichikai",
    "family", "obkai", "happyoukai",
  ],
  work: ["kaigi", "uchiawase", "mensetsu", "shift", "study", "seminar", "workshop", "project"],
};

export function groupOfUseCase(slug: UseCaseSlug): UseCaseGroupKey {
  return USE_CASE_GROUP_KEYS.find((g) => USE_CASE_GROUPS[g].includes(slug)) ?? "party";
}

// トップページに出す代表的な用途(残りは /use で一覧)。
export const FEATURED_USE_CASES: readonly UseCaseSlug[] = [
  "nomikai", "bounenkai", "dousoukai", "nijikai", "kangeikai", "circle",
  "kaigi", "uchiawase", "volunteer", "hogoshakai", "futsal", "lesson",
];
