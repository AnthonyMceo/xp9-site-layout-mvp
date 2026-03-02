import Link from "next/link";

import { LayoutWrapper } from "@/components/LayoutWrapper";

const productLinks = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
];

const companyLinks = [
  { href: "/contact", label: "Contact" },
  { href: "/login", label: "Log in" },
  { href: "/signup", label: "Start Publishing Free" },
];

const legalLinks = [
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="rounded-lg px-2 py-1 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
    >
      {label}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <LayoutWrapper className="py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="space-y-3">
            <div className="text-sm font-semibold text-neutral-900">
              XP9 Publishing
            </div>
            <div className="text-sm text-neutral-600">
              On-demand publishing infrastructure for modern authors.
            </div>
          </div>

          <nav className="space-y-3" aria-label="Footer product">
            <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Product
            </div>
            <div className="flex flex-col items-start gap-1">
              {productLinks.map((l) => (
                <FooterLink key={l.href} href={l.href} label={l.label} />
              ))}
            </div>
          </nav>

          <nav className="space-y-3" aria-label="Footer company">
            <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Company
            </div>
            <div className="flex flex-col items-start gap-1">
              {companyLinks.map((l) => (
                <FooterLink key={l.href} href={l.href} label={l.label} />
              ))}
            </div>
          </nav>

          <nav className="space-y-3" aria-label="Footer legal">
            <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Legal
            </div>
            <div className="flex flex-col items-start gap-1">
              {legalLinks.map((l) => (
                <FooterLink key={l.href} href={l.href} label={l.label} />
              ))}
            </div>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-neutral-200 pt-6 text-sm text-neutral-600 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} XP9 Publishing. All rights reserved.</div>
          <div className="text-sm text-neutral-500">
            Printed on demand. No inventory required.
          </div>
        </div>
      </LayoutWrapper>
    </footer>
  );
}

