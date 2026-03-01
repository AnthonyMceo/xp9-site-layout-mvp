import Stripe from "stripe";

declare global {
  // eslint-disable-next-line no-var
  var __xp9_stripe: Stripe | undefined;
}

export function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("Missing env var: STRIPE_SECRET_KEY");

  if (!global.__xp9_stripe) {
    global.__xp9_stripe = new Stripe(key, {
      typescript: true,
    });
  }

  return global.__xp9_stripe;
}

export function mapStripeStatusToDb(status: Stripe.Subscription.Status) {
  switch (status) {
    case "trialing":
      return "TRIALING" as const;
    case "active":
      return "ACTIVE" as const;
    case "past_due":
      return "PAST_DUE" as const;
    case "unpaid":
      return "UNPAID" as const;
    case "canceled":
      return "CANCELED" as const;
    default:
      return "PAST_DUE" as const;
  }
}

