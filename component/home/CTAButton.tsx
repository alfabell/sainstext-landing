import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary";

export default function CTAButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold shadow transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const styles: Record<Variant, string> = {
    primary:
      "bg-primary text-primary-foreground hover:opacity-90 focus-visible:ring-primary",
    secondary:
      "bg-secondary text-secondary-foreground hover:opacity-90 focus-visible:ring-secondary",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </Link>
  );
}
