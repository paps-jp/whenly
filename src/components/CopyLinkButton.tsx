"use client";

import { useState } from "react";
import { useMessages } from "@/lib/i18n/client";

export function CopyLinkButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const m = useMessages();

  return (
    <button
      type="button"
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className={`shrink-0 rounded-full px-3.5 py-2 text-sm font-semibold transition-all active:scale-[0.98] ${
        copied
          ? "bg-emerald-100 text-emerald-700"
          : "border border-slate-200 text-slate-700 hover:bg-slate-50"
      }`}
    >
      {copied ? m.common.copied : m.common.copy}
    </button>
  );
}
