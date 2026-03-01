import { prisma } from "@/lib/prisma";

const DEFAULT_USER_ID = "mock-user";
const DEFAULT_EMAIL = "mock@xp9.local";

export async function getDefaultUser() {
  return prisma.user.upsert({
    where: { clerkUserId: DEFAULT_USER_ID },
    update: { email: DEFAULT_EMAIL },
    create: { clerkUserId: DEFAULT_USER_ID, email: DEFAULT_EMAIL },
  });
}

