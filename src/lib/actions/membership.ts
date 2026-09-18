"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/session";

async function requireUserId(): Promise<string> {
  const session = await getSession();
  if (session.role !== "user" || !session.id) {
    redirect("/login");
  }
  return session.id as string;
}

export async function approveMembership(formData: FormData) {
  const userId = await requireUserId();
  const membershipId = formData.get("membershipId") as string;

  await prisma.membership.updateMany({
    where: { id: membershipId, userId },
    data: { status: "APPROVED" },
  });

  revalidatePath("/dashboard/members");
}

export async function rejectMembership(formData: FormData) {
  const userId = await requireUserId();
  const membershipId = formData.get("membershipId") as string;

  await prisma.membership.updateMany({
    where: { id: membershipId, userId },
    data: { status: "REJECTED" },
  });

  revalidatePath("/dashboard/members");
}
