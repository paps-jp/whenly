"use client";

import { useActionState } from "react";
import { SubmitButton } from "@/components/SubmitButton";
import { upgradeGuestAccount } from "@/lib/actions/user-auth";
import { useMessages } from "@/lib/i18n/client";

const inputClass =
  "mt-1.5 block w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-slate-900 shadow-sm transition-colors focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-100";

export function UpgradeAccountForm() {
  const [state, formAction] = useActionState(upgradeGuestAccount, undefined);
  const m = useMessages();

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-slate-700">
          {m.common.nameOptional}
        </label>
        <input name="name" type="text" className={inputClass} />
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700">{m.common.email}</label>
        <input name="email" type="email" required className={inputClass} />
      </div>
      <div>
        <label className="block text-sm font-semibold text-slate-700">{m.common.password}</label>
        <input name="password" type="password" required minLength={8} className={inputClass} />
        <p className="mt-1 text-xs text-slate-400">{m.common.passwordHint}</p>
      </div>
      {state?.error && (
        <p className="text-sm text-red-600" role="alert">
          {state.error}
        </p>
      )}
      <SubmitButton className="w-full">{m.upgrade.submit}</SubmitButton>
    </form>
  );
}
