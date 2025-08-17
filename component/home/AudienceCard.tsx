import Link from "next/link";
import { ReactNode } from "react";

type Variant = "green" | "blue" | "neutral";

type Props = {
  title: string;
  icon: ReactNode;
  ctaLabel: string;
  href: string;
  variant?: Variant; // tombol warna: green | blue | neutral
};

export default function AudienceCard({
  title,
  icon,
  ctaLabel,
  href,
  variant = "neutral",
}: Props) {
  const ctaBase =
    "mt-4 inline-flex w-full items-center justify-center rounded-md px-3 py-2 text-sm font-medium border transition";
  const ctaByVariant: Record<Variant, string> = {
    green:
      "bg-green-600 text-white border-green-600 hover:bg-green-700",
    blue:
      "bg-blue-600 text-white border-blue-600 hover:bg-blue-700",
    neutral:
      "bg-neutral-100 text-neutral-900 border-neutral-200 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700",
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 dark:bg-neutral-900 dark:ring-neutral-800">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-white">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white capitalize">
        {title}
      </h3>

      <Link href={href} className={`${ctaBase} ${ctaByVariant[variant]}`}>
        {ctaLabel}
      </Link>
    </div>
  );
}

/* --- simple inline icons --- */
export const UserIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5Z" />
  </svg>
);

export const GearIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M19.4 13a7.9 7.9 0 0 0 0-2l2-1.5-2-3.5-2.4 1a7.7 7.7 0 0 0-1.7-1L15 2h-6l-.3 2a7.7 7.7 0 0 0-1.7 1l-2.4-1-2 3.5 2 1.5a7.9 7.9 0 0 0 0 2l-2 1.5 2 3.5 2.4-1a7.7 7.7 0 0 0 1.7 1l.3 2h6l.3-2a7.7 7.7 0 0 0 1.7-1l2.4 1 2-3.5ZM12 15a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" />
  </svg>
);

export const BuildingIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M3 22h18v-2H3Zm2-4h2v-2H5Zm0-4h2v-2H5Zm0-4h2V8H5Zm4 8h2v-2H9Zm0-4h2v-2H9Zm0-4h2V8H9Zm4 8h2v-2h-2Zm0-4h2v-2h-2Zm0-4h2V8h-2Zm3-6H6v4h10Zm2 4h-2v14h2Z" />
  </svg>
);
