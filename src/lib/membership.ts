import { prisma } from "@/lib/prisma";

export async function ensureMembershipRequest(memberId: string, userId: string) {
  return prisma.membership.upsert({
    where: { memberId_userId: { memberId, userId } },
    update: {},
    create: { memberId, userId, status: "PENDING" },
  });
}
