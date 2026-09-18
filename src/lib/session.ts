import { getIronSession, type SessionOptions } from "iron-session";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

export interface SessionData {
  role?: "user" | "member" | "admin";
  id?: string;
}

const sessionOptions: SessionOptions = {
  password: process.env.SESSION_SECRET!,
  cookieName: "whenly_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax",
  },
};

export async function getSession() {
  const cookieStore = await cookies();
  return getIronSession<SessionData>(cookieStore, sessionOptions);
}

export async function getCurrentUser() {
  const session = await getSession();
  if (session.role !== "user" || !session.id) return null;
  return prisma.user.findUnique({ where: { id: session.id } });
}

export async function getCurrentMember() {
  const session = await getSession();
  if (session.role !== "member" || !session.id) return null;
  return prisma.member.findUnique({ where: { id: session.id } });
}

export async function isCurrentAdmin(): Promise<boolean> {
  const session = await getSession();
  return session.role === "admin";
}
