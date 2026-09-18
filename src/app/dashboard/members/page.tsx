import Link from "next/link";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { getCurrentUser } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { approveMembership, rejectMembership } from "@/lib/actions/membership";
import { interpolate } from "@/lib/i18n";
import { getServerMessages } from "@/lib/i18n/server";
import { SubmitButton } from "@/components/SubmitButton";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function MembersPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  const m = await getServerMessages();

  const memberships = await prisma.membership.findMany({
    where: { userId: user.id },
    include: { member: true },
    orderBy: { createdAt: "desc" },
  });

  const pending = memberships.filter((m) => m.status === "PENDING");
  const approved = memberships.filter((m) => m.status === "APPROVED");
  const rejected = memberships.filter((m) => m.status === "REJECTED");

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-10">
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition-colors hover:text-indigo-600"
      >
        {m.common.backToDashboard}
      </Link>
      <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900">
        {m.members.title}
      </h1>

      <section className="mt-8">
        <h2 className="text-lg font-bold text-slate-900">{m.members.pendingHeading}</h2>
        {pending.length === 0 ? (
          <p className="mt-2 text-sm text-slate-500">{m.members.noPending}</p>
        ) : (
          <ul className="mt-3 space-y-2">
            {pending.map((ms) => (
              <li
                key={ms.id}
                className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-sm shadow-slate-200/40"
              >
                <div>
                  <p className="font-semibold text-slate-900">
                    {ms.member.name || m.common.unnamed}
                  </p>
                  <p className="text-xs text-slate-500">{ms.member.email}</p>
                </div>
                <div className="flex gap-2">
                  <form action={approveMembership}>
                    <input type="hidden" name="membershipId" value={ms.id} />
                    <SubmitButton variant="success" className="text-xs px-3 py-1.5">
                      {m.members.approve}
                    </SubmitButton>
                  </form>
                  <form action={rejectMembership}>
                    <input type="hidden" name="membershipId" value={ms.id} />
                    <button
                      type="submit"
                      className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-50"
                    >
                      {m.members.reject}
                    </button>
                  </form>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-bold text-slate-900">
          {interpolate(m.members.approvedHeading, { n: approved.length })}
        </h2>
        {approved.length === 0 ? (
          <p className="mt-2 text-sm text-slate-500">{m.members.noneYet}</p>
        ) : (
          <ul className="mt-3 divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm shadow-slate-200/50">
            {approved.map((ms) => (
              <li key={ms.id} className="px-5 py-4">
                <p className="font-semibold text-slate-900">
                  {ms.member.name || m.common.unnamed}
                </p>
                <p className="text-xs text-slate-500">{ms.member.email}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      {rejected.length > 0 && (
        <section className="mt-8">
          <h2 className="text-lg font-bold text-slate-900">{m.members.rejectedHeading}</h2>
          <ul className="mt-3 divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-100 bg-white opacity-60 shadow-sm shadow-slate-200/50">
            {rejected.map((ms) => (
              <li key={ms.id} className="px-5 py-4">
                <p className="font-semibold text-slate-900">
                  {ms.member.name || m.common.unnamed}
                </p>
                <p className="text-xs text-slate-500">{ms.member.email}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
