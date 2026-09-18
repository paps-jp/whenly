"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { hashPassword, verifyPassword } from "@/lib/password";
import { getSession } from "@/lib/session";
import { generateShareToken } from "@/lib/token";
import { getServerMessages } from "@/lib/i18n/server";
import type { Messages } from "@/lib/i18n";
import type { ActionState } from "@/lib/action-state";

function safeReturnTo(value: unknown): string {
  if (typeof value === "string" && value.startsWith("/") && !value.startsWith("//")) {
    return value;
  }
  return "/member";
}

function signupSchema(m: Messages) {
  return z.object({
    name: z.string().min(1, m.errors.nameRequired),
    email: z.string().email(m.errors.invalidEmail),
    password: z.string().min(8, m.errors.passwordTooShort),
  });
}

export async function signupMember(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  const m = await getServerMessages();
  const parsed = signupSchema(m).safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0].message };
  }
  const { name, email, password } = parsed.data;
  const returnTo = safeReturnTo(formData.get("returnTo"));

  const existing = await prisma.member.findUnique({ where: { email } });
  if (existing) {
    return { error: m.errors.emailTaken };
  }

  const passwordHash = await hashPassword(password);
  const member = await prisma.member.create({
    data: { name, email, passwordHash, isGuest: false, calendarToken: generateShareToken() },
  });

  const session = await getSession();
  session.role = "member";
  session.id = member.id;
  await session.save();

  redirect(returnTo);
}

function loginSchema(m: Messages) {
  return z.object({
    email: z.string().email(m.errors.invalidEmail),
    password: z.string().min(1, m.errors.passwordRequired),
  });
}

export async function loginMember(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  const m = await getServerMessages();
  const parsed = loginSchema(m).safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0].message };
  }
  const { email, password } = parsed.data;
  const returnTo = safeReturnTo(formData.get("returnTo"));

  const member = await prisma.member.findUnique({ where: { email } });
  if (!member || !member.passwordHash || !(await verifyPassword(password, member.passwordHash))) {
    return { error: m.errors.invalidCredentials };
  }

  const session = await getSession();
  session.role = "member";
  session.id = member.id;
  await session.save();

  redirect(returnTo);
}

export async function logoutMember() {
  const session = await getSession();
  session.destroy();
  redirect("/member/login");
}

async function createGuestAndRedirect(token: string, name: string | null): Promise<never> {
  const member = await prisma.member.create({
    data: { name, isGuest: true, calendarToken: generateShareToken() },
  });

  const session = await getSession();
  session.role = "member";
  session.id = member.id;
  await session.save();

  redirect(`/e/${token}`);
}

export type IdentifyGuestResult =
  | { error: string }
  | { conflict: { memberId: string; label: string } }
  | undefined;

// requireLogin=falseのイベントで「回答する」ボタン押下後に表示する名前入力の送信先。
// 入力名が既存回答者と一致する場合のみ、確認のためconflictを返す(なりすまし防止)。
export async function identifyGuest(
  token: string,
  name: string
): Promise<IdentifyGuestResult> {
  const m = await getServerMessages();
  const trimmedName = name.trim();

  const event = await prisma.event.findUnique({
    where: { shareToken: token },
    select: { id: true, requireLogin: true },
  });
  if (!event) return { error: m.errors.eventNotFound };
  if (event.requireLogin) return { error: m.errors.loginRequired };

  if (!trimmedName) {
    await createGuestAndRedirect(token, null);
  }

  const existing = await prisma.member.findFirst({
    where: {
      name: trimmedName,
      responses: {
        some: {
          OR: [
            { eventDay: { eventId: event.id } },
            { eventSlot: { day: { eventId: event.id } } },
          ],
        },
      },
    },
  });

  if (existing) {
    return { conflict: { memberId: existing.id, label: existing.name ?? trimmedName } };
  }

  await createGuestAndRedirect(token, trimmedName);
}

// 「本人です」を選んだ場合: 新規Memberを作らず既存参加者のセッションを引き継ぐ。
// memberIdが実際にこのイベントの回答者であることを再検証してからでないとセッションを切り替えない。
export async function claimGuestIdentity(
  memberId: string,
  token: string
): Promise<{ error: string } | undefined> {
  const m = await getServerMessages();
  const event = await prisma.event.findUnique({
    where: { shareToken: token },
    select: { id: true },
  });
  if (!event) return { error: m.errors.eventNotFound };

  const member = await prisma.member.findFirst({
    where: {
      id: memberId,
      responses: {
        some: {
          OR: [
            { eventDay: { eventId: event.id } },
            { eventSlot: { day: { eventId: event.id } } },
          ],
        },
      },
    },
  });
  if (!member) return { error: m.errors.identityFailed };

  const session = await getSession();
  session.role = "member";
  session.id = member.id;
  await session.save();

  redirect(`/e/${token}`);
}

// 「別人です」を選んだ場合: 名前の重複チェックをせず新規ゲストとして作成する。
export async function createNewGuest(token: string, name: string): Promise<void> {
  await createGuestAndRedirect(token, name.trim() || null);
}
