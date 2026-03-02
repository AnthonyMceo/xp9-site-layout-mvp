import Link from "next/link";

import { LayoutWrapper } from "@/components/LayoutWrapper";

export default function SignupPage() {
  return (
    <main className="w-full">
      <LayoutWrapper className="py-16">
        <div className="mx-auto max-w-md rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)]">
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-neutral-600">
            Start publishing AI-powered novels and children’s books with on-demand
            printing and global fulfillment.
          </p>

          <form className="mt-8 grid gap-4">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-neutral-900">Name</span>
              <input
                className="h-12 rounded-2xl border border-neutral-300 bg-white px-4 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
                name="name"
                autoComplete="name"
                placeholder="Your name"
                required
              />
            </label>

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
                autoComplete="new-password"
                placeholder="••••••••"
                required
              />
            </label>

            <button
              type="submit"
              className="mt-2 inline-flex h-12 items-center justify-center rounded-2xl bg-neutral-900 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              Create account
            </button>
          </form>

          <p className="mt-6 text-sm text-neutral-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-neutral-900 underline underline-offset-4"
            >
              Log in
            </Link>
            .
          </p>
        </div>
      </LayoutWrapper>
    </main>
  );
}

