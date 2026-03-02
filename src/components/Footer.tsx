import Link from "next/link";

import { LayoutWrapper } from "@/components/LayoutWrapper";

const links = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <LayoutWrapper className="py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <div className="text-sm font-semibold text-neutral-900">
              XP9 Publishing
            </div>
            <div className="text-sm text-neutral-600">
              On-demand publishing infrastructure for modern authors.
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-3" aria-label="Footer">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-neutral-200 pt-6 text-sm text-neutral-600 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} XP9 Publishing. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-neutral-900"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-neutral-900"
            >
              Privacy
            </Link>
          </div>
        </div>
      </LayoutWrapper>
    </footer>
  );
}

