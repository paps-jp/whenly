"use client";

import { logoutUser } from "@/lib/actions/user-auth";
import { useMessages } from "@/lib/i18n/client";

export function LogoutButton({ isGuest }: { isGuest: boolean }) {
  const m = useMessages();
  return (
    <form
      action={logoutUser}
      onSubmit={(e) => {
        if (isGuest && !confirm(m.dashboard.logoutGuestConfirm)) {
          e.preventDefault();
        }
      }}
    >
      <button
        type="submit"
        className="text-sm font-medium text-slate-400 transition-colors hover:text-slate-600"
      >
        {m.common.logout}
      </button>
    </form>
  );
}
