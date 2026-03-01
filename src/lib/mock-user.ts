import { prisma } from "@/lib/prisma";

const MOCK_CLERK_USER_ID = "mock-user";
const MOCK_EMAIL = "mock@xp9.local";

export async function getMockUser() {
  return prisma.user.upsert({
    where: { clerkUserId: MOCK_CLERK_USER_ID },
    update: { email: MOCK_EMAIL },
    create: { clerkUserId: MOCK_CLERK_USER_ID, email: MOCK_EMAIL },
  });
}

