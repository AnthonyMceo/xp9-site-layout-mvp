import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

const nav = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/titles", label: "Titles" },
  { href: "/dashboard/billing", label: "Billing" },
  { href: "/dashboard/account", label: "Account" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-muted/20">
      <header className="border-b bg-background">
        <MaxWidthWrapper className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="font-semibold tracking-tight">
              XP9
            </Link>
            <nav className="hidden gap-1 sm:flex">
              {nav.map((item) => (
                <Button key={item.href} asChild variant="ghost" size="sm">
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              ))}
            </nav>
          </div>
          <UserButton afterSignOutUrl="/" />
        </MaxWidthWrapper>
      </header>
      <main>
        <MaxWidthWrapper className="py-10">{children}</MaxWidthWrapper>
      </main>
    </div>
  );
}

