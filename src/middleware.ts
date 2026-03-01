import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/how-it-works",
  "/pricing",
  "/faq",
  "/contact",
  "/terms",
  "/privacy",
  "/book(.*)",
  "/sitemap.xml",
  "/login(.*)",
  "/signup(.*)",
  "/api/stripe/webhook",
  "/api/titles(.*)/pdf",
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files unless in search params
    "/((?!_next|.*\\..*).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

