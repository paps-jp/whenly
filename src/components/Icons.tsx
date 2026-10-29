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
  | "chart"
  | "leaf"
  | "flame"
  | "tree"
  | "cake"
  | "coffee"
  | "video"
  | "ball"
  | "trophy"
  | "tent"
  | "mountain"
  | "map"
  | "music"
  | "dice"
  | "home"
  | "handshake"
  | "userCheck"
  | "grid"
  | "lightbulb"
  | "mic"
  | "wrench"
  | "target"
  | "sun"
  | "smile"
  | "snowflake"
  | "scale";

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
  leaf:
    "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10zM2 21c0-3 1.9-5.5 5-6",
  flame:
    "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.2-.2-4.1 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.2-2.4 1-3.5.5 1.5 1.5 2.5 2.5 3z",
  tree:
    "M12 2l6 9h-4l5 7h-6v4h-2v-4H5l5-7H6z",
  cake:
    "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1M2 21h20M7 8v3M12 8v3M17 8v3M7 4h.01M12 4h.01M17 4h.01",
  coffee:
    "M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zM6 2v2M10 2v2M14 2v2",
  video:
    "M16 10l6-4v12l-6-4M2 6h14v12H2z",
  ball:
    "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 7l4.8 3.5-1.8 5.5H9l-1.8-5.5zM12 2v5M4.9 8.5l2.3 2M19.1 8.5l-2.3 2M7.2 21.2 9 16M16.8 21.2 15 16",
  trophy:
    "M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.7V17c0 .6-.4 1-1 1.3-1 .5-2 1.2-2 2.7h10c0-1.5-1-2.2-2-2.7-.6-.3-1-.7-1-1.3v-2.3M18 2H6v7a6 6 0 0 0 12 0V2z",
  tent:
    "M3.5 21 14 3M20.5 21 10 3M15.5 21 12 15l-3.5 6M2 21h20",
  mountain:
    "M8 3l4 8 5-5 5 15H2L8 3z",
  map:
    "M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15M15 6v15",
  music:
    "M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM21 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
  dice:
    "M3 3h18v18H3zM8 8h.01M16 8h.01M12 12h.01M8 16h.01M16 16h.01",
  home:
    "M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z",
  handshake:
    "m11 17 2 2a1 1 0 1 0 3-3m-3 3-2 2M14 14l2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4M21 3l1 11h-2M3 3 2 14h2",
  userCheck:
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM16 11l2 2 4-4",
  grid:
    "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z",
  lightbulb:
    "M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2V18h6v-1.3c0-.8.4-1.5 1-2A7 7 0 0 0 12 2z",
  mic:
    "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2M12 19v3M8 22h8",
  wrench:
    "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z",
  target:
    "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  sun:
    "M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4",
  smile:
    "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01",
  snowflake:
    "M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1",
  scale:
    "M12 3v18M3 21h18M6 7l-4 7a4 4 0 0 0 8 0zM18 7l-4 7a4 4 0 0 0 8 0zM4 7h16",
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
