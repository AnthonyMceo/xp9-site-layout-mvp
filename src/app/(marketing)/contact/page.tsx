import { LayoutWrapper } from "@/components/LayoutWrapper";

export default function ContactPage() {
  return (
    <main className="bg-neutral-50">
      <LayoutWrapper className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Contact
          </h1>
          <p className="mt-5 text-pretty text-lg text-neutral-700">
            We help authors and AI creators turn ideas into physical books at scale.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <form className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)]">
            <div className="grid gap-4">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-neutral-900">Name</span>
                <input
                  className="h-12 rounded-2xl border border-neutral-300 bg-white px-4 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-neutral-900">Email</span>
                <input
                  className="h-12 rounded-2xl border border-neutral-300 bg-white px-4 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  required
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-neutral-900">Message</span>
                <textarea
                  className="min-h-32 rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
                  name="message"
                  placeholder="Tell us what you're publishing…"
                  required
                />
              </label>

              <button
                type="submit"
                className="mt-2 inline-flex h-12 items-center justify-center rounded-2xl bg-neutral-900 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </LayoutWrapper>
    </main>
  );
}

