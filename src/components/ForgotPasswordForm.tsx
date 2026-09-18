"use client";

import { useActionState } from "react";
import { SubmitButton } from "@/components/SubmitButton";
import { useMessages } from "@/lib/i18n/client";
import type { ActionState } from "@/lib/action-state";

export function ForgotPasswordForm({
  action,
}: {
  action: (prevState: ActionState, formData: FormData) => Promise<ActionState>;
}) {
  const [state, formAction] = useActionState(action, undefined);
  const m = useMessages();

  if (state?.success) {
    return <p className="text-sm text-slate-600">{m.auth.forgotSent}</p>;
  }

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-slate-700">{m.common.email}</label>
        <input
          name="email"
          type="email"
          required
          className="mt-1.5 block w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-slate-900 shadow-sm transition-colors focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-100"
        />
      </div>
      {state?.error && (
        <p className="text-sm text-red-600" role="alert">
          {state.error}
        </p>
      )}
      <SubmitButton className="w-full">{m.auth.sendResetMail}</SubmitButton>
    </form>
  );
}
