"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { hashPassword, verifyPassword } from "@/lib/password";
import { getSession } from "@/lib/session";
import { getServerMessages } from "@/lib/i18n/server";
import type { Messages } from "@/lib/i18n";
import type { ActionState } from "@/lib/action-state";

function safeReturnTo(value: unknown): string {
  if (typeof value === "string" && value.startsWith("/") && !value.startsWith("//")) {
    return value;
  }
  return "/dashboard";
}

function signupSchema(m: Messages) {
  return z.object({
    name: z.string().min(1, m.errors.nameRequired),
    email: z.string().email(m.errors.invalidEmail),
    password: z.string().min(8, m.errors.passwordTooShort),
  });
}

export async function signupUser(
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

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return { error: m.errors.emailTaken };
  }

  const passwordHash = await hashPassword(password);
  const user = await prisma.user.create({ data: { name, email, passwordHash } });

  const session = await getSession();
  session.role = "user";
  session.id = user.id;
  await session.save();

  redirect("/dashboard");
}

function loginSchema(m: Messages) {
  return z.object({
    email: z.string().email(m.errors.invalidEmail),
    password: z.string().min(1, m.errors.passwordRequired),
  });
}

export async function loginUser(
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

  const user = await prisma.user.findUnique({ where: { email } });
  if (
    !user ||
    !user.passwordHash ||
    !(await verifyPassword(password, user.passwordHash))
  ) {
    return { error: m.errors.invalidCredentials };
  }

  const session = await getSession();
  session.role = "user";
  session.id = user.id;
  await session.save();

  redirect(safeReturnTo(formData.get("returnTo")));
}

export async function logoutUser() {
  const session = await getSession();
  session.destroy();
  redirect("/login");
}

export async function startGuestOrganizer() {
  const user = await prisma.user.create({
    data: { isGuest: true },
  });

  const session = await getSession();
  session.role = "user";
  session.id = user.id;
  await session.save();

  redirect("/dashboard/events/new");
}

function upgradeSchema(m: Messages) {
  return z.object({
    email: z.string().email(m.errors.invalidEmail),
    password: z.string().min(8, m.errors.passwordTooShort),
  });
}

// アカウント登録なしで始めた主催者(User.isGuest=true)を、新規Userを作らず
// 同じUser行にメール+パスワードを設定して正式なアカウントへ昇格させる。
// userIdは変わらないので、既存のイベント(userIdで紐づく)はそのまま引き継がれる。
export async function upgradeGuestAccount(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  const m = await getServerMessages();
  const session = await getSession();
  if (session.role !== "user" || !session.id) {
    return { error: m.errors.loginRequired };
  }

  const user = await prisma.user.findUnique({ where: { id: session.id } });
  if (!user) {
    return { error: m.errors.accountNotFound };
  }
  if (!user.isGuest) {
    return { error: m.errors.alreadyRegistered };
  }

  const parsed = upgradeSchema(m).safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0].message };
  }
  const { email, password } = parsed.data;
  const name = ((formData.get("name") as string) || "").trim();

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return { error: m.errors.emailTaken };
  }

  const passwordHash = await hashPassword(password);
  await prisma.user.update({
    where: { id: user.id },
    data: {
      email,
      passwordHash,
      isGuest: false,
      name: name || user.name,
    },
  });

  redirect("/dashboard");
}
