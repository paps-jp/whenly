import { prisma } from "@/lib/prisma";
import { buildIcsFeed, type IcsEntry } from "@/lib/ics";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;

  const member = await prisma.member.findUnique({
    where: { calendarToken: token },
    select: {
      responses: {
        select: {
          id: true,
          option: { select: { label: true } },
          eventDay: {
            select: { id: true, date: true, event: { select: { title: true } } },
          },
          eventSlot: {
            select: {
              id: true,
              label: true,
              day: { select: { id: true, date: true, event: { select: { title: true } } } },
            },
          },
        },
      },
    },
  });

  if (!member) {
    return new Response("Not found", { status: 404 });
  }

  const entries: IcsEntry[] = member.responses.map((r) => {
    if (r.eventSlot) {
      return {
        uid: `slot-${r.eventSlot.id}-${r.id}`,
        date: r.eventSlot.day.date,
        title: `${r.eventSlot.day.event.title}(${r.eventSlot.label}) - ${r.option.label}`,
      };
    }
    return {
      uid: `day-${r.eventDay!.id}-${r.id}`,
      date: r.eventDay!.date,
      title: `${r.eventDay!.event.title} - ${r.option.label}`,
    };
  });

  const body = buildIcsFeed("whenly", entries);

  return new Response(body, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'inline; filename="whenly.ics"',
      "Cache-Control": "private, max-age=300",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
