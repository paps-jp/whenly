import Link from "next/link";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { getCurrentUser } from "@/lib/session";
import { getServerMessages } from "@/lib/i18n/server";
import { NewEventForm } from "@/components/NewEventForm";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function NewEventPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  const m = await getServerMessages();

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-10">
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition-colors hover:text-indigo-600"
      >
        {m.common.backToEvents}
      </Link>
      <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900">
        {m.newEvent.title}
      </h1>
      <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200/50">
        <NewEventForm defaultRequireLogin={!user.isGuest} />
      </div>
    </main>
  );
}
