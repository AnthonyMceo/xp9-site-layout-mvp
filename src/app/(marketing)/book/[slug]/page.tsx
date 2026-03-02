import { notFound } from "next/navigation";
import Image from "next/image";

import { prisma } from "@/lib/prisma";
import { computeHidden, computePdfEnabled } from "@/lib/subscription-rules";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import { ShareButtons } from "@/app/(marketing)/book/[slug]/share-buttons";

export const dynamic = "force-dynamic";

function Cover({ coverUrl, title }: { coverUrl: string | null; title: string }) {
  const src = coverUrl || "/cover-default.svg";
  const isExternal = /^https?:\/\//.test(src);

  return (
    <Image
      src={src}
      alt={`${title} cover`}
      width={600}
      height={900}
      className="h-auto w-full rounded-lg border bg-background object-cover"
      unoptimized={isExternal}
      priority={false}
    />
  );
}

export default async function PublicBookPage({
  params,
}: {
  params: { slug: string };
}) {
  const title = await prisma.title.findUnique({
    where: { slug: params.slug },
    include: { subscription: true },
  });

  if (!title) notFound();

  const subscription = title.subscription;
  const status = subscription?.status ?? "UNPAID";
  const isHidden = subscription
    ? computeHidden({ status: subscription.status, graceEndsAt: subscription.graceEndsAt })
    : false;
  if (isHidden || title.status === "HIDDEN") notFound();

  const pdfEnabled = subscription ? computePdfEnabled(subscription.status) : false;

  const lookInside = [
    "Explore a preview of the title, formatted as a clean, readable excerpt.",
    "This section is designed for quick scanning and shareable discovery.",
    "Subscribers can access the downloadable file directly from this page.",
  ];

  return (
    <main className="bg-neutral-50">
      <LayoutWrapper className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[420px_1fr]">
          <div className="space-y-4">
            <Cover coverUrl={title.coverUrl} title={title.titleName} />

            <section className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)]">
              <h2 className="text-sm font-semibold text-neutral-900">Download</h2>
              <p className="mt-2 text-sm text-neutral-600">
                {pdfEnabled
                  ? "Your book file is available for download."
                  : "Downloads are unavailable while the subscription is inactive."}
              </p>

              <div className="mt-4 grid gap-3">
                <a
                  href={title.pdfUrl ?? "#"}
                  target="_blank"
                  rel="noreferrer"
                  aria-disabled={!pdfEnabled}
                  className={[
                    "inline-flex h-12 items-center justify-center rounded-2xl px-5 text-sm font-semibold shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400",
                    pdfEnabled
                      ? "bg-neutral-900 text-white hover:bg-neutral-800"
                      : "cursor-not-allowed bg-neutral-200 text-neutral-500",
                  ].join(" ")}
                >
                  Download PDF
                </a>

                <button
                  type="button"
                  disabled
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-neutral-300 bg-white px-5 text-sm font-semibold text-neutral-400 shadow-sm"
                >
                  Buy
                </button>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-700">
                Status: {status}
              </div>
              <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
                {title.titleName}
              </h1>
              <p className="mt-3 text-lg text-neutral-700">{title.authorName}</p>
            </div>

            <section className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)]">
              <h2 className="text-base font-bold text-neutral-900">Summary</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-700">
                {title.summary}
              </p>
            </section>

            <section className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)]">
              <h2 className="text-base font-bold text-neutral-900">Look Inside</h2>
              <div className="mt-3 space-y-3 text-sm leading-7 text-neutral-700">
                {lookInside.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-sm font-semibold text-neutral-900">Share</h2>
              <ShareButtons path={`/book/${title.slug}`} />
            </section>
          </div>
        </div>
      </LayoutWrapper>
    </main>
  );
}

