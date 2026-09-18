import type { SVGProps } from "react";

// サイト全体で使う線画アイコン(24px グリッド、stroke 2)。
// 印刷ボタンや言語切替と同じスタイルに揃え、絵文字は使わない。
export type IconName =
  | "unlock"
  | "clock"
  | "listChecks"
  | "users"
  | "calendar"
  | "sparkles"
  | "shield"
  | "key"
  | "lock"
  | "glass"
  | "graduation"
  | "heart"
  | "gift"
  | "flag"
  | "briefcase"
  | "handHeart"
  | "bookOpen"
  | "link"
  | "chart";

const PATHS: Record<IconName, string> = {
  unlock:
    "M7 11V7a5 5 0 0 1 9.9-1M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z",
  clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2",
  listChecks:
    "M3 17l2 2 4-4M3 7l2 2 4-4M13 6h8M13 12h8M13 18h8",
  users:
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  calendar:
    "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
  sparkles:
    "M12 3l1.9 5.6L19.5 10.5l-5.6 1.9L12 18l-1.9-5.6L4.5 10.5l5.6-1.9L12 3zM19 17l.8 2.2L22 20l-2.2.8L19 23l-.8-2.2L16 20l2.2-.8L19 17zM5 2l.6 1.6L7.2 4.2l-1.6.6L5 6.4l-.6-1.6L2.8 4.2l1.6-.6L5 2z",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",
  key: "M21 2l-2 2m-7.6 7.6a5.5 5.5 0 1 1-7.8 7.8 5.5 5.5 0 0 1 7.8-7.8zm0 0L19 3.6M15.5 7.5l3 3",
  lock: "M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2zM7 11V7a5 5 0 0 1 10 0v4",
  glass: "M8 22h8M12 15v7M17 2H7l1 8a4 4 0 0 0 8 0l1-8zM7 6h10",
  graduation:
    "M22 10L12 5 2 10l10 5 10-5zM6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5M22 10v6",
  heart:
    "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z",
  gift: "M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z",
  flag: "M4 22V4a1 1 0 0 1 1-1h11l-1 4 1 4H5",
  briefcase:
    "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
  handHeart:
    "M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16M7 20l1.6-1.4c.4-.4.9-.6 1.4-.6h4c.9 0 1.7-.3 2.3-.9L21 12.6M2 15l6 6M19.5 3.5a2.4 2.4 0 0 0-3.4 0L16 3.6l-.1-.1a2.4 2.4 0 0 0-3.4 3.4L16 10.4l3.5-3.5a2.4 2.4 0 0 0 0-3.4z",
  bookOpen:
    "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",
  link: "M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7",
  chart: "M3 3v18h18M7 16l4-6 4 4 5-8",
};

export function Icon({
  name,
  className = "h-5 w-5",
  ...rest
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      <path d={PATHS[name]} />
    </svg>
  );
}

// 角丸の薄い背景に乗せたアイコン(特徴・用途一覧などのカード用)。
export function IconBadge({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <span
      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ${className}`}
    >
      <Icon name={name} />
    </span>
  );
}
