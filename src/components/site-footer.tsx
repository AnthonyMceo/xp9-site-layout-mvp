import Link from "next/link";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";

const footerLinks = [
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t">
      <MaxWidthWrapper className="flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} XP9. All rights reserved.
        </div>
        <nav className="flex items-center gap-6 text-sm">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </MaxWidthWrapper>
    </footer>
  );
}

