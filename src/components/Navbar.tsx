import Link from "next/link";
import Image from "next/image";

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
      <LayoutWrapper className="flex items-center justify-between py-3">
        <div className="flex items-center gap-10">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-xl px-2 py-1 text-sm font-semibold tracking-tight text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label="XP9 Publishing home"
          >
            <Image
              src="/images/brand/XP9Logo.webp"
              alt="XP9"
              width={256}
              height={256}
              className="h-12 w-auto object-contain"
              priority={false}
            />
            <span className="text-base">XP9 Publishing</span>
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

        <details className="group relative md:hidden">
          <summary className="list-none rounded-xl px-3 py-2 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">
            Menu
          </summary>
          <div className="absolute left-0 right-0 top-full border-b border-neutral-200 bg-white">
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

