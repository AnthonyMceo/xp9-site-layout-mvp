"use client";

import { useMemo, useState } from "react";

export function ShareButtons({ path }: { path: string }) {
  const [copied, setCopied] = useState(false);

  const url = useMemo(() => {
    if (typeof window === "undefined") return path;
    return new URL(path, window.location.origin).toString();
  }, [path]);

  const text = "Check out this book on XP9 Publishing";

  const shareLinks = useMemo(
    () => ({
      x: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(
        text,
      )}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    }),
    [url],
  );

  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        className="inline-flex h-11 items-center justify-center rounded-2xl border border-neutral-300 bg-white px-4 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        onClick={async () => {
          await navigator.clipboard.writeText(url);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1200);
        }}
      >
        {copied ? "Copied" : "Copy link"}
      </button>

      <a
        href={shareLinks.x}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-11 items-center justify-center rounded-2xl border border-neutral-300 bg-white px-4 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
      >
        Share on X
      </a>

      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-11 items-center justify-center rounded-2xl border border-neutral-300 bg-white px-4 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
      >
        Share on LinkedIn
      </a>

      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-11 items-center justify-center rounded-2xl border border-neutral-300 bg-white px-4 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
      >
        Share on Facebook
      </a>
    </div>
  );
}

