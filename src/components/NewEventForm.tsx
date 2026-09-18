"use client";

import { useActionState, useEffect, useId, useState, useTransition } from "react";
import { SubmitButton } from "@/components/SubmitButton";
import { createEvent } from "@/lib/actions/events";
import { suggestSchedule, checkAiAvailability } from "@/lib/actions/ai-schedule";
import { useMessages } from "@/lib/i18n/client";
import type { ActionState } from "@/lib/action-state";

type SlotRow = { id: string; label: string };
type DayRow = { id: string; date: string; comment: string; slots: SlotRow[] };

export function NewEventForm({ defaultRequireLogin }: { defaultRequireLogin: boolean }) {
  const m = useMessages();
  const [state, formAction] = useActionState<ActionState, FormData>(
    createEvent,
    undefined
  );
  const baseId = useId();
  const [days, setDays] = useState<DayRow[]>([
    { id: `${baseId}-day-0`, date: "", comment: "", slots: [] },
  ]);
  const [dayCounter, setDayCounter] = useState(1);

  const [aiText, setAiText] = useState("");
  const [aiError, setAiError] = useState<string | null>(null);
  const [aiPending, startAiTransition] = useTransition();
  // ページ描画をブロックしないよう、混雑チェックはマウント後にクライアント側で行う
  // (サーバー側でawaitすると、Qwenが応答不能な間ページ表示自体が数秒待たされていた)。
  const [aiAvailable, setAiAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;
    checkAiAvailability().then((available) => {
      if (!cancelled) setAiAvailable(available);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  function addDay() {
    setDays((ds) => [
      ...ds,
      { id: `${baseId}-day-${dayCounter}`, date: "", comment: "", slots: [] },
    ]);
    setDayCounter((n) => n + 1);
  }

  function toDateInputValue(d: Date): string {
    const y = d.getFullYear();
    const mo = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${mo}-${day}`;
  }

  // 最後の日付を複製する。直近2件の日付が両方入力済みならその差を、
  // そうでなければ1日を、最後の日付に加算した値を新しい日付として入れる
  // (等間隔の予定や、1件しかない場合の翌日予定を素早く追加できるように)。
  function duplicateLastDay() {
    if (days.length === 0) return;
    const last = days[days.length - 1];
    let newDate = last.date;

    if (last.date) {
      const d2 = new Date(`${last.date}T00:00:00`);
      let stepMs = 24 * 60 * 60 * 1000;

      if (days.length >= 2) {
        const secondLast = days[days.length - 2];
        if (secondLast.date) {
          const d1 = new Date(`${secondLast.date}T00:00:00`);
          const diffMs = d2.getTime() - d1.getTime();
          if (!Number.isNaN(diffMs) && diffMs > 0) {
            stepMs = diffMs;
          }
        }
      }

      newDate = toDateInputValue(new Date(d2.getTime() + stepMs));
    }

    const newId = `${baseId}-day-${dayCounter}`;
    const newSlots = last.slots.map((s, i) => ({ id: `${newId}-slot-${i}`, label: s.label }));
    setDays((ds) => [...ds, { id: newId, date: newDate, comment: last.comment, slots: newSlots }]);
    setDayCounter((n) => n + 1);
  }

  function removeDay(dayId: string) {
    setDays((ds) => ds.filter((d) => d.id !== dayId));
  }

  function updateDayDate(dayId: string, date: string) {
    setDays((ds) => ds.map((d) => (d.id === dayId ? { ...d, date } : d)));
  }

  function updateDayComment(dayId: string, comment: string) {
    setDays((ds) => ds.map((d) => (d.id === dayId ? { ...d, comment } : d)));
  }

  function addSlot(dayId: string) {
    setDays((ds) =>
      ds.map((d) =>
        d.id === dayId
          ? { ...d, slots: [...d.slots, { id: `${dayId}-slot-${d.slots.length}`, label: "" }] }
          : d
      )
    );
  }

  function updateSlotLabel(dayId: string, slotId: string, label: string) {
    setDays((ds) =>
      ds.map((d) =>
        d.id === dayId
          ? { ...d, slots: d.slots.map((s) => (s.id === slotId ? { ...s, label } : s)) }
          : d
      )
    );
  }

  function removeSlot(dayId: string, slotId: string) {
    setDays((ds) =>
      ds.map((d) =>
        d.id === dayId
          ? { ...d, slots: d.slots.filter((s) => s.id !== slotId) }
          : d
      )
    );
  }

  function handleAiSuggest() {
    if (!aiText.trim()) {
      setAiError(m.errors.aiEmpty);
      return;
    }
    setAiError(null);
    startAiTransition(async () => {
      const result = await suggestSchedule(aiText);
      if ("error" in result) {
        setAiError(result.error);
        return;
      }
      const newDays: DayRow[] = result.days.map((d, i) => ({
        id: `${baseId}-ai-day-${i}`,
        date: d.date,
        comment: d.comment ?? "",
        slots: d.slots.map((label, j) => ({ id: `${baseId}-ai-day-${i}-slot-${j}`, label })),
      }));
      setDays(newDays);
      setDayCounter(newDays.length);
    });
  }

  const inputClass =
    "block w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-slate-900 shadow-sm transition-colors focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-100";

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-slate-700">
          {m.newEvent.titleLabel}
        </label>
        <input
          name="title"
          type="text"
          required
          placeholder={m.newEvent.titlePlaceholder}
          className={`mt-1.5 ${inputClass}`}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700">
          {m.newEvent.commentLabel}
        </label>
        <textarea
          name="comment"
          rows={3}
          placeholder={m.newEvent.commentPlaceholder}
          className={`mt-1.5 ${inputClass}`}
        />
      </div>

      {aiAvailable === null ? (
        <p className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3.5 text-xs text-slate-400">
          {m.newEvent.aiChecking}
        </p>
      ) : aiAvailable ? (
        <div className="rounded-xl border border-dashed border-indigo-200 bg-indigo-50/40 p-3.5">
          <label className="block text-sm font-semibold text-slate-700">
            {m.newEvent.aiLabel}
          </label>
          <p className="mt-1 text-xs text-slate-500">{m.newEvent.aiHelp}</p>
          <textarea
            value={aiText}
            onChange={(e) => setAiText(e.target.value)}
            rows={2}
            placeholder={m.newEvent.aiPlaceholder}
            className={`mt-2 text-sm ${inputClass}`}
          />
          <button
            type="button"
            onClick={handleAiSuggest}
            disabled={aiPending}
            className="mt-2 rounded-full border border-indigo-200 bg-white px-4 py-2 text-xs font-semibold text-indigo-600 transition-colors hover:bg-indigo-50 disabled:opacity-50"
          >
            {aiPending ? m.newEvent.aiGenerating : m.newEvent.aiButton}
          </button>
          {aiError && <p className="mt-2 text-xs text-red-600">{aiError}</p>}
        </div>
      ) : (
        <p className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3.5 text-xs text-slate-400">
          {m.newEvent.aiUnavailable}
        </p>
      )}

      <div>
        <label className="block text-sm font-semibold text-slate-700">
          {m.newEvent.datesLabel}
        </label>
        <p className="mt-1 text-xs text-slate-500">{m.newEvent.datesHelp}</p>

        <div className="mt-3 space-y-3">
          {days.map((day, index) => (
            <div
              key={day.id}
              className="rounded-xl border border-slate-100 bg-slate-50/60 p-3.5"
            >
              <input type="hidden" name="dayIds" value={day.id} />
              <div className="flex items-center gap-2">
                <input
                  name={`date-${day.id}`}
                  type="date"
                  required
                  value={day.date}
                  onChange={(e) => updateDayDate(day.id, e.target.value)}
                  className={inputClass}
                />
                <button
                  type="button"
                  onClick={() => removeDay(day.id)}
                  disabled={days.length <= 1}
                  className="shrink-0 rounded-lg border border-slate-200 px-2.5 py-2.5 text-sm text-slate-500 transition-colors hover:bg-white disabled:opacity-30"
                  aria-label={m.newEvent.removeDateAria}
                >
                  {m.newEvent.removeDate}
                </button>
              </div>

              <input
                name={`comment-${day.id}`}
                type="text"
                placeholder={m.newEvent.dayCommentPlaceholder}
                value={day.comment}
                onChange={(e) => updateDayComment(day.id, e.target.value)}
                className={`mt-2 text-sm ${inputClass}`}
              />

              {day.slots.length > 0 && (
                <div className="mt-2 space-y-2 border-s-2 border-indigo-200 ps-3">
                  {day.slots.map((slot) => (
                    <div key={slot.id} className="flex items-center gap-2">
                      <input
                        name={`slots-${day.id}`}
                        type="text"
                        placeholder={m.newEvent.slotPlaceholder}
                        value={slot.label}
                        onChange={(e) => updateSlotLabel(day.id, slot.id, e.target.value)}
                        className={`text-sm ${inputClass}`}
                      />
                      <button
                        type="button"
                        onClick={() => removeSlot(day.id, slot.id)}
                        className="shrink-0 rounded-lg border border-slate-200 px-2 py-1.5 text-xs text-slate-500 transition-colors hover:bg-white"
                        aria-label={m.newEvent.removeSlotAria}
                      >
                        {m.common.delete}
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <button
                type="button"
                onClick={() => addSlot(day.id)}
                className="mt-2 text-xs font-semibold text-indigo-600 hover:underline"
              >
                {m.newEvent.addSlot}
              </button>

              {index === days.length - 1 && (
                <div className="mt-1 text-[11px] text-slate-400">{m.newEvent.exampleHint}</div>
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addDay}
          className="mt-2 text-sm font-semibold text-indigo-600 hover:underline"
        >
          {m.newEvent.addDate}
        </button>
        <button
          type="button"
          onClick={duplicateLastDay}
          className="mt-2 ms-4 text-sm font-semibold text-indigo-600 hover:underline"
        >
          {m.newEvent.duplicate}
        </button>
      </div>

      <div className="flex items-start gap-2 rounded-xl bg-indigo-50/60 p-3.5">
        <input
          id="requireLogin"
          name="requireLogin"
          type="checkbox"
          defaultChecked={defaultRequireLogin}
          className="mt-1 h-4 w-4 accent-indigo-600"
        />
        <label htmlFor="requireLogin" className="text-sm text-slate-700">
          {m.newEvent.requireLoginLabel}
          <span className="block text-xs text-slate-500">{m.newEvent.requireLoginHelp}</span>
        </label>
      </div>

      {state?.error && (
        <p className="text-sm text-red-600" role="alert">
          {state.error}
        </p>
      )}

      <SubmitButton>{m.newEvent.create}</SubmitButton>
    </form>
  );
}
