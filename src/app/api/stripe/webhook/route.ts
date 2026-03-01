import { NextResponse } from "next/server";
import Stripe from "stripe";

import { prisma } from "@/lib/prisma";
import { getStripe, mapStripeStatusToDb } from "@/lib/stripe";

export const runtime = "nodejs";

function daysFromNow(days: number) {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000);
}

async function upsertFromStripeSubscription(sub: Stripe.Subscription) {
  const titleId = sub.metadata?.titleId;
  if (!titleId) return;

  const mapped = mapStripeStatusToDb(sub.status);

  const trialEndsAt = sub.trial_end ? new Date(sub.trial_end * 1000) : null;
  const minItemPeriodEnd = sub.items?.data?.length
    ? Math.min(...sub.items.data.map((i) => i.current_period_end))
    : null;
  const currentPeriodEndsAt =
    typeof minItemPeriodEnd === "number" ? new Date(minItemPeriodEnd * 1000) : null;

  const existing = await prisma.subscription.findUnique({ where: { titleId } });

  const shouldDisable = mapped === "PAST_DUE" || mapped === "UNPAID";
  const unpaidAt = shouldDisable ? existing?.unpaidAt ?? new Date() : null;
  const graceEndsAt = shouldDisable ? existing?.graceEndsAt ?? daysFromNow(7) : null;

  await prisma.subscription.upsert({
    where: { titleId },
    create: {
      titleId,
      stripeCustomerId: typeof sub.customer === "string" ? sub.customer : sub.customer.id,
      stripeSubscriptionId: sub.id,
      status: mapped,
      trialEndsAt,
      currentPeriodEndsAt,
      unpaidAt,
      graceEndsAt,
    },
    update: {
      stripeCustomerId: typeof sub.customer === "string" ? sub.customer : sub.customer.id,
      stripeSubscriptionId: sub.id,
      status: mapped,
      trialEndsAt,
      currentPeriodEndsAt,
      unpaidAt,
      graceEndsAt,
    },
  });
}

export async function POST(req: Request) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return NextResponse.json({ error: "Stripe webhook not configured" }, { status: 500 });
  }

  const stripe = getStripe();
  const signature = req.headers.get("stripe-signature");
  if (!signature) return NextResponse.json({ error: "Missing signature" }, { status: 400 });

  const payload = await req.text();
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const subscriptionId = session.subscription;
        if (typeof subscriptionId === "string") {
          const sub = await stripe.subscriptions.retrieve(subscriptionId);
          await upsertFromStripeSubscription(sub);
        }
        break;
      }
      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const sub = event.data.object as Stripe.Subscription;
        await upsertFromStripeSubscription(sub);
        break;
      }
      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        const subscriptionRef = invoice.parent?.subscription_details?.subscription;
        if (typeof subscriptionRef === "string") {
          const sub = await stripe.subscriptions.retrieve(subscriptionRef);
          await upsertFromStripeSubscription(sub);
        }
        break;
      }
      case "invoice.paid": {
        const invoice = event.data.object as Stripe.Invoice;
        const subscriptionRef = invoice.parent?.subscription_details?.subscription;
        if (typeof subscriptionRef === "string") {
          const sub = await stripe.subscriptions.retrieve(subscriptionRef);
          await upsertFromStripeSubscription(sub);
        }
        break;
      }
      default:
        break;
    }
  } catch {
    return NextResponse.json({ error: "Webhook handler error" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}

