import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="rounded-xl border bg-background p-6">
      <div className="text-lg font-semibold tracking-tight">Create account</div>
      <div className="mt-2 text-sm text-muted-foreground">
        Continue to your dashboard to create a title and publish your book page.
      </div>
      <div className="mt-6 text-sm">
        Continue to the{" "}
        <Link href="/dashboard" className="font-medium underline underline-offset-4">
          dashboard
        </Link>
        .
      </div>
    </div>
  );
}

