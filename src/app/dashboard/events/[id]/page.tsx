import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { format } from "date-fns";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { isPastDay } from "@/lib/date";
import { getBaseUrl } from "@/lib/base-url";
import { getSession } from "@/lib/session";
import { formatDayLabel, formatMonthLabel, getMessages } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/server";
import { CopyLinkButton } from "@/components/CopyLinkButton";
import {
  EventSettingsForm,
  type DayBoxData,
  type ParticipantSummary,
} from "@/components/EventSettingsForm";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const locale = await getLocale();
  const m = getMessages(locale);

  function memberLabel(member: { name: string | null; isGuest: boolean }): string {
    return member.name || (member.isGuest ? m.common.guest : m.common.unnamed);
  }

  // このページ(編集URL)はログインではなくURLの所持で認可する
  // (アカウント登録なしの主催者でも引き継ぎ・共有できるようにするため)。
  const event = await prisma.event.findUnique({
    where: { id },
    include: {
      options: { orderBy: { order: "asc" } },
      days: {
        orderBy: { date: "asc" },
        include: {
          slots: {
            orderBy: { id: "asc" },
            include: { responses: { include: { member: true } } },
          },
          responses: { include: { member: true } },
        },
      },
    },
  });
  if (!event) notFound();

  if (!event.allowUrlEdit) {
    const session = await getSession();
    if (session.role !== "user" || session.id !== event.userId) {
      redirect(`/login?returnTo=${encodeURIComponent(`/dashboard/events/${id}`)}`);
    }
  }

  const baseUrl = await getBaseUrl();
  const shareUrl = `${baseUrl}/e/${event.shareToken}`;
  const editUrl = `${baseUrl}/dashboard/events/${event.id}`;
  const eventOptions = event.options;

  function names(
    responses: { optionId: string; member: { name: string | null; isGuest: boolean } }[],
    optionId: string
  ) {
    return responses.filter((r) => r.optionId === optionId).map((r) => memberLabel(r.member));
  }

  function buildParticipants(
    day: NonNullable<typeof event>["days"][number]
  ): ParticipantSummary[] {
    const targets = day.slots.length === 0 ? [{ key: "day", label: null, responses: day.responses }] : day.slots.map((s) => ({ key: s.id, label: s.label, responses: s.responses }));
    return targets.map((t) => ({
      key: t.key,
      label: t.label,
      options: eventOptions.map((o) => ({
        label: o.label,
        names: names(t.responses, o.id),
      })),
    }));
  }

  function toBox(day: NonNullable<typeof event>["days"][number]): DayBoxData {
    return {
      id: day.id,
      dateISO: format(day.date, "yyyy-MM-dd"),
      dateLabel: formatDayLabel(locale, day.date),
      monthLabel: formatMonthLabel(locale, day.date),
      comment: day.comment,
      participants: buildParticipants(day),
    };
  }

  const upcomingDays = event.days.filter((d) => !isPastDay(d.date)).map(toBox);
  const pastDays = event.days.filter((d) => isPastDay(d.date)).map(toBox);

  const responseCountByOption = new Map<string, number>();
  for (const day of event.days) {
    for (const r of day.responses) {
      responseCountByOption.set(r.optionId, (responseCountByOption.get(r.optionId) ?? 0) + 1);
    }
    for (const slot of day.slots) {
      for (const r of slot.responses) {
        responseCountByOption.set(r.optionId, (responseCountByOption.get(r.optionId) ?? 0) + 1);
      }
    }
  }

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-10">
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition-colors hover:text-indigo-600"
      >
        {m.common.backToEvents}
      </Link>
      <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900">
        {event.title}
      </h1>
      {event.comment && (
        <p className="mt-2 whitespace-pre-wrap text-sm text-slate-600">
          {event.comment}
        </p>
      )}

      {event.allowUrlEdit ? (
        <>
          <p className="mt-4 rounded-2xl bg-amber-50 px-4 py-3 text-xs text-amber-700">
            {m.eventDetail.urlEditWarning}
          </p>

          <div className="mt-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm shadow-slate-200/50">
            <p className="text-sm font-semibold text-slate-700">{m.eventDetail.editUrlLabel}</p>
            <div className="mt-2 flex items-center gap-2">
              <input
                readOnly
                dir="ltr"
                value={editUrl}
                className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-600"
              />
              <CopyLinkButton text={editUrl} />
            </div>
            <p className="mt-2 text-xs text-slate-400">{m.eventDetail.editUrlHint}</p>
          </div>
        </>
      ) : (
        <p className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-xs text-emerald-700">
          {m.eventDetail.lockedNotice}
        </p>
      )}

      <div className="mt-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm shadow-slate-200/50">
        <p className="text-sm font-semibold text-slate-700">{m.eventDetail.shareUrlLabel}</p>
        <div className="mt-2 flex items-center gap-2">
          <input
            readOnly
            dir="ltr"
            value={shareUrl}
            className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-600"
          />
          <CopyLinkButton text={shareUrl} />
        </div>
      </div>

      <div className="mt-6">
        <EventSettingsForm
          eventId={event.id}
          requireLogin={event.requireLogin}
          showParticipantNames={event.showParticipantNames}
          allowMultipleAnswers={event.allowMultipleAnswers}
          allowUrlEdit={event.allowUrlEdit}
          options={event.options.map((o) => ({
            id: o.id,
            label: o.label,
            responseCount: responseCountByOption.get(o.id) ?? 0,
          }))}
          upcomingDays={upcomingDays}
          pastDays={pastDays}
        />
      </div>
    </main>
  );
}
