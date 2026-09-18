"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { hashPassword } from "@/lib/password";
import { generateShareToken } from "@/lib/token";
import { sendPasswordResetEmail } from "@/lib/mail";
import { getBaseUrl } from "@/lib/base-url";
import { getMessages, type Locale } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/server";
import type { ActionState } from "@/lib/action-state";

const RESET_TOKEN_TTL_MS = 60 * 60 * 1000; // 1時間

function emailSchema(invalidEmail: string) {
  return z.object({ email: z.string().email(invalidEmail) });
}

// メール未登録/未登録アドレスかどうかを応答の違いで悟られないよう、
// 実在有無に関わらず常に同じ成功メッセージを返す。
const GENERIC_SUCCESS: ActionState = { success: true };

async function issueAndSendReset(
  owner: { userId: string } | { memberId: string },
  email: string,
  locale: Locale
): Promise<void> {
  const token = generateShareToken();
  await prisma.passwordResetToken.create({
    data: {
      token,
      expiresAt: new Date(Date.now() + RESET_TOKEN_TTL_MS),
      ...owner,
    },
  });
  const baseUrl = await getBaseUrl();
  await sendPasswordResetEmail(email, `${baseUrl}/reset-password/${token}`, locale);
}

export async function requestUserPasswordReset(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  const locale = await getLocale();
  const m = getMessages(locale);
  const parsed = emailSchema(m.errors.invalidEmail).safeParse({ email: formData.get("email") });
  if (!parsed.success) {
    return { error: parsed.error.issues[0].message };
  }

  const user = await prisma.user.findUnique({ where: { email: parsed.data.email } });
  if (user && user.passwordHash && user.email) {
    await issueAndSendReset({ userId: user.id }, user.email, locale);
  }
  return GENERIC_SUCCESS;
}

export async function requestMemberPasswordReset(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  const locale = await getLocale();
  const m = getMessages(locale);
  const parsed = emailSchema(m.errors.invalidEmail).safeParse({ email: formData.get("email") });
  if (!parsed.success) {
    return { error: parsed.error.issues[0].message };
  }

  const member = await prisma.member.findUnique({ where: { email: parsed.data.email } });
  if (member && member.passwordHash && member.email) {
    await issueAndSendReset({ memberId: member.id }, member.email, locale);
  }
  return GENERIC_SUCCESS;
}

export async function confirmPasswordReset(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  const m = getMessages(await getLocale());
  const token = formData.get("token") as string;
  const parsed = z
    .object({ password: z.string().min(8, m.errors.passwordTooShort) })
    .safeParse({ password: formData.get("password") });
  if (!parsed.success) {
    return { error: parsed.error.issues[0].message };
  }

  const record = await prisma.passwordResetToken.findUnique({ where: { token } });
  if (!record || record.usedAt || record.expiresAt < new Date()) {
    return { error: m.errors.resetLinkInvalid };
  }

  const passwordHash = await hashPassword(parsed.data.password);
  const session = await getSession();

  if (record.userId) {
    await prisma.$transaction([
      prisma.user.update({ where: { id: record.userId }, data: { passwordHash } }),
      prisma.passwordResetToken.update({ where: { id: record.id }, data: { usedAt: new Date() } }),
    ]);
    session.role = "user";
    session.id = record.userId;
    await session.save();
    redirect("/dashboard");
  }

  if (record.memberId) {
    await prisma.$transaction([
      prisma.member.update({ where: { id: record.memberId }, data: { passwordHash } }),
      prisma.passwordResetToken.update({ where: { id: record.id }, data: { usedAt: new Date() } }),
    ]);
    session.role = "member";
    session.id = record.memberId;
    await session.save();
    redirect("/member");
  }

  return { error: m.errors.unknownError };
}
