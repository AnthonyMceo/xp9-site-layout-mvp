import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@clerk/nextjs/server";

import { prisma } from "@/lib/prisma";
import { getStripe } from "@/lib/stripe";

const BodySchema = z.object({
  titleId: z.string().uuid(),
});

function getBaseUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");
  const vercel = process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json().catch(() => null);
  const parsed = BodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const stripePriceId = process.env.STRIPE_PRICE_ID;
  if (!stripePriceId) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 500 });
  }

  const baseUrl = getBaseUrl();
  const stripe = getStripe();

  const user = await prisma.user.findUnique({ where: { clerkUserId: userId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const title = await prisma.title.findFirst({
    where: { id: parsed.data.titleId, userId: user.id },
    include: { subscription: true },
  });
  if (!title) return NextResponse.json({ error: "Title not found" }, { status: 404 });

  const subscription =
    title.subscription ??
    (await prisma.subscription.create({
      data: { titleId: title.id, status: "TRIALING" },
    }));

  const stripeCustomerId =
    subscription.stripeCustomerId ??
    (await (async () => {
      const customer = await stripe.customers.create({
        email: user.email,
        metadata: { clerkUserId: userId, userDbId: user.id },
      });
      await prisma.subscription.update({
        where: { titleId: title.id },
        data: { stripeCustomerId: customer.id },
      });
      return customer.id;
    })());

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    customer: stripeCustomerId,
    client_reference_id: title.id,
    line_items: [{ price: stripePriceId, quantity: 1 }],
    subscription_data: {
      trial_period_days: 30,
      metadata: { titleId: title.id },
    },
    metadata: { titleId: title.id },
    success_url: `${baseUrl}/dashboard/titles/${title.id}?stripe=success`,
    cancel_url: `${baseUrl}/dashboard/titles/${title.id}?stripe=cancel`,
    allow_promotion_codes: true,
  });

  if (!session.url) {
    return NextResponse.json({ error: "No checkout URL" }, { status: 500 });
  }

  return NextResponse.json({ url: session.url });
}

