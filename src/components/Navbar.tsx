"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { LayoutWrapper } from "@/components/LayoutWrapper";

const navItems = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

function NavLink({
  href,
  label,
  active,
  onNavigate,
}: {
  href: string;
  label: string;
  active: boolean;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      onClick={onNavigate}
      className={[
        "rounded-lg px-3 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400",
        active
          ? "bg-neutral-100 text-neutral-900"
          : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

function NavLinks({
  className = "",
  pathname,
  onNavigate,
}: {
  className?: string;
  pathname: string;
  onNavigate?: () => void;
}) {
  return (
    <nav className={className} aria-label="Primary">
      {navItems.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          label={item.label}
          active={pathname === item.href}
          onNavigate={onNavigate}
        />
      ))}
    </nav>
  );
}

function MobileMenuButton({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
      aria-expanded={open}
      aria-label={open ? "Close menu" : "Open menu"}
    >
      <span className="relative h-4 w-5" aria-hidden="true">
        <span
          className={[
            "absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-neutral-900 transition",
            open ? "translate-y-[7px] rotate-45" : "",
          ].join(" ")}
        />
        <span
          className={[
            "absolute left-0 top-[7px] block h-0.5 w-5 rounded-full bg-neutral-900 transition",
            open ? "opacity-0" : "",
          ].join(" ")}
        />
        <span
          className={[
            "absolute left-0 top-[14px] block h-0.5 w-5 rounded-full bg-neutral-900 transition",
            open ? "-translate-y-[7px] -rotate-45" : "",
          ].join(" ")}
        />
      </span>
      <span>Menu</span>
    </button>
  );
}

function MobileMenu({
  open,
  pathname,
  onClose,
}: {
  open: boolean;
  pathname: string;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <>
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="fixed inset-0 z-40 bg-neutral-950/20 backdrop-blur-[2px] md:hidden"
      />
      <div className="absolute left-0 right-0 top-full z-50 border-b border-neutral-200 bg-white shadow-[0_30px_80px_-60px_rgba(0,0,0,0.7)] md:hidden">
        <LayoutWrapper className="py-4">
          <NavLinks
            pathname={pathname}
            className="flex flex-col gap-1"
            onNavigate={onClose}
          />
          <div className="mt-4 grid gap-2 border-t border-neutral-200 pt-4">
            <Link
              href="/login"
              onClick={onClose}
              className="rounded-xl px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              onClick={onClose}
              className="rounded-xl bg-neutral-900 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              Start Publishing Free
            </Link>
          </div>
        </LayoutWrapper>
      </div>
    </>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const normalizedPathname = useMemo(() => pathname ?? "/", [pathname]);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [normalizedPathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 relative border-b border-neutral-200/70 bg-white/80 backdrop-blur">
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
            <NavLinks pathname={normalizedPathname} className="flex items-center gap-1" />
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
            Start Publishing Free
          </Link>
        </div>

        <div className="md:hidden">
          <MobileMenuButton
            open={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          />
        </div>
      </LayoutWrapper>

      <MobileMenu
        open={mobileOpen}
        pathname={normalizedPathname}
        onClose={() => setMobileOpen(false)}
      />
    </header>
  );
}

