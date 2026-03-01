"use client";

import { useTransition } from "react";

import { Button } from "@/components/ui/button";

export function SubscribeButton({ titleId }: { titleId: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      type="button"
      variant="outline"
      onClick={() => {
        startTransition(async () => {
          const res = await fetch("/api/stripe/checkout-session", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ titleId }),
          });
          if (!res.ok) return;
          const json = (await res.json()) as { url: string };
          window.location.href = json.url;
        });
      }}
      disabled={isPending}
    >
      {isPending ? "Redirecting…" : "Start / manage subscription"}
    </Button>
  );
}

