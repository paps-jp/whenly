"use client";

import { deleteEvent } from "@/lib/actions/events";
import { interpolate } from "@/lib/i18n";
import { useMessages } from "@/lib/i18n/client";

export function DeleteEventButton({
  eventId,
  title,
}: {
  eventId: string;
  title: string;
}) {
  const m = useMessages();
  return (
    <form
      action={deleteEvent}
      onSubmit={(e) => {
        if (!confirm(interpolate(m.dashboard.deleteEventConfirm, { title }))) {
          e.preventDefault();
        }
      }}
    >
      <input type="hidden" name="eventId" value={eventId} />
      <button
        type="submit"
        onClick={(e) => e.stopPropagation()}
        className="rounded-full px-2.5 py-1 text-xs font-semibold text-rose-400 transition-colors hover:bg-rose-50 hover:text-rose-600"
      >
        {m.common.delete}
      </button>
    </form>
  );
}
