"use client";

import { useActionState, useState } from "react";
import { SubmitButton } from "@/components/SubmitButton";
import { confirmPasswordReset } from "@/lib/actions/password-reset";
import { useMessages } from "@/lib/i18n/client";

const inputClass =
  "mt-1.5 block w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-slate-900 shadow-sm transition-colors focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-100";

export function ResetPasswordForm({ token }: { token: string }) {
  const [state, formAction] = useActionState(confirmPasswordReset, undefined);
  const [password, setPassword] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const mismatch = confirmPw.length > 0 && password !== confirmPw;
  const m = useMessages();

  return (
    <form
      action={formAction}
      onSubmit={(e) => {
        if (password !== confirmPw) e.preventDefault();
      }}
      className="space-y-4"
    >
      <input type="hidden" name="token" value={token} />
      <div>
        <label className="block text-sm font-semibold text-slate-700">{m.auth.newPassword}</label>
        <input
          name="password"
          type="password"
          required
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputClass}
        />
        <p className="mt-1 text-xs text-slate-400">{m.common.passwordHint}</p>
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700">
          {m.auth.newPasswordConfirm}
        </label>
        <input
          type="password"
          required
          value={confirmPw}
          onChange={(e) => setConfirmPw(e.target.value)}
          className={inputClass}
        />
        {mismatch && <p className="mt-1 text-xs text-red-600">{m.auth.passwordMismatch}</p>}
      </div>
      {state?.error && (
        <p className="text-sm text-red-600" role="alert">
          {state.error}
        </p>
      )}
      <SubmitButton className="w-full">{m.auth.resetSubmit}</SubmitButton>
    </form>
  );
}
