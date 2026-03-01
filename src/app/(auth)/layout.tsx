export const dynamic = "force-dynamic";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-dvh place-items-center bg-muted/20 px-4">
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
}

