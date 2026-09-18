import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { getCurrentMember } from "@/lib/session";
import { getBaseUrl } from "@/lib/base-url";
import { ensureMembershipRequest } from "@/lib/membership";
import { buildResponseDays } from "@/lib/response-view";
import { getMessages } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/server";
import { EventResponseCard } from "@/components/EventResponseCard";
import { EventEntryGate } from "@/components/EventEntryGate";
import { CalendarSyncBox } from "@/components/CalendarSyncBox";

// 共有ページは検索には載せないが、LINE や X で貼られたときのカードには
// イベント名と候補日を描いた画像(/api/og/<token>)を出す。
export async function generateMetadata({
  params,
}: {
  params: Promise<{ token: string }>;
}): Promise<Metadata> {
  const { token } = await params;
  const locale = await getLocale();
  const m = getMessages(locale);
  const event = await prisma.event.findUnique({
    where: { shareToken: token },
    select: { title: true },
  });
  if (!event) {
    return { robots: { index: false, follow: false } };
  }
  const ogImage = { url: `/api/og/${token}?l=${locale}`, width: 1200, height: 630, alt: event.title };
  return {
    title: event.title,
    robots: { index: false, follow: false },
    openGraph: {
      type: "website",
      url: `/e/${token}`,
      siteName: "whenly",
      title: event.title,
      description: m.home.tagline,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: event.title,
      description: m.home.tagline,
      images: [ogImage.url],
    },
  };
}

export default async function SharedEventPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const locale = await getLocale();
  const m = getMessages(locale);

  const event = await prisma.event.findUnique({
    where: { shareToken: token },
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

  const member = await getCurrentMember();

  if (!member) {
    const options = event.options.map((o) => ({ id: o.id, label: o.label }));
    const days = buildResponseDays(event.days, "", options, locale);

    return (
      <main className="mx-auto w-full max-w-xl flex-1 px-4 py-10">
        <EventEntryGate
          title={event.title}
          comment={event.comment}
          showParticipantNames={event.showParticipantNames}
          days={days}
          requireLogin={event.requireLogin}
          token={token}
        />
      </main>
    );
  }

  if (event.requireLogin) {
    const membership = await ensureMembershipRequest(member.id, event.userId);
    if (membership.status === "PENDING") {
      return (
        <main className="mx-auto w-full max-w-md flex-1 px-4 py-16 text-center">
          <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
            {event.title}
          </h1>
          <p className="mt-4 text-sm text-slate-600">{m.share.pendingApproval}</p>
        </main>
      );
    }
    if (membership.status === "REJECTED") {
      return (
        <main className="mx-auto w-full max-w-md flex-1 px-4 py-16 text-center">
          <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
            {event.title}
          </h1>
          <p className="mt-4 text-sm text-slate-600">{m.share.rejected}</p>
        </main>
      );
    }
  }

  const options = event.options.map((o) => ({ id: o.id, label: o.label }));
  const days = buildResponseDays(event.days, member.id, options, locale);
  const calendarUrl = `${await getBaseUrl()}/calendar/${member.calendarToken}`;

  return (
    <main className="mx-auto w-full max-w-xl flex-1 px-4 py-10">
      {!member.isGuest && (
        <Link
          href="/member"
          className="mb-3 inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition-colors hover:text-indigo-600 print:hidden"
        >
          {m.common.backToMyPage}
        </Link>
      )}
      <EventResponseCard
        eventId={event.id}
        title={event.title}
        comment={event.comment}
        options={options}
        showParticipantNames={event.showParticipantNames}
        allowMultipleAnswers={event.allowMultipleAnswers}
        days={days}
      />
      {member.isGuest && (
        <div className="mt-6 print:hidden">
          <CalendarSyncBox url={calendarUrl} />
        </div>
      )}
    </main>
  );
}
