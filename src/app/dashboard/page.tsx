import Link from "next/link";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { getCurrentUser } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { isPastDay } from "@/lib/date";
import { interpolate } from "@/lib/i18n";
import { getServerMessages } from "@/lib/i18n/server";
import { DeleteEventButton } from "@/components/DeleteEventButton";
import { LogoutButton } from "@/components/LogoutButton";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function DashboardPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  const m = await getServerMessages();

  const [events, pendingCount] = await Promise.all([
    prisma.event.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
      include: { days: { select: { date: true } } },
    }),
    prisma.membership.count({ where: { userId: user.id, status: "PENDING" } }),
  ]);

  const activeEvents = events.filter(
    (e) => e.days.length === 0 || e.days.some((d) => !isPastDay(d.date))
  );
  const finishedEvents = events.filter(
    (e) => e.days.length > 0 && e.days.every((d) => isPastDay(d.date))
  );

  function eventMeta(event: (typeof events)[number]) {
    return `${interpolate(m.dashboard.dateCount, { n: event.days.length })}${m.common.listSeparator}${
      event.requireLogin ? m.dashboard.approvalRequired : m.dashboard.anyoneCanAnswer
    }`;
  }

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
            {m.dashboard.title}
          </h1>
          {user.name && (
            <p className="text-sm text-slate-500">
              {interpolate(m.dashboard.greeting, { name: user.name })}
            </p>
          )}
        </div>
        <LogoutButton isGuest={user.isGuest} />
      </div>

      {user.isGuest && (
        <div className="mt-4 rounded-2xl bg-amber-50 px-4 py-3">
          <p className="text-xs text-amber-700">{m.dashboard.guestWarning}</p>
          <Link
            href="/dashboard/upgrade"
            className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-amber-800 hover:underline"
          >
            {m.dashboard.upgradeLink}
          </Link>
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/dashboard/events/new"
          className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-300/50 transition-all hover:brightness-110 active:scale-[0.98]"
        >
          {m.dashboard.newEvent}
        </Link>
        <Link
          href="/dashboard/members"
          className="relative rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
        >
          {m.dashboard.memberApprovals}
          {pendingCount > 0 && (
            <span className="ms-2 inline-flex items-center rounded-full bg-rose-100 px-2 py-0.5 text-xs font-bold text-rose-600">
              {interpolate(m.dashboard.pendingBadge, { n: pendingCount })}
            </span>
          )}
        </Link>
      </div>

      <h2 className="mt-10 text-lg font-bold text-slate-900">{m.dashboard.eventsHeading}</h2>
      {activeEvents.length === 0 ? (
        <p className="mt-4 text-sm text-slate-500">{m.dashboard.noEvents}</p>
      ) : (
        <ul className="mt-4 divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm shadow-slate-200/50">
          {activeEvents.map((event) => (
            <li key={event.id} className="flex items-center gap-2 px-2">
              <Link
                href={`/dashboard/events/${event.id}`}
                className="flex flex-1 items-center justify-between rounded-xl px-3 py-4 transition-colors hover:bg-indigo-50/50"
              >
                <div>
                  <p className="font-semibold text-slate-900">{event.title}</p>
                  <p className="text-xs text-slate-500">{eventMeta(event)}</p>
                </div>
                <span className="text-indigo-400 rtl:rotate-180">→</span>
              </Link>
              <DeleteEventButton eventId={event.id} title={event.title} />
            </li>
          ))}
        </ul>
      )}

      {finishedEvents.length > 0 && (
        <details className="mt-4">
          <summary className="cursor-pointer text-sm font-medium text-indigo-600 hover:underline">
            {interpolate(m.dashboard.finishedHistory, { n: finishedEvents.length })}
          </summary>
          <ul className="mt-2 divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-100 bg-white opacity-70 shadow-sm shadow-slate-200/50">
            {finishedEvents.map((event) => (
              <li key={event.id} className="flex items-center gap-2 px-2">
                <Link
                  href={`/dashboard/events/${event.id}`}
                  className="flex flex-1 items-center justify-between rounded-xl px-3 py-4 hover:bg-slate-50"
                >
                  <div>
                    <p className="font-semibold text-slate-900">{event.title}</p>
                    <p className="text-xs text-slate-500">{eventMeta(event)}</p>
                  </div>
                  <span className="text-slate-400 rtl:rotate-180">→</span>
                </Link>
                <DeleteEventButton eventId={event.id} title={event.title} />
              </li>
            ))}
          </ul>
        </details>
      )}
    </main>
  );
}
