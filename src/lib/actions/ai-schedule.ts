"use server";

import { format } from "date-fns";
import {
  extractScheduleFromText,
  isAiScheduleAvailable,
  type AiScheduleDay,
} from "@/lib/ai-schedule";
import { LOCALE_NAMES } from "@/lib/i18n";
import { getLocale, getServerMessages } from "@/lib/i18n/server";

export type SuggestScheduleResult = { error: string } | { days: AiScheduleDay[] };

export async function checkAiAvailability(): Promise<boolean> {
  return isAiScheduleAvailable();
}

export async function suggestSchedule(text: string): Promise<SuggestScheduleResult> {
  const m = await getServerMessages();
  const trimmed = text.trim();
  if (!trimmed) {
    return { error: m.errors.aiEmpty };
  }

  try {
    const today = format(new Date(), "yyyy-MM-dd");
    const locale = await getLocale();
    const days = await extractScheduleFromText(trimmed, today, LOCALE_NAMES[locale]);
    if (days.length === 0) {
      return { error: m.errors.aiNoSchedule };
    }
    return { days };
  } catch (err) {
    console.error("suggestSchedule failed:", err);
    return { error: m.errors.aiFailed };
  }
}
