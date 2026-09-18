import Link from "next/link";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { getCurrentUser } from "@/lib/session";
import { getServerMessages } from "@/lib/i18n/server";
import { UpgradeAccountForm } from "@/components/UpgradeAccountForm";

export async function generateMetadata(): Promise<Metadata> {
  const m = await getServerMessages();
  return { title: m.upgrade.metaTitle, robots: { index: false, follow: false } };
}

export default async function DashboardUpgradePage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  if (!user.isGuest) redirect("/dashboard");
  const m = await getServerMessages();

  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-4 py-16">
      <Link
        href="/dashboard"
        className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition-colors hover:text-indigo-600"
      >
        {m.common.backToDashboard}
      </Link>
      <h1 className="text-center text-2xl font-extrabold tracking-tight text-slate-900">
        {m.upgrade.title}
      </h1>
      <p className="mt-2 text-center text-sm text-slate-500">{m.upgrade.description}</p>
      <div className="mt-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200/50">
        <UpgradeAccountForm />
      </div>
    </main>
  );
}
