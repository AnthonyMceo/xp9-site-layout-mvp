import type { SubscriptionStatus } from "@prisma/client";

export function computePdfEnabled(status: SubscriptionStatus) {
  return status === "ACTIVE" || status === "TRIALING";
}

export function computeHidden({
  status,
  graceEndsAt,
  now = new Date(),
}: {
  status: SubscriptionStatus;
  graceEndsAt: Date | null;
  now?: Date;
}) {
  if (status === "CANCELED") return true;
  if ((status === "PAST_DUE" || status === "UNPAID") && graceEndsAt && now > graceEndsAt) {
    return true;
  }
  return false;
}

