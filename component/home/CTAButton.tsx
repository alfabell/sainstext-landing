import Link from "next/link";
import { ReactNode } from "react";

type Variant = "green" | "blue" | "neutral" | "dark";

export default function CTAButton({
  href,
  children,
  variant = "green",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const base =
    "inline-flex h-11 items-center justify-center rounded-md px-5 font-semibold transition";
  const styles = {
  green: "bg-emerald-600 text-white border border-emerald-600 hover:bg-emerald-700",
  blue:  "bg-blue-600 text-white border border-blue-600 hover:bg-blue-700",
  neutral: "bg-white text-neutral-900 border border-white hover:bg-white/90",
  dark:  "bg-black text-white border border-black hover:bg-black/90",
} as const;


  return (
    <Link
      href={href}
      className={[base, styles[variant], className].filter(Boolean).join(" ")}
    >
      {children}
    </Link>
  );
}
