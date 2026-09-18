"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { generateShareToken } from "@/lib/token";
import { interpolate } from "@/lib/i18n";
import { getServerMessages } from "@/lib/i18n/server";
import type { ActionState } from "@/lib/action-state";

const DEFAULT_OPTION_LABELS = ["○", "△", "×"];
const MAX_OPTIONS = 10;

async function requireUserId(): Promise<string> {
  const session = await getSession();
  if (session.role !== "user" || !session.id) {
    redirect("/login");
  }
  return session.id as string;
}

function readList(formData: FormData, name: string): string[] {
  return formData
    .getAll(name)
    .map(String)
    .map((s) => s.trim())
    .filter(Boolean);
}

export async function createEvent(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  const userId = await requireUserId();
  const m = await getServerMessages();

  const title = String(formData.get("title") ?? "").trim();
  if (!title) {
    return { error: m.errors.titleRequired };
  }
  const comment = String(formData.get("comment") ?? "").trim();

  const dayIds = formData.getAll("dayIds").map(String);
  if (dayIds.length === 0) {
    return { error: m.errors.addAtLeastOneDate };
  }

  const days: { date: Date; comment: string | null; slots: string[] }[] = [];
  for (const dayId of dayIds) {
    const dateRaw = formData.get(`date-${dayId}`);
    if (typeof dateRaw !== "string" || !dateRaw) {
      return { error: m.errors.dateRequired };
    }
    const date = new Date(dateRaw);
    if (Number.isNaN(date.getTime())) {
      return { error: m.errors.invalidDate };
    }
    const dayComment = (formData.get(`comment-${dayId}`) as string) || "";
    days.push({
      date,
      comment: dayComment.trim() || null,
      slots: readList(formData, `slots-${dayId}`),
    });
  }

  const requireLogin = formData.get("requireLogin") === "on";

  const event = await prisma.event.create({
    data: {
      title,
      comment: comment || null,
      requireLogin,
      userId,
      shareToken: generateShareToken(),
      options: {
        create: DEFAULT_OPTION_LABELS.map((label, order) => ({ label, order })),
      },
      days: {
        create: days.map((d) => ({
          date: d.date,
          comment: d.comment,
          slots: { create: d.slots.map((label) => ({ label })) },
        })),
      },
    },
  });

  redirect(`/dashboard/events/${event.id}`);
}

// event.allowUrlEdit=true のイベントは、編集用URL(/dashboard/events/[id])を
// 知っている人なら誰でも編集できる(アカウント登録なしの主催者でも共有・引き継ぎ
// できるように)。allowUrlEdit=false の場合のみ、所有者セッションを要求する。
async function assertCanEditEvent(event: { userId: string; allowUrlEdit: boolean }) {
  if (event.allowUrlEdit) return true;
  const session = await getSession();
  return session.role === "user" && session.id === event.userId;
}

export async function deleteEventDay(formData: FormData) {
  const dayId = formData.get("dayId") as string;

  const day = await prisma.eventDay.findUnique({
    where: { id: dayId },
    include: { event: { select: { userId: true, allowUrlEdit: true } } },
  });
  if (!day) return;
  if (!(await assertCanEditEvent(day.event))) return;

  await prisma.eventDay.delete({ where: { id: dayId } });

  revalidatePath(`/dashboard/events/${day.eventId}`);
}

export async function deleteEvent(formData: FormData) {
  const userId = await requireUserId();
  const eventId = formData.get("eventId") as string;

  await prisma.event.deleteMany({
    where: { id: eventId, userId },
  });

  revalidatePath("/dashboard");
}

// ダッシュボードのイベント詳細ページ全体をまとめて保存する1つのアクション
// (設定トグル・回答の選択肢・各日付のコメント・新しい日付の追加をすべてここで処理する)
export async function saveEventSettings(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  const eventId = formData.get("eventId") as string;
  const m = await getServerMessages();

  const event = await prisma.event.findUnique({
    where: { id: eventId },
    include: { days: true, options: true },
  });
  if (!event) {
    return { error: m.errors.eventNotFound };
  }
  if (!(await assertCanEditEvent(event))) {
    return { error: m.errors.loginRequired };
  }

  const requireLogin = formData.get("requireLogin") === "on";
  const showParticipantNames = formData.get("showParticipantNames") === "on";
  const allowMultipleAnswers = formData.get("allowMultipleAnswers") === "on";
  const allowUrlEdit = formData.get("allowUrlEdit") === "on";

  // --- 回答の選択肢(可変個) ---
  const submittedOptionIds = formData.getAll("optionIds").map(String);
  const newOptionLabels = readList(formData, "newOptionLabels");

  if (submittedOptionIds.length + newOptionLabels.length === 0) {
    return { error: m.errors.optionsAtLeastOne };
  }
  if (submittedOptionIds.length + newOptionLabels.length > MAX_OPTIONS) {
    return { error: interpolate(m.errors.optionsMax, { max: MAX_OPTIONS }) };
  }

  const existingOptionIds = new Set(event.options.map((o) => o.id));
  const removedOptionIds = event.options
    .map((o) => o.id)
    .filter((id) => !submittedOptionIds.includes(id));

  await prisma.$transaction(async (tx) => {
    await tx.event.update({
      where: { id: eventId },
      data: { requireLogin, showParticipantNames, allowMultipleAnswers, allowUrlEdit },
    });

    let order = 0;
    for (const optionId of submittedOptionIds) {
      if (!existingOptionIds.has(optionId)) continue;
      const label = ((formData.get(`optionLabel-${optionId}`) as string) || "").trim();
      if (!label) continue;
      await tx.responseOption.update({
        where: { id: optionId },
        data: { label, order },
      });
      order++;
    }

    for (const label of newOptionLabels) {
      await tx.responseOption.create({
        data: { eventId, label, order: order++ },
      });
    }

    if (removedOptionIds.length > 0) {
      await tx.responseOption.deleteMany({
        where: { id: { in: removedOptionIds } },
      });
    }

    for (const day of event.days) {
      const commentRaw = formData.get(`comment-${day.id}`);
      if (commentRaw === null) continue;
      const comment = (commentRaw as string).trim() || null;
      if (comment !== day.comment) {
        await tx.eventDay.update({
          where: { id: day.id },
          data: { comment },
        });
      }
    }

    const newDayIds = formData.getAll("newDayIds").map(String);
    for (const newDayId of newDayIds) {
      const dateRaw = formData.get(`newDate-${newDayId}`);
      if (typeof dateRaw !== "string" || !dateRaw) continue;
      const date = new Date(dateRaw);
      if (Number.isNaN(date.getTime())) continue;

      const slots = readList(formData, `newSlots-${newDayId}`);
      const newComment = ((formData.get(`newComment-${newDayId}`) as string) || "").trim() || null;

      await tx.eventDay.create({
        data: {
          eventId,
          date,
          comment: newComment,
          slots: { create: slots.map((label) => ({ label })) },
        },
      });
    }
  });

  revalidatePath(`/dashboard/events/${eventId}`);
  return { success: true };
}
