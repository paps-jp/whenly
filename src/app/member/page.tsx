import Link from "next/link";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { getCurrentMember } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { isPastDay } from "@/lib/date";
import { getBaseUrl } from "@/lib/base-url";
import { logoutMember } from "@/lib/actions/member-auth";
import { interpolate } from "@/lib/i18n";
import { getServerMessages } from "@/lib/i18n/server";
import { CalendarSyncBox } from "@/components/CalendarSyncBox";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function MemberMyPage() {
  const member = await getCurrentMember();
  if (!member) redirect("/member/login");
  const m = await getServerMessages();

  const baseUrl = await getBaseUrl();
  const calendarUrl = `${baseUrl}/calendar/${member.calendarToken}`;

  const memberships = await prisma.membership.findMany({
    where: { memberId: member.id },
    include: {
      user: {
        include: {
          events: {
            orderBy: { createdAt: "desc" },
            include: {
              days: {
                include: {
                  slots: { include: { responses: true } },
                  responses: true,
                },
              },
            },
          },
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  const approved = memberships.filter((ms) => ms.status === "APPROVED");
  const pending = memberships.filter((ms) => ms.status === "PENDING");
  const memberId = member.id;

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
            {m.memberPage.title}
          </h1>
          {member.name && (
            <p className="text-sm text-slate-500">
              {interpolate(m.dashboard.greeting, { name: member.name })}
            </p>
          )}
        </div>
        {!member.isGuest && (
          <form action={logoutMember}>
            <button
              type="submit"
              className="text-sm font-medium text-slate-400 transition-colors hover:text-slate-600"
            >
              {m.common.logout}
            </button>
          </form>
        )}
      </div>

      {pending.length > 0 && (
        <p className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-sm font-medium text-amber-700">
          {interpolate(m.memberPage.pendingNotice, { n: pending.length })}
        </p>
      )}

      <div className="mt-6">
        <CalendarSyncBox url={calendarUrl} />
      </div>

      {approved.length === 0 ? (
        <p className="mt-8 text-sm text-slate-500">{m.memberPage.noOrganizers}</p>
      ) : (
        approved.map((membership) => {
          const activeEvents = membership.user.events.filter(
            (e) => e.days.length === 0 || e.days.some((d) => !isPastDay(d.date))
          );
          const finishedEvents = membership.user.events.filter(
            (e) => e.days.length > 0 && e.days.every((d) => isPastDay(d.date))
          );

          function countAnswers(event: (typeof activeEvents)[number]) {
            const upcomingDays = event.days.filter((day) => !isPastDay(day.date));
            const total = upcomingDays.reduce(
              (sum, day) => sum + (day.slots.length || 1),
              0
            );
            const answered = upcomingDays.reduce((sum, day) => {
              if (day.slots.length === 0) {
                return (
                  sum +
                  (day.responses.some((r) => r.memberId === memberId) ? 1 : 0)
                );
              }
              return (
                sum +
                day.slots.filter((slot) =>
                  slot.responses.some((r) => r.memberId === memberId)
                ).length
              );
            }, 0);
            return { total, answered };
          }

          return (
            <section key={membership.id} className="mt-10">
              <h2 className="text-lg font-bold text-slate-900">
                {membership.user.name
                  ? interpolate(m.memberPage.organizerEvents, { name: membership.user.name })
                  : m.memberPage.organizerEventsUnnamed}
              </h2>
              {activeEvents.length === 0 ? (
                <p className="mt-2 text-sm text-slate-500">{m.memberPage.noEvents}</p>
              ) : (
                <ul className="mt-3 divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm shadow-slate-200/50">
                  {activeEvents.map((event) => {
                    const { total, answered } = countAnswers(event);
                    const complete = total > 0 && answered >= total;
                    return (
                      <li key={event.id}>
                        <Link
                          href={`/member/events/${event.id}`}
                          className="flex items-center justify-between px-5 py-4 transition-colors hover:bg-indigo-50/50"
                        >
                          <div>
                            <p className="font-semibold text-slate-900">
                              {event.title}
                            </p>
                            <p
                              className={`mt-1 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${
                                complete
                                  ? "bg-emerald-50 text-emerald-700"
                                  : "bg-amber-50 text-amber-700"
                              }`}
                            >
                              {interpolate(m.memberPage.answered, { answered, total })}
                            </p>
                          </div>
                          <span className="text-indigo-400 rtl:rotate-180">→</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}

              {finishedEvents.length > 0 && (
                <details className="mt-2">
                  <summary className="cursor-pointer text-sm font-medium text-indigo-600 hover:underline">
                    {interpolate(m.dashboard.finishedHistory, { n: finishedEvents.length })}
                  </summary>
                  <ul className="mt-2 divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-100 bg-white opacity-70 shadow-sm shadow-slate-200/50">
                    {finishedEvents.map((event) => (
                      <li key={event.id}>
                        <Link
                          href={`/member/events/${event.id}`}
                          className="flex items-center justify-between px-5 py-4 hover:bg-slate-50"
                        >
                          <p className="font-semibold text-slate-900">
                            {event.title}
                          </p>
                          <span className="text-slate-400 rtl:rotate-180">→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              )}
            </section>
          );
        })
      )}
    </main>
  );
}
