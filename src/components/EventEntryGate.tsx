"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { identifyGuest, claimGuestIdentity, createNewGuest } from "@/lib/actions/member-auth";
import { ParticipationSummary, type ResponseDay } from "@/components/EventResponseCard";
import { AdSenseUnit } from "@/components/AdSenseUnit";
import { PrintButton } from "@/components/PrintButton";
import { interpolate } from "@/lib/i18n";
import { useMessages } from "@/lib/i18n/client";

export function EventEntryGate({
  title,
  comment,
  showParticipantNames,
  days,
  requireLogin,
  token,
}: {
  title: string;
  comment: string | null;
  showParticipantNames: boolean;
  days: ResponseDay[];
  requireLogin: boolean;
  token: string;
}) {
  const m = useMessages();
  const [step, setStep] = useState<"preview" | "identify">("preview");
  const [name, setName] = useState("");
  const [conflict, setConflict] = useState<{ memberId: string; label: string } | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const upcomingDays = days.filter((d) => !d.isPast);
  const pastDays = days.filter((d) => d.isPast);
  const returnTo = `/e/${token}`;

  function handleGuestSubmit() {
    setError(null);
    startTransition(async () => {
      const result = await identifyGuest(token, name);
      if (result && "conflict" in result) {
        setConflict(result.conflict);
        return;
      }
      if (result && "error" in result) {
        setError(result.error);
      }
    });
  }

  function handleClaim() {
    if (!conflict) return;
    startTransition(async () => {
      const result = await claimGuestIdentity(conflict.memberId, token);
      if (result?.error) {
        setError(result.error);
        setConflict(null);
      }
    });
  }

  function handleCreateNew() {
    startTransition(async () => {
      await createNewGuest(token, name);
    });
  }

  return (
    <div>
      <div className="flex items-start justify-between gap-3">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">{title}</h1>
        {step === "preview" && <PrintButton className="mt-0.5 shrink-0" />}
      </div>
      {comment && (
        <p className="mt-2 whitespace-pre-wrap text-sm text-slate-600">{comment}</p>
      )}
      <p className="mt-4 text-xs text-slate-400 print:hidden">
        {showParticipantNames ? m.share.namesShown : m.share.namesHidden}
      </p>

      {step === "preview" ? (
        <>
          {upcomingDays.length === 0 ? (
            <p className="mt-4 text-sm text-slate-500">{m.share.noUpcomingDates}</p>
          ) : (
            <div className="mt-4 space-y-4 print:space-y-3">
              {upcomingDays.map((day) => (
                <div
                  key={day.id}
                  className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm shadow-slate-200/40 print:break-inside-avoid print:rounded-none print:border-slate-300 print:shadow-none"
                >
                  <p className="font-semibold text-slate-900">{day.dateLabel}</p>
                  {day.comment && (
                    <p className="mt-1 whitespace-pre-wrap text-xs text-slate-500">
                      {day.comment}
                    </p>
                  )}
                  {day.slots.length === 0 ? (
                    <div className="mt-2">
                      <ParticipationSummary
                        showNames={showParticipantNames}
                        counts={day.counts}
                      />
                    </div>
                  ) : (
                    <ul className="mt-2 space-y-2 border-s-2 border-indigo-100 ps-3">
                      {day.slots.map((slot) => (
                        <li key={slot.id}>
                          <p className="text-sm font-medium text-slate-800">{slot.label}</p>
                          <div className="mt-1">
                            <ParticipationSummary
                              showNames={showParticipantNames}
                              counts={slot.counts}
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
                    {day.slots.length === 0 ? (
                      <ParticipationSummary
                        showNames={showParticipantNames}
                        counts={day.counts}
                      />
                    ) : (
                      <ul className="mt-2 space-y-1 border-s-2 border-slate-200 ps-3">
                        {day.slots.map((slot) => (
                          <li key={slot.id} className="text-sm text-slate-600">
                            {slot.label}
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
            <div className="sticky bottom-0 mt-6 flex justify-center border-t border-slate-100 bg-[#f7f7fb]/95 py-4 backdrop-blur print:hidden">
              <button
                type="button"
                onClick={() => setStep("identify")}
                className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-7 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-300/50 transition-all hover:brightness-110 active:scale-[0.98]"
              >
                {m.share.answer}
              </button>
            </div>
          )}

          <div className="print:hidden">
            <AdSenseUnit />
          </div>
        </>
      ) : conflict ? (
        <div className="mt-6 space-y-3 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200/50">
          <p className="text-sm text-slate-600">
            {interpolate(m.share.conflictPrompt, { name: conflict.label })}
          </p>
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={handleClaim}
              disabled={isPending}
              className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-300/50 transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-50"
            >
              {m.share.yesMe}
            </button>
            <button
              type="button"
              onClick={handleCreateNew}
              disabled={isPending}
              className="rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 disabled:opacity-50"
            >
              {m.share.notMe}
            </button>
          </div>
        </div>
      ) : requireLogin ? (
        <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm shadow-slate-200/50">
          <p className="text-sm text-slate-600">{m.share.loginRequired}</p>
          <div className="mt-4 flex flex-col gap-2">
            <Link
              href={`/member/login?returnTo=${encodeURIComponent(returnTo)}`}
              className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-300/50 transition-all hover:brightness-110 active:scale-[0.98]"
            >
              {m.common.login}
            </Link>
            <Link
              href={`/member/signup?returnTo=${encodeURIComponent(returnTo)}`}
              className="rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              {m.common.signup}
            </Link>
          </div>
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-200/50">
          <label className="block text-sm font-semibold text-slate-700">
            {m.common.nameOptional}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={m.share.namePlaceholder}
            className="mt-1.5 block w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-slate-900 shadow-sm transition-colors focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-100"
          />
          {error && (
            <p className="mt-2 text-sm text-red-600" role="alert">
              {error}
            </p>
          )}
          <button
            type="button"
            onClick={handleGuestSubmit}
            disabled={isPending}
            className="mt-4 w-full rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-300/50 transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-50"
          >
            {isPending ? m.common.processing : m.share.answer}
          </button>
          <p className="mt-4 text-center text-xs text-slate-400">
            {m.common.haveAccount}{" "}
            <Link
              href={`/member/login?returnTo=${encodeURIComponent(returnTo)}`}
              className="font-semibold text-indigo-600 hover:underline"
            >
              {m.common.login}
            </Link>
            {" · "}
            {m.share.createNewPrompt}{" "}
            <Link
              href={`/member/signup?returnTo=${encodeURIComponent(returnTo)}`}
              className="font-semibold text-indigo-600 hover:underline"
            >
              {m.common.signup}
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}
