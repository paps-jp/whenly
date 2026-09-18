"use client";

import { useActionState, useId, useState } from "react";
import { saveEventSettings, deleteEventDay } from "@/lib/actions/events";
import type { ActionState } from "@/lib/action-state";
import { ParticipantNameChips } from "@/components/NameChips";
import { interpolate } from "@/lib/i18n";
import { useMessages } from "@/lib/i18n/client";

const FORM_ID = "event-settings-form";
const MAX_OPTIONS = 10;
const inputClass =
  "block w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-slate-900 shadow-sm transition-colors focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-100";

export type ParticipantSummary = {
  key: string;
  label: string | null;
  options: { label: string; names: string[] }[];
};

export type DayBoxData = {
  id: string;
  dateISO: string;
  dateLabel: string;
  monthLabel: string;
  comment: string | null;
  participants: ParticipantSummary[];
};

export type OptionData = {
  id: string;
  label: string;
  responseCount?: number;
};

type NewSlotRow = { id: string; label: string };
type NewDayRow = { id: string; date: string; comment: string; slots: NewSlotRow[] };

function ParticipantLines({ participants }: { participants: ParticipantSummary[] }) {
  return (
    <div className="mt-3 space-y-3 border-t border-slate-100 pt-3">
      {participants.map((p) => (
        <div key={p.key}>
          {p.label && (
            <p className="text-xs font-semibold text-slate-600">{p.label}</p>
          )}
          <div className="mt-1">
            <ParticipantNameChips options={p.options} />
          </div>
        </div>
      ))}
    </div>
  );
}

function DeleteDayButton({ dayId, dateLabel }: { dayId: string; dateLabel: string }) {
  const m = useMessages();
  return (
    <form
      action={deleteEventDay}
      onSubmit={(e) => {
        if (!confirm(interpolate(m.settings.deleteDayConfirm, { date: dateLabel }))) {
          e.preventDefault();
        }
      }}
    >
      <input type="hidden" name="dayId" value={dayId} />
      <button
        type="submit"
        className="rounded-full px-2 py-1 text-xs font-semibold text-rose-400 transition-colors hover:bg-rose-50 hover:text-rose-600"
      >
        {m.common.delete}
      </button>
    </form>
  );
}

function tabClass(active: boolean) {
  return `border-b-2 px-4 py-2 text-sm font-semibold transition-colors ${
    active
      ? "border-indigo-600 text-indigo-600"
      : "border-transparent text-slate-400 hover:text-slate-600"
  }`;
}

function groupByMonth(days: DayBoxData[]): { month: string; days: DayBoxData[] }[] {
  const order: string[] = [];
  const map = new Map<string, DayBoxData[]>();
  for (const day of days) {
    if (!map.has(day.monthLabel)) {
      map.set(day.monthLabel, []);
      order.push(day.monthLabel);
    }
    map.get(day.monthLabel)!.push(day);
  }
  return order.map((month) => ({ month, days: map.get(month)! }));
}

