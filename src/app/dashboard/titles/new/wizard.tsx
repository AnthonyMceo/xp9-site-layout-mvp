"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const Schema = z.object({
  titleName: z.string().min(1),
  authorName: z.string().min(1),
  summary: z.string().min(1),
});

const steps = ["Title", "Author", "Summary", "Cover", "Confirm"] as const;
type Step = (typeof steps)[number];

export function NewTitleWizard() {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const step: Step = steps[stepIndex];
  const [isPending, startTransition] = useTransition();

  const [titleName, setTitleName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [summary, setSummary] = useState("");

  const canGoNext = useMemo(() => {
    if (step === "Title") return titleName.trim().length > 0;
    if (step === "Author") return authorName.trim().length > 0;
    if (step === "Summary") return summary.trim().length > 0;
    return true;
  }, [step, titleName, authorName, summary]);

  const onSubmit = () => {
    const parsed = Schema.safeParse({
      titleName: titleName.trim(),
      authorName: authorName.trim(),
      summary: summary.trim(),
    });
    if (!parsed.success) return;

    startTransition(async () => {
      const res = await fetch("/api/titles", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...parsed.data,
          coverUrl: new URL("/cover-default.svg", window.location.origin).toString(),
        }),
      });

      if (!res.ok) return;

      const json = (await res.json()) as { titleId: string; slug: string };
      router.push(`/dashboard/titles/${json.titleId}`);
      router.refresh();
    });
  };

  return (
    <div className="grid gap-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">New title</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Create a title to publish a public book page and manage access to
            downloads.
          </p>
        </div>
        <Badge variant="secondary">
          Step {stepIndex + 1} / {steps.length}: {step}
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">{step}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {step === "Title" && (
            <div className="grid gap-2">
              <Label htmlFor="titleName">Title name</Label>
              <Input
                id="titleName"
                value={titleName}
                onChange={(e) => setTitleName(e.target.value)}
                placeholder="The XP9 Guide to Publishing"
              />
            </div>
          )}

          {step === "Author" && (
            <div className="grid gap-2">
              <Label htmlFor="authorName">Author name</Label>
              <Input
                id="authorName"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="Jane Doe"
              />
            </div>
          )}

          {step === "Summary" && (
            <div className="grid gap-2">
              <Label htmlFor="summary">Short summary</Label>
              <Textarea
                id="summary"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="A short description for the public product page…"
                className="min-h-40"
              />
              <div className="text-xs text-muted-foreground">
                This appears publicly on `/book/[slug]`.
              </div>
            </div>
          )}

          {step === "Cover" && (
            <div className="grid gap-4 sm:grid-cols-2 sm:items-start">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">
                  Add a cover to your book page. A default cover is included
                  with every title.
                </div>
                <div className="text-xs text-muted-foreground">
                  This will be shown on your public page.
                </div>
              </div>
              <div className="overflow-hidden rounded-lg border bg-background">
                <Image
                  src="/cover-default.svg"
                  alt="Book cover"
                  width={600}
                  height={900}
                  className="h-auto w-full"
                />
              </div>
            </div>
          )}

          {step === "Confirm" && (
            <div className="grid gap-4">
              <div className="rounded-lg border bg-muted/20 p-4">
                <div className="text-sm font-medium">You’re about to create</div>
                <div className="mt-2 grid gap-1 text-sm text-muted-foreground">
                  <div>
                    <span className="text-foreground">Title:</span> {titleName || "—"}
                  </div>
                  <div>
                    <span className="text-foreground">Author:</span> {authorName || "—"}
                  </div>
                  <div className="line-clamp-3">
                    <span className="text-foreground">Summary:</span>{" "}
                    {summary || "—"}
                  </div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                We’ll publish your public book page and prepare the downloadable
                file under this title’s subscription.
              </div>
            </div>
          )}

          <div className="flex items-center justify-between gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => setStepIndex((i) => Math.max(0, i - 1))}
              disabled={isPending || stepIndex === 0}
            >
              Back
            </Button>

            {step !== "Confirm" ? (
              <Button
                type="button"
                onClick={() => setStepIndex((i) => Math.min(steps.length - 1, i + 1))}
                disabled={isPending || !canGoNext}
              >
                Next
              </Button>
            ) : (
              <Button type="button" onClick={onSubmit} disabled={isPending}>
                {isPending ? "Creating…" : "Create title"}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

