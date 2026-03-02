import Link from "next/link";

import { LayoutWrapper } from "@/components/LayoutWrapper";

export default function LoginPage() {
  return (
    <main className="w-full">
      <LayoutWrapper className="py-16">
        <div className="mx-auto max-w-md rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)]">
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900">
            Log in
          </h1>
          <p className="mt-2 text-sm text-neutral-600">
            Access your publishing dashboard and manage your titles.
          </p>

          <form className="mt-8 grid gap-4">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-neutral-900">Email</span>
              <input
                className="h-12 rounded-2xl border border-neutral-300 bg-white px-4 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@company.com"
                required
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-neutral-900">Password</span>
              <input
                className="h-12 rounded-2xl border border-neutral-300 bg-white px-4 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
                type="password"
                name="password"
                autoComplete="current-password"
                placeholder="••••••••"
                required
              />
            </label>

            <button
              type="submit"
              className="mt-2 inline-flex h-12 items-center justify-center rounded-2xl bg-neutral-900 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              Log in
            </button>
          </form>

          <p className="mt-6 text-sm text-neutral-600">
            New here?{" "}
            <Link
              href="/signup"
              className="font-semibold text-neutral-900 underline underline-offset-4"
            >
              Create an account
            </Link>
            .
          </p>
        </div>
      </LayoutWrapper>
    </main>
  );
}

