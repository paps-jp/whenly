"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { getServerMessages } from "@/lib/i18n/server";
import type { Messages } from "@/lib/i18n";

async function isAllowedToRespond(
  memberId: string,
  userId: string,
  requireLogin: boolean
): Promise<boolean> {
  if (!requireLogin) return true;
  const membership = await prisma.membership.findUnique({
    where: { memberId_userId: { memberId, userId } },
  });
  return !!membership && membership.status === "APPROVED";
}

export type AnswerInput =
  | { kind: "day"; dayId: string; optionIds: string[] }
  | { kind: "slot"; slotId: string; optionIds: string[] };

export type SaveResult = { success: true } | { error: string };

async function persistResponses(
  memberId: string,
  event: { id: string; shareToken: string; allowMultipleAnswers: boolean },
  answers: AnswerInput[],
  m: Messages
): Promise<SaveResult> {
  if (answers.length === 0) {
    return { success: true };
  }

  const validOptionIds = new Set(
    (
      await prisma.responseOption.findMany({
        where: { eventId: event.id },
        select: { id: true },
      })
    ).map((o) => o.id)
  );
  if (answers.some((a) => a.optionIds.some((id) => !validOptionIds.has(id)))) {
    return { error: m.errors.optionsChanged };
  }
  if (!event.allowMultipleAnswers && answers.some((a) => a.optionIds.length > 1)) {
    return { error: m.errors.noMultipleAnswers };
  }

  await prisma.$transaction(async (tx) => {
    for (const a of answers) {
      if (a.kind === "slot") {
        await tx.volunteerResponse.deleteMany({
          where: { memberId, eventSlotId: a.slotId, optionId: { notIn: a.optionIds } },
        });
        for (const optionId of a.optionIds) {
          await tx.volunteerResponse.upsert({
            where: {
              memberId_eventSlotId_optionId: { memberId, eventSlotId: a.slotId, optionId },
            },
            update: {},
            create: { memberId, eventSlotId: a.slotId, optionId },
          });
        }
      } else {
        await tx.volunteerResponse.deleteMany({
          where: { memberId, eventDayId: a.dayId, optionId: { notIn: a.optionIds } },
        });
        for (const optionId of a.optionIds) {
          await tx.volunteerResponse.upsert({
            where: {
              memberId_eventDayId_optionId: { memberId, eventDayId: a.dayId, optionId },
            },
            update: {},
            create: { memberId, eventDayId: a.dayId, optionId },
          });
        }
      }
    }
  });

  revalidatePath(`/e/${event.shareToken}`);
  revalidatePath(`/member/events/${event.id}`);
  revalidatePath(`/member`);
  revalidatePath(`/dashboard/events/${event.id}`);

  return { success: true };
}

export async function saveResponses(
  eventId: string,
  answers: AnswerInput[]
): Promise<SaveResult> {
  const m = await getServerMessages();
  const session = await getSession();
  if (session.role !== "member" || !session.id) {
    return { error: m.errors.loginRequired };
  }
  const memberId = session.id;

  const event = await prisma.event.findUnique({ where: { id: eventId } });
  if (!event) {
    return { error: m.errors.eventNotFound };
  }

  if (!(await isAllowedToRespond(memberId, event.userId, event.requireLogin))) {
    return { error: m.errors.noPermission };
  }

  return persistResponses(memberId, event, answers, m);
}
