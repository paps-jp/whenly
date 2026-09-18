"use client";

import { useActionState } from "react";
import { SubmitButton } from "@/components/SubmitButton";
import { useMessages } from "@/lib/i18n/client";
import type { ActionState } from "@/lib/action-state";

const inputClass =
  "mt-1.5 block w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-slate-900 shadow-sm transition-colors focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-100";

export function AuthForm({
  action,
  mode,
  returnTo,
  submitLabel,
}: {
  action: (prevState: ActionState, formData: FormData) => Promise<ActionState>;
  mode: "signup" | "login";
  returnTo?: string;
  submitLabel: string;
}) {
  const [state, formAction] = useActionState(action, undefined);
  const m = useMessages();

  return (
    <form action={formAction} className="space-y-4">
      {returnTo && <input type="hidden" name="returnTo" value={returnTo} />}
      {mode === "signup" && (
        <div>
          <label className="block text-sm font-semibold text-slate-700">{m.common.name}</label>
          <input name="name" type="text" required className={inputClass} />
        </div>
      )}
      <div>
        <label className="block text-sm font-semibold text-slate-700">{m.common.email}</label>
        <input name="email" type="email" required className={inputClass} />
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700">{m.common.password}</label>
        <input
          name="password"
          type="password"
          required
          minLength={mode === "signup" ? 8 : undefined}
          className={inputClass}
        />
        {mode === "signup" && (
          <p className="mt-1 text-xs text-slate-400">{m.common.passwordHint}</p>
        )}
      </div>
      {state?.error && (
        <p className="text-sm text-red-600" role="alert">
          {state.error}
        </p>
      )}
      <SubmitButton className="w-full">{submitLabel}</SubmitButton>
    </form>
  );
}
