"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";

export function ShareButtons({ path }: { path: string }) {
  const [copied, setCopied] = useState(false);

  const url = useMemo(() => {
    if (typeof window === "undefined") return path;
    return new URL(path, window.location.origin).toString();
  }, [path]);

  const text = "Check out this book on XP9";

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
      <Button
        type="button"
        variant="outline"
        onClick={async () => {
          await navigator.clipboard.writeText(url);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1200);
        }}
      >
        {copied ? "Copied" : "Copy link"}
      </Button>
      <Button asChild type="button" variant="outline">
        <a href={shareLinks.x} target="_blank" rel="noreferrer">
          Share on X
        </a>
      </Button>
      <Button asChild type="button" variant="outline">
        <a href={shareLinks.linkedin} target="_blank" rel="noreferrer">
          Share on LinkedIn
        </a>
      </Button>
      <Button asChild type="button" variant="outline">
        <a href={shareLinks.facebook} target="_blank" rel="noreferrer">
          Share on Facebook
        </a>
      </Button>
    </div>
  );
}

