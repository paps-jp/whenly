import { isPastDay } from "@/lib/date";
import { formatDayLabel, getMessages, type Locale } from "@/lib/i18n";

const MAX_DATES = 3;

// OGP画像の2行目: 今後の候補日を最大3件(無ければ過去も含めて)並べる。
export function buildSubtitle(days: { date: Date }[], locale: Locale): string {
  const m = getMessages(locale);
  const upcoming = days.filter((d) => !isPastDay(d.date));
  const source = upcoming.length > 0 ? upcoming : days;
  const labels = source.slice(0, MAX_DATES).map((d) => formatDayLabel(locale, d.date));
  if (labels.length === 0) return "";
  return labels.join(m.common.listSeparator) + (source.length > MAX_DATES ? " …" : "");
}
