import Link from "next/link";

import { LayoutWrapper } from "@/components/LayoutWrapper";

const navItems = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

function NavLinks({ className = "" }: { className?: string }) {
  return (
    <nav className={className} aria-label="Primary">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/80 backdrop-blur">
      <LayoutWrapper className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-10">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-xl px-2 py-1 text-sm font-semibold tracking-tight text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label="POD AI Publishing home"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 to-amber-500 shadow-sm">
              <span className="text-sm font-bold text-neutral-900">P</span>
            </span>
            <span>POD AI Publishing</span>
          </Link>

          <div className="hidden md:block">
            <NavLinks className="flex items-center gap-1" />
          </div>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/login"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            Create account
          </Link>
        </div>

        <details className="group md:hidden">
          <summary className="list-none rounded-xl px-3 py-2 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">
            Menu
          </summary>
          <div className="absolute left-0 right-0 top-16 border-b border-neutral-200 bg-white">
            <LayoutWrapper className="py-3">
              <NavLinks className="flex flex-col gap-1" />
              <div className="mt-3 grid gap-2 border-t border-neutral-200 pt-3">
                <Link
                  href="/login"
                  className="rounded-xl px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="rounded-xl bg-neutral-900 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  Create account
                </Link>
              </div>
            </LayoutWrapper>
          </div>
        </details>
      </LayoutWrapper>
    </header>
  );
}

