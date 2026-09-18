"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { saveResponses, type AnswerInput } from "@/lib/actions/responses";
import { ParticipantNameChips, ParticipantCountBadge } from "@/components/NameChips";
import { AdSenseUnit } from "@/components/AdSenseUnit";
import { PrintButton } from "@/components/PrintButton";
import { interpolate, type Messages } from "@/lib/i18n";
import { useMessages } from "@/lib/i18n/client";

const TONE_ACTIVE = [
  "bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-md shadow-emerald-300/60",
  "bg-gradient-to-br from-sky-400 to-sky-600 text-white shadow-md shadow-sky-300/60",
  "bg-gradient-to-br from-amber-300 to-amber-500 text-white shadow-md shadow-amber-300/60",
  "bg-gradient-to-br from-violet-400 to-violet-600 text-white shadow-md shadow-violet-300/60",
  "bg-gradient-to-br from-rose-400 to-rose-600 text-white shadow-md shadow-rose-300/60",
];

export type Option = { id: string; label: string };
export type OptionCount = { optionId: string; label: string; count: number; names: string[] };

function AnswerToggle({
  options,
  value,
  onToggle,
}: {
  options: Option[];
  value: string[];
  onToggle: (optionId: string) => void;
}) {
  return (
    <div className="flex flex-wrap justify-end gap-2">
      {options.map((o, i) => (
        <button
          key={o.id}
          type="button"
          onClick={() => onToggle(o.id)}
          title={o.label}
          className={`flex h-11 min-w-11 items-center justify-center rounded-full px-2 text-sm font-bold transition-all active:scale-90 ${
            value.includes(o.id)
              ? TONE_ACTIVE[i % TONE_ACTIVE.length]
              : "border-2 border-slate-200 text-slate-400 hover:border-slate-300 hover:text-slate-600"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function answerText(m: Messages, options: Option[], optionIds: string[]) {
  if (optionIds.length === 0) return m.share.unanswered;
  return optionIds
    .map((id) => options.find((o) => o.id === id)?.label ?? "")
    .filter(Boolean)
    .join(m.common.listSeparator);
}

export type ResponseDay = {
  id: string;
  dateLabel: string;
  comment: string | null;
  isPast: boolean;
  myAnswers: string[];
  counts: OptionCount[];
  slots: {
    id: string;
    label: string;
    myAnswers: string[];
    counts: OptionCount[];
  }[];
};

export function ParticipationSummary({
  showNames,
  counts,
}: {
  showNames: boolean;
  counts: OptionCount[];
}) {
  if (!showNames) {
    const primary = counts[0];
    if (!primary) return null;
    return <ParticipantCountBadge label={primary.label} count={primary.count} />;
  }
  return (
    <ParticipantNameChips
      options={counts.map((c) => ({ label: c.label, names: c.names }))}
    />
  );
}

export function EventResponseCard({
  eventId,
  title,
  comment,
  options,
  showParticipantNames,
  allowMultipleAnswers,
  days,
}: {
  eventId: string;
  title: string;
  comment?: string | null;
  options: Option[];
  showParticipantNames: boolean;
  allowMultipleAnswers: boolean;
  days: ResponseDay[];
}) {
  const m = useMessages();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{ text: string; ok: boolean } | null>(
    null
  );

  const upcomingDays = days.filter((d) => !d.isPast);
  const pastDays = days.filter((d) => d.isPast);

  const [answers, setAnswers] = useState<Record<string, string[]>>(() => {
    const initial: Record<string, string[]> = {};
    for (const day of upcomingDays) {
      if (day.slots.length === 0) {
        initial[`day:${day.id}`] = day.myAnswers;
      } else {
        for (const slot of day.slots) {
          initial[`slot:${slot.id}`] = slot.myAnswers;
        }
      }
    }
    return initial;
  });

  function toggleAnswer(key: string, optionId: string) {
    setAnswers((prev) => {
      const current = prev[key] ?? [];
      const isSelected = current.includes(optionId);
      const next = isSelected
        ? current.filter((id) => id !== optionId)
        : allowMultipleAnswers
          ? [...current, optionId]
          : [optionId];
      return { ...prev, [key]: next };
    });
    setMessage(null);
  }

  function handleSave() {
    const payload: AnswerInput[] = Object.entries(answers).map(([key, optionIds]) => {
      const [kind, id] = key.split(":");
      return kind === "day"
        ? { kind: "day" as const, dayId: id, optionIds }
        : { kind: "slot" as const, slotId: id, optionIds };
    });

    startTransition(async () => {
      const result = await saveResponses(eventId, payload);
      if ("error" in result) {
        setMessage({ text: result.error, ok: false });
      } else {
        setMessage({ text: m.common.saved, ok: true });
        router.refresh();
      }
    });
  }

  function yourAnswer(optionIds: string[]) {
    return interpolate(m.share.yourAnswer, { answer: answerText(m, options, optionIds) });
  }

  return (
    <div>
      <div className="flex items-start justify-between gap-3">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
          {title}
        </h1>
        <PrintButton className="mt-0.5 shrink-0" />
      </div>
      {comment && (
        <p className="mt-2 whitespace-pre-wrap text-sm text-slate-600">
          {comment}
        </p>
      )}
      <p className="mt-4 text-xs text-slate-400 print:hidden">
        {showParticipantNames ? m.share.namesShown : m.share.namesHidden}
        {allowMultipleAnswers && m.share.multipleHint}
      </p>

      {upcomingDays.length === 0 ? (
        <p className="mt-4 text-sm text-slate-500">{m.share.noUpcomingDates}</p>
      ) : (
        <div className="mt-4 space-y-4 print:space-y-3">
          {upcomingDays.map((day) => (
            <div
              key={day.id}
              className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm shadow-slate-200/40 transition-shadow hover:shadow-md print:break-inside-avoid print:rounded-none print:border-slate-300 print:shadow-none"
            >
              <p className="font-semibold text-slate-900">{day.dateLabel}</p>
              {day.comment && (
                <p className="mt-1 whitespace-pre-wrap text-xs text-slate-500">
                  {day.comment}
                </p>
              )}

              {day.slots.length === 0 ? (
                <div className="mt-2 flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <ParticipationSummary
                      showNames={showParticipantNames}
                      counts={day.counts}
                    />
                    <p className="hidden text-xs text-slate-600 print:block">
                      {yourAnswer(answers[`day:${day.id}`] ?? [])}
                    </p>
                  </div>
                  <div className="print:hidden">
                    <AnswerToggle
                      options={options}
                      value={answers[`day:${day.id}`] ?? []}
                      onToggle={(v) => toggleAnswer(`day:${day.id}`, v)}
                    />
                  </div>
                </div>
              ) : (
                <ul className="mt-2 space-y-3 border-s-2 border-indigo-100 ps-3 print:border-slate-300">
                  {day.slots.map((slot) => (
                    <li
                      key={slot.id}
                      className="flex items-start justify-between gap-4"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-slate-800">{slot.label}</p>
                        <div className="mt-1">
                          <ParticipationSummary
                            showNames={showParticipantNames}
                            counts={slot.counts}
                          />
                          <p className="hidden text-xs text-slate-600 print:block">
                            {yourAnswer(answers[`slot:${slot.id}`] ?? [])}
                          </p>
                        </div>
                      </div>
                      <div className="print:hidden">
                        <AnswerToggle
                          options={options}
                          value={answers[`slot:${slot.id}`] ?? []}
                          onToggle={(v) => toggleAnswer(`slot:${slot.id}`, v)}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {pastDays.length > 0 && (
        <details className="mt-6 print:hidden">
          <summary className="cursor-pointer text-sm font-medium text-indigo-600 hover:underline">
            {interpolate(m.share.pastHistory, { n: pastDays.length })}
          </summary>
          <div className="mt-3 space-y-3 opacity-70">
            {pastDays.map((day) => (
              <div
                key={day.id}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
              >
                <p className="font-semibold text-slate-900">{day.dateLabel}</p>
                {day.comment && (
                  <p className="mt-1 whitespace-pre-wrap text-xs text-slate-500">
                    {day.comment}
                  </p>
                )}
                {day.slots.length === 0 ? (
                  <p className="mt-2 text-sm text-slate-600">{yourAnswer(day.myAnswers)}</p>
                ) : (
                  <ul className="mt-2 space-y-1 border-s-2 border-slate-200 ps-3">
                    {day.slots.map((slot) => (
                      <li key={slot.id} className="text-sm text-slate-600">
                        {slot.label}: {yourAnswer(slot.myAnswers)}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </details>
      )}

      {upcomingDays.length > 0 && (
        <div className="sticky bottom-0 mt-6 flex items-center justify-center gap-3 border-t border-slate-100 bg-[#f7f7fb]/95 py-4 backdrop-blur print:hidden">
          <button
            type="button"
            onClick={handleSave}
            disabled={isPending}
            className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-7 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-300/50 transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-50"
          >
            {isPending ? m.common.saving : m.share.saveAnswers}
          </button>
          {message && (
            <span
              className={`text-sm font-medium ${message.ok ? "text-emerald-600" : "text-red-600"}`}
              role="status"
            >
              {message.text}{message.ok ? " ✓" : ""}
            </span>
          )}
        </div>
      )}

      <div className="print:hidden">
        <AdSenseUnit />
      </div>
    </div>
  );
}
