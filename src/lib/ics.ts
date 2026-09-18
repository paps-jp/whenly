function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

function toIcsDate(date: Date): string {
  return `${date.getUTCFullYear()}${pad2(date.getUTCMonth() + 1)}${pad2(date.getUTCDate())}`;
}

function nextDay(date: Date): Date {
  return new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + 1)
  );
}

function toIcsTimestamp(date: Date): string {
  return `${date.getUTCFullYear()}${pad2(date.getUTCMonth() + 1)}${pad2(date.getUTCDate())}T${pad2(
    date.getUTCHours()
  )}${pad2(date.getUTCMinutes())}${pad2(date.getUTCSeconds())}Z`;
}

function escapeText(text: string): string {
  return text
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\r?\n/g, "\\n");
}

export type IcsEntry = {
  uid: string;
  date: Date;
  title: string;
  description?: string;
};

// カレンダー購読(.ics)フィード生成。EventDay/EventSlotには時刻の構造化データが
// 無い(時間帯は自由テキストのため)ので、常に終日イベントとして出力する。
export function buildIcsFeed(calendarName: string, entries: IcsEntry[]): string {
  const now = toIcsTimestamp(new Date());
  const lines: string[] = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//whenly//JP",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    `X-WR-CALNAME:${escapeText(calendarName)}`,
  ];

  for (const entry of entries) {
    lines.push(
      "BEGIN:VEVENT",
      `UID:${entry.uid}@whenly`,
      `DTSTAMP:${now}`,
      `DTSTART;VALUE=DATE:${toIcsDate(entry.date)}`,
      `DTEND;VALUE=DATE:${toIcsDate(nextDay(entry.date))}`,
      `SUMMARY:${escapeText(entry.title)}`
    );
    if (entry.description) {
      lines.push(`DESCRIPTION:${escapeText(entry.description)}`);
    }
    lines.push("END:VEVENT");
  }

  lines.push("END:VCALENDAR");
  return lines.join("\r\n") + "\r\n";
}
