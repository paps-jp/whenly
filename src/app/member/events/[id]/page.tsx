import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { getCurrentMember } from "@/lib/session";
import { buildResponseDays } from "@/lib/response-view";
import { getMessages } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/server";
import { EventResponseCard } from "@/components/EventResponseCard";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function MemberEventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const member = await getCurrentMember();
  if (!member) redirect("/member/login");
  const locale = await getLocale();
  const m = getMessages(locale);

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

  if (event.requireLogin) {
    const membership = await prisma.membership.findUnique({
      where: { memberId_userId: { memberId: member.id, userId: event.userId } },
    });
    if (!membership || membership.status !== "APPROVED") notFound();
  }

  const options = event.options.map((o) => ({ id: o.id, label: o.label }));
  const days = buildResponseDays(event.days, member.id, options, locale);

  return (
    <main className="mx-auto w-full max-w-xl flex-1 px-4 py-10">
      <Link
        href="/member"
        className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 transition-colors hover:text-indigo-600"
      >
        {m.common.backToMyPage}
      </Link>
      <div className="mt-3">
        <EventResponseCard
          eventId={event.id}
          title={event.title}
          comment={event.comment}
          options={options}
          showParticipantNames={event.showParticipantNames}
          allowMultipleAnswers={event.allowMultipleAnswers}
          days={days}
        />
      </div>
    </main>
  );
}
