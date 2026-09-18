"use client";

import { interpolate } from "@/lib/i18n";
import { useMessages } from "@/lib/i18n/client";

const PALETTE = [
  {
    chip: "bg-emerald-50 text-emerald-700",
    avatar: "bg-gradient-to-br from-emerald-400 to-emerald-600",
    badge: "bg-emerald-100 text-emerald-700",
  },
  {
    chip: "bg-sky-50 text-sky-700",
    avatar: "bg-gradient-to-br from-sky-400 to-sky-600",
    badge: "bg-sky-100 text-sky-700",
  },
  {
    chip: "bg-amber-50 text-amber-700",
    avatar: "bg-gradient-to-br from-amber-300 to-amber-500",
    badge: "bg-amber-100 text-amber-700",
  },
  {
    chip: "bg-violet-50 text-violet-700",
    avatar: "bg-gradient-to-br from-violet-400 to-violet-600",
    badge: "bg-violet-100 text-violet-700",
  },
  {
    chip: "bg-rose-50 text-rose-600",
    avatar: "bg-gradient-to-br from-rose-300 to-rose-500",
    badge: "bg-rose-100 text-rose-600",
  },
];

function toneFor(index: number) {
  return PALETTE[index % PALETTE.length];
}

function NameChip({ name, index }: { name: string; index: number }) {
  const initial = name.trim().charAt(0) || "?";
  const c = toneFor(index);
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full py-1 ps-1 pe-2.5 text-xs font-medium ${c.chip}`}
    >
      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white ${c.avatar}`}
      >
        {initial}
      </span>
      {name}
    </span>
  );
}

function NameRow({
  icon,
  index,
  names,
}: {
  icon: string;
  index: number;
  names: string[];
}) {
  const c = toneFor(index);
  const m = useMessages();
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span
        className={`flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full px-1 text-[11px] font-bold ${c.badge}`}
      >
        {icon}
      </span>
      {names.length > 0 ? (
        names.map((name, i) => (
          <NameChip key={`${index}-${i}-${name}`} name={name} index={index} />
        ))
      ) : (
        <span className="text-xs text-slate-400">{m.common.nobodyYet}</span>
      )}
    </div>
  );
}

export function ParticipantNameChips({
  options,
}: {
  options: { label: string; names: string[] }[];
}) {
  return (
    <div className="space-y-1.5">
      {options.map((o, i) => (
        <NameRow key={i} icon={o.label} index={i} names={o.names} />
      ))}
    </div>
  );
}

export function ParticipantCountBadge({
  label,
  count,
}: {
  label: string;
  count: number;
}) {
  const c = toneFor(0);
  const m = useMessages();
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${c.badge}`}
    >
      {interpolate(m.share.countBadge, { label, n: count })}
    </span>
  );
}