function DayList({
  upcomingDays,
  pastDays,
}: {
  upcomingDays: DayBoxData[];
  pastDays: DayBoxData[];
}) {
  const m = useMessages();
  const [tab, setTab] = useState<"upcoming" | "history">("upcoming");
  const [monthIndex, setMonthIndex] = useState(0);

  const days = tab === "upcoming" ? upcomingDays : pastDays;
  const months = groupByMonth(days);
  const currentIndex = Math.min(monthIndex, Math.max(0, months.length - 1));
  const currentMonth = months[currentIndex];

  function switchTab(next: "upcoming" | "history") {
    setTab(next);
    setMonthIndex(0);
  }

  return (
    <div>
      <div className="flex gap-1 border-b border-slate-100">
        <button
          type="button"
          onClick={() => switchTab("upcoming")}
          className={tabClass(tab === "upcoming")}
        >
          {interpolate(m.settings.upcomingTab, { n: upcomingDays.length })}
        </button>
        <button
          type="button"
          onClick={() => switchTab("history")}
          className={tabClass(tab === "history")}
        >
          {interpolate(m.settings.historyTab, { n: pastDays.length })}
        </button>
      </div>

      {days.length === 0 ? (
        <p className="mt-4 text-sm text-slate-500">
          {tab === "upcoming" ? m.settings.noUpcomingDates : m.settings.noPastDates}
        </p>
      ) : (
        <>
          {months.length > 1 && (
            <div className="mt-4 flex items-center justify-center gap-4">
              <button
                type="button"
                disabled={currentIndex <= 0}
                onClick={() => setMonthIndex((i) => i - 1)}
                className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-50 disabled:opacity-30"
              >
                {m.settings.prevMonth}
              </button>
              <span className="text-sm font-semibold text-slate-700">
                {currentMonth.month}
              </span>
              <button
                type="button"
                disabled={currentIndex >= months.length - 1}
                onClick={() => setMonthIndex((i) => i + 1)}
                className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-50 disabled:opacity-30"
              >
                {m.settings.nextMonth}
              </button>
            </div>
          )}

          <div
            className={`mt-4 grid gap-3 sm:grid-cols-2 ${
              tab === "history" ? "opacity-80" : ""
            }`}
          >
            {currentMonth.days.map((day) => (
              <DayBox key={day.id} day={day} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function DayBox({ day }: { day: DayBoxData }) {
  const m = useMessages();
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm shadow-slate-200/40 transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-2">
        <p className="font-semibold text-slate-900">{day.dateLabel}</p>
        <DeleteDayButton dayId={day.id} dateLabel={day.dateLabel} />
      </div>

      <input
        form={FORM_ID}
        name={`comment-${day.id}`}
        type="text"
        defaultValue={day.comment ?? ""}
        placeholder={m.settings.commentPlaceholder}
        className="mt-2 block w-full rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs text-slate-700 transition-colors focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100"
      />

      <ParticipantLines participants={day.participants} />
    </div>
  );
}

type NewOptionRow = { key: string };

function OptionsEditor({ options }: { options: OptionData[] }) {
  const m = useMessages();
  const [removedIds, setRemovedIds] = useState<Set<string>>(new Set());
  const [newRows, setNewRows] = useState<NewOptionRow[]>([]);
  const [nextKey, setNextKey] = useState(0);

  const keptOptions = options.filter((o) => !removedIds.has(o.id));
  const totalCount = keptOptions.length + newRows.length;

  function removeExisting(option: OptionData) {
    const count = option.responseCount ?? 0;
    if (count > 0) {
      if (
        !confirm(
          interpolate(m.settings.optionRemoveConfirm, { label: option.label, count })
        )
      ) {
        return;
      }
    }
    setRemovedIds((prev) => new Set(prev).add(option.id));
  }

  function addNewRow() {
    setNewRows((rows) => [...rows, { key: `new-${nextKey}` }]);
    setNextKey((n) => n + 1);
  }

  function removeNewRow(key: string) {
    setNewRows((rows) => rows.filter((r) => r.key !== key));
  }

  return (
    <div className="mt-3 border-t border-slate-100 pt-3">
      <p className="text-sm text-slate-700">{m.settings.optionsTitle}</p>
      <p className="mt-1 text-xs text-slate-400">
        {interpolate(m.settings.optionsHelp, { max: MAX_OPTIONS })}
      </p>

      <div className="mt-2 space-y-2">
        {options
          .filter((o) => !removedIds.has(o.id))
          .map((o) => (
            <div key={o.id} className="flex items-center gap-2">
              <input type="hidden" form={FORM_ID} name="optionIds" value={o.id} />
              <input
                form={FORM_ID}
                name={`optionLabel-${o.id}`}
                type="text"
                defaultValue={o.label}
                maxLength={12}
                required
                className={`text-sm ${inputClass}`}
              />
              <button
                type="button"
                onClick={() => removeExisting(o)}
                disabled={totalCount <= 1}
                className="shrink-0 rounded-lg border border-slate-200 px-2.5 py-2.5 text-xs text-slate-500 transition-colors hover:bg-slate-50 disabled:opacity-30"
              >
                {m.common.delete}
              </button>
            </div>
          ))}

        {newRows.map((row) => (
          <div key={row.key} className="flex items-center gap-2">
            <input
              form={FORM_ID}
              name="newOptionLabels"
              type="text"
              placeholder={m.settings.newOptionPlaceholder}
              maxLength={12}
              className={`text-sm ${inputClass}`}
            />
            <button
              type="button"
              onClick={() => removeNewRow(row.key)}
              className="shrink-0 rounded-lg border border-slate-200 px-2.5 py-2.5 text-xs text-slate-500 transition-colors hover:bg-slate-50"
            >
              {m.common.delete}
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addNewRow}
        disabled={totalCount >= MAX_OPTIONS}
        className="mt-2 text-xs font-semibold text-indigo-600 hover:underline disabled:cursor-not-allowed disabled:text-slate-300 disabled:no-underline"
      >
        {m.settings.addOption}
      </button>
    </div>
  );
}

export function EventSettingsForm({
  eventId,
  requireLogin,
  showParticipantNames,
  allowMultipleAnswers,
  allowUrlEdit,
  options,
  upcomingDays,
  pastDays,
}: {
  eventId: string;
  requireLogin: boolean;
  showParticipantNames: boolean;
  allowMultipleAnswers: boolean;
  allowUrlEdit: boolean;
  options: OptionData[];
  upcomingDays: DayBoxData[];
  pastDays: DayBoxData[];
}) {
  const m = useMessages();
  const [state, formAction, isPending] = useActionState<ActionState, FormData>(
    saveEventSettings,
    undefined
  );
  const baseId = useId();
  const [newDays, setNewDays] = useState<NewDayRow[]>([]);
  const [newDayCounter, setNewDayCounter] = useState(0);

  function addNewDay() {
    setNewDays((ds) => [
      ...ds,
      { id: `${baseId}-new-day-${newDayCounter}`, date: "", comment: "", slots: [] },
    ]);
    setNewDayCounter((n) => n + 1);
  }

  function removeNewDay(dayId: string) {
    setNewDays((ds) => ds.filter((d) => d.id !== dayId));
  }

  function updateNewDayDate(dayId: string, date: string) {
    setNewDays((ds) => ds.map((d) => (d.id === dayId ? { ...d, date } : d)));
  }

  function updateNewDayComment(dayId: string, comment: string) {
    setNewDays((ds) => ds.map((d) => (d.id === dayId ? { ...d, comment } : d)));
  }

  function addNewDaySlot(dayId: string) {
    setNewDays((ds) =>
      ds.map((d) =>
        d.id === dayId
          ? { ...d, slots: [...d.slots, { id: `${dayId}-slot-${d.slots.length}`, label: "" }] }
          : d
      )
    );
  }

  function updateNewDaySlotLabel(dayId: string, slotId: string, label: string) {
    setNewDays((ds) =>
      ds.map((d) =>
        d.id === dayId
          ? { ...d, slots: d.slots.map((s) => (s.id === slotId ? { ...s, label } : s)) }
          : d
      )
    );
  }

  function removeNewDaySlot(dayId: string, slotId: string) {
    setNewDays((ds) =>
      ds.map((d) =>
        d.id === dayId ? { ...d, slots: d.slots.filter((s) => s.id !== slotId) } : d
      )
    );
  }

  function toDateInputValue(d: Date): string {
    const y = d.getFullYear();
    const mo = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${mo}-${day}`;
  }

  // 既存の日付一覧+すでに追加欄に並んでいる新規日付の、末尾(直近2件の日付差、
  // 無ければ1日)を基準に、新しい日付行を1件追加する。押すたびに増えていく。
  function duplicateLastDay() {
    type Ref = { dateISO: string; comment: string | null; slotLabels: string[] };
    const realRefs: Ref[] = [...pastDays, ...upcomingDays].map((d) => ({
      dateISO: d.dateISO,
      comment: d.comment,
      slotLabels: d.participants.filter((p) => p.label !== null).map((p) => p.label as string),
    }));
    const stagedRefs: Ref[] = newDays
      .filter((d) => d.date)
      .map((d) => ({
        dateISO: d.date,
        comment: d.comment || null,
        slotLabels: d.slots.map((s) => s.label),
      }));
    const combined = [...realRefs, ...stagedRefs];
    if (combined.length === 0) return;

    const last = combined[combined.length - 1];
    const secondLast = combined.length >= 2 ? combined[combined.length - 2] : null;

    const lastDate = new Date(`${last.dateISO}T00:00:00`);
    let stepMs = 24 * 60 * 60 * 1000;
    if (secondLast) {
      const secondLastDate = new Date(`${secondLast.dateISO}T00:00:00`);
      const diffMs = lastDate.getTime() - secondLastDate.getTime();
      if (!Number.isNaN(diffMs) && diffMs > 0) {
        stepMs = diffMs;
      }
    }

    const nextDateISO = toDateInputValue(new Date(lastDate.getTime() + stepMs));
    const newId = `${baseId}-new-day-${newDayCounter}`;
    const newSlots = last.slotLabels.map((label, i) => ({ id: `${newId}-slot-${i}`, label }));
    setNewDays((ds) => [
      ...ds,
      { id: newId, date: nextDateISO, comment: last.comment ?? "", slots: newSlots },
    ]);
    setNewDayCounter((n) => n + 1);
  }

  return (
    <div>
      <form id={FORM_ID} action={formAction}>
        <input type="hidden" name="eventId" value={eventId} />
      </form>

      <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm shadow-slate-200/50">
        <div className="flex items-center gap-2.5">
          <input
            form={FORM_ID}
            id="requireLogin"
            name="requireLogin"
            type="checkbox"
            defaultChecked={requireLogin}
            className="h-4 w-4 accent-indigo-600"
          />
          <label htmlFor="requireLogin" className="text-sm text-slate-700">
            {m.settings.requireLogin}
          </label>
        </div>
        <div className="mt-3 flex items-center gap-2.5 border-t border-slate-100 pt-3">
          <input
            form={FORM_ID}
            id="showParticipantNames"
            name="showParticipantNames"
            type="checkbox"
            defaultChecked={showParticipantNames}
            className="h-4 w-4 accent-indigo-600"
          />
          <label
            htmlFor="showParticipantNames"
            className="text-sm text-slate-700"
          >
            {m.settings.showNames}
          </label>
        </div>
        <div className="mt-3 flex items-center gap-2.5 border-t border-slate-100 pt-3">
          <input
            form={FORM_ID}
            id="allowMultipleAnswers"
            name="allowMultipleAnswers"
            type="checkbox"
            defaultChecked={allowMultipleAnswers}
            className="h-4 w-4 accent-indigo-600"
          />
          <label
            htmlFor="allowMultipleAnswers"
            className="text-sm text-slate-700"
          >
            {m.settings.allowMultiple}
          </label>
        </div>
        <div className="mt-3 flex items-center gap-2.5 border-t border-slate-100 pt-3">
          <input
            form={FORM_ID}
            id="allowUrlEdit"
            name="allowUrlEdit"
            type="checkbox"
            defaultChecked={allowUrlEdit}
            onChange={(e) => {
              if (!e.target.checked && !confirm(m.settings.allowUrlEditConfirm)) {
                e.target.checked = true;
              }
            }}
            className="h-4 w-4 accent-indigo-600"
          />
          <label htmlFor="allowUrlEdit" className="text-sm text-slate-700">
            {m.settings.allowUrlEdit}
          </label>
        </div>

        <OptionsEditor options={options} />
      </div>

      <h2 className="mt-8 text-lg font-bold text-slate-900">
        {m.settings.participationHeading}
      </h2>
      <div className="mt-3">
        <DayList upcomingDays={upcomingDays} pastDays={pastDays} />
      </div>

      <div className="mt-6 rounded-2xl border border-dashed border-indigo-200 bg-indigo-50/40 p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-slate-700">{m.settings.addDatesTitle}</p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={addNewDay}
              className="text-sm font-semibold text-indigo-600 hover:underline"
            >
              {m.newEvent.addDate}
            </button>
            <button
              type="button"
              onClick={duplicateLastDay}
              className="text-sm font-semibold text-indigo-600 hover:underline"
            >
              {m.newEvent.duplicate}
            </button>
          </div>
        </div>

        {newDays.length === 0 ? (
          <p className="mt-2 text-xs text-slate-400">{m.settings.addDatesHelp}</p>
        ) : (
          <div className="mt-3 space-y-3">
            {newDays.map((day) => (
              <div
                key={day.id}
                className="rounded-xl border border-slate-100 bg-white p-3.5"
              >
                <input type="hidden" form={FORM_ID} name="newDayIds" value={day.id} />
                <div className="flex items-center gap-2">
                  <input
                    form={FORM_ID}
                    name={`newDate-${day.id}`}
                    type="date"
                    value={day.date}
                    onChange={(e) => updateNewDayDate(day.id, e.target.value)}
                    className={`text-sm ${inputClass}`}
                  />
                  <button
                    type="button"
                    onClick={() => removeNewDay(day.id)}
                    className="shrink-0 rounded-lg border border-slate-200 px-2.5 py-2.5 text-sm text-slate-500 transition-colors hover:bg-slate-50"
                    aria-label={m.newEvent.removeDateAria}
                  >
                    {m.common.delete}
                  </button>
                </div>

                <input
                  form={FORM_ID}
                  name={`newComment-${day.id}`}
                  type="text"
                  placeholder={m.newEvent.dayCommentPlaceholder}
                  value={day.comment}
                  onChange={(e) => updateNewDayComment(day.id, e.target.value)}
                  className={`mt-2 text-sm ${inputClass}`}
                />

                {day.slots.length > 0 && (
                  <div className="mt-2 space-y-2 border-s-2 border-indigo-200 ps-3">
                    {day.slots.map((slot) => (
                      <div key={slot.id} className="flex items-center gap-2">
                        <input
                          form={FORM_ID}
                          name={`newSlots-${day.id}`}
                          type="text"
                          placeholder={m.newEvent.slotPlaceholder}
                          value={slot.label}
                          onChange={(e) =>
                            updateNewDaySlotLabel(day.id, slot.id, e.target.value)
                          }
                          className={`text-sm ${inputClass}`}
                        />
                        <button
                          type="button"
                          onClick={() => removeNewDaySlot(day.id, slot.id)}
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
                  onClick={() => addNewDaySlot(day.id)}
                  className="mt-2 text-xs font-semibold text-indigo-600 hover:underline"
                >
                  {m.newEvent.addSlot}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="sticky bottom-0 mt-6 flex items-center gap-3 border-t border-slate-100 bg-[#f7f7fb]/95 py-4 backdrop-blur">
        <button
          type="submit"
          form={FORM_ID}
          disabled={isPending}
          className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-7 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-300/50 transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-50"
        >
          {isPending ? m.common.saving : m.common.save}
        </button>
        {state?.error && (
          <span className="text-sm text-red-600" role="alert">
            {state.error}
          </span>
        )}
        {state?.success && (
          <span className="text-sm font-medium text-emerald-600" role="status">
            {m.settings.saved}
          </span>
        )}
      </div>
    </div>
  );
}
