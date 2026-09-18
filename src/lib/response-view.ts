import { isPastDay } from "@/lib/date";
import { formatDayLabel, getMessages, type Locale } from "@/lib/i18n";
import type { ResponseDay, OptionCount } from "@/components/EventResponseCard";

type ResponseWithMember = {
  memberId: string;
  optionId: string;
  member: { name: string | null; isGuest: boolean };
};

type Option = { id: string; label: string };

type DayWithRelations = {
  id: string;
  date: Date;
  comment: string | null;
  responses: ResponseWithMember[];
  slots: {
    id: string;
    label: string;
    responses: ResponseWithMember[];
  }[];
};

export function buildResponseDays(
  days: DayWithRelations[],
  memberId: string,
  options: Option[],
  locale: Locale
): ResponseDay[] {
  const m = getMessages(locale);

  function memberLabel(member: { name: string | null; isGuest: boolean }) {
    return member.name || (member.isGuest ? m.common.guest : m.common.unnamed);
  }

  function summarize(responses: ResponseWithMember[]) {
    const counts: OptionCount[] = options.map((o) => {
      const forOption = responses.filter((r) => r.optionId === o.id);
      return {
        optionId: o.id,
        label: o.label,
        count: forOption.length,
        names: forOption.map((r) => memberLabel(r.member)),
      };
    });
    return {
      myAnswers: responses.filter((r) => r.memberId === memberId).map((r) => r.optionId),
      counts,
    };
  }

  return days.map((day) => ({
    id: day.id,
    dateLabel: formatDayLabel(locale, day.date),
    comment: day.comment,
    isPast: isPastDay(day.date),
    ...summarize(day.responses),
    slots: day.slots.map((slot) => ({
      id: slot.id,
      label: slot.label,
      ...summarize(slot.responses),
    })),
  }));
}
