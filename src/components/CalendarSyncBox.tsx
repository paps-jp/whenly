import { CopyLinkButton } from "@/components/CopyLinkButton";
import { getServerMessages } from "@/lib/i18n/server";

const CALENDAR_NAME = "whenly";

const buttonClass =
  "inline-flex items-center gap-2 rounded-full border border-slate-200 px-3.5 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50";

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <rect x="1" y="2" width="14" height="12" rx="2" fill="#fff" stroke="#dadce0" />
      <rect x="1" y="2" width="14" height="3.5" rx="1.5" fill="#4285F4" />
      <rect x="3.5" y="7" width="3" height="3" fill="#34A853" />
      <rect x="9.5" y="7" width="3" height="3" fill="#FBBC05" />
      <rect x="3.5" y="10.5" width="3" height="2" fill="#EA4335" />
    </svg>
  );
}

function OutlookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <rect x="1" y="1" width="14" height="14" rx="2.5" fill="#0A66C2" />
      <path
        d="M4.2 5.6h5.4v4.8H4.2z M6.9 5.6a2.4 2.4 0 1 1 0 4.8 2.4 2.4 0 0 1 0-4.8z"
        fill="#0A66C2"
      />
      <circle cx="6.9" cy="8" r="1.9" fill="#fff" />
      <rect x="10.2" y="6.3" width="3.6" height="3.4" rx="0.4" fill="#fff" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <rect x="1" y="2" width="14" height="12" rx="2" fill="#fff" stroke="#dadce0" />
      <rect x="1" y="2" width="14" height="3" rx="1.5" fill="#64748b" />
      <text x="8" y="12.5" textAnchor="middle" fontSize="6" fill="#334155" fontWeight="700">
        31
      </text>
    </svg>
  );
}

export async function CalendarSyncBox({ url }: { url: string }) {
  const m = await getServerMessages();
  const googleUrl = `https://calendar.google.com/calendar/render?cid=${encodeURIComponent(url)}`;
  const outlookComUrl = `https://outlook.live.com/calendar/0/addcalendar?url=${encodeURIComponent(
    url
  )}&name=${encodeURIComponent(CALENDAR_NAME)}`;
  const office365Url = `https://outlook.cloud.microsoft/calendar/0/addcalendar?url=${encodeURIComponent(
    url
  )}&name=${encodeURIComponent(CALENDAR_NAME)}`;
  const webcalUrl = url.replace(/^https?:\/\//, "webcal://");

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm shadow-slate-200/50">
      <p className="text-sm font-semibold text-slate-700">{m.calendar.title}</p>
      <p className="mt-1 text-xs text-slate-400">{m.calendar.description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        <a href={googleUrl} target="_blank" rel="noopener noreferrer" className={buttonClass}>
          <GoogleIcon />
          {m.calendar.google}
        </a>
        <a href={outlookComUrl} target="_blank" rel="noopener noreferrer" className={buttonClass}>
          <OutlookIcon />
          {m.calendar.outlookCom}
        </a>
        <a href={office365Url} target="_blank" rel="noopener noreferrer" className={buttonClass}>
          <OutlookIcon />
          {m.calendar.office365}
        </a>
        <a href={webcalUrl} className={buttonClass}>
          <AppleIcon />
          {m.calendar.apple}
        </a>
      </div>

      <details className="mt-3">
        <summary className="cursor-pointer text-xs font-medium text-indigo-600 hover:underline">
          {m.calendar.copyUrl}
        </summary>
        <div className="mt-2 flex items-center gap-2">
          <input
            readOnly
            dir="ltr"
            value={url}
            className="block w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-600"
          />
          <CopyLinkButton text={url} />
        </div>
      </details>
    </div>
  );
}
