"use client";

import { useFormStatus } from "react-dom";
import { useMessages } from "@/lib/i18n/client";

const variants = {
  primary:
    "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-sm shadow-indigo-300/50 hover:shadow-md hover:shadow-indigo-300/60 hover:brightness-110 disabled:shadow-none",
  success:
    "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-sm shadow-emerald-300/50 hover:shadow-md hover:shadow-emerald-300/60 hover:brightness-110",
};

export function SubmitButton({
  children,
  className = "",
  variant = "primary",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof variants;
}) {
  const { pending } = useFormStatus();
  const m = useMessages();
  return (
    <button
      type="submit"
      disabled={pending}
      className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-all active:scale-[0.98] disabled:opacity-50 ${variants[variant]} ${className}`}
    >
      {pending ? m.common.processing : children}
    </button>
  );
}
