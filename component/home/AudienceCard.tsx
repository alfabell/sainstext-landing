import Link from "next/link";
import React, {
  ReactNode,
  ReactElement,
  isValidElement,
  cloneElement,
} from "react";

type Variant = "green" | "blue" | "neutral";

type Props = {
  title: string;
  icon: ReactNode; // <UserIcon />, <GearIcon />, <BuildingIcon />
  ctaLabel: string;
  href: string;
  variant?: Variant;
};

export default function AudienceCard({
  title,
  icon,
  ctaLabel,
  href,
  variant = "neutral",
}: Props) {
  const btnBase =
    "mt-6 inline-flex w-full items-center justify-center rounded-md px-4 h-11 text-sm font-semibold transition border";
  const byVariant: Record<Variant, string> = {
    green: "bg-emerald-600 border-emerald-600 text-white hover:bg-emerald-700",
    blue: "bg-blue-600 border-blue-600 text-white hover:bg-blue-700",
    neutral:
      "bg-neutral-100 border-neutral-200 text-neutral-900 hover:bg-neutral-200",
  };

  // Besarkan ikon tanpa ubah komponen ikon sumber
  const bigIcon = isValidElement<{ className?: string }>(icon)
  ? cloneElement(icon, {
      className: [
        "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32",
        (icon.props?.className ?? ""),
      ].join(" "),
    })
  : icon;

  return (
    <div className="rounded-2xl bg-white text-neutral-900 shadow-sm ring-1 ring-black/10 p-8 md:p-10 flex flex-col items-center text-center justify-between min-h-[320px] md:min-h-[360px]">
      <div>
        {/* kotak ikon besar di tengah */}
        <div className="mx-auto mb-6 flex h-40 w-40 sm:h-44 sm:w-44 md:h-48 md:w-48 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-900">
          {bigIcon}
        </div>

        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>

      <Link href={href} className={`${btnBase} ${byVariant[variant]}`}>
        {ctaLabel}
      </Link>
    </div>
  );
}

/* Ikon menerima className agar bisa dibesarkan via cloneElement di atas */
export const UserIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden
  >
    <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5Z" />
  </svg>
);

export const GearIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden
  >
    <path d="M19.4 13a7.9 7.9 0 0 0 0-2l2-1.5-2-3.5-2.4 1a7.7 7.7 0 0 0-1.7-1L15 2h-6l-.3 2a7.7 7.7 0 0 0-1.7 1l-2.4-1-2 3.5 2 1.5a7.9 7.9 0 0 0 0 2l-2 1.5 2 3.5 2.4-1a7.7 7.7 0 0 0 1.7 1l.3 2h6l.3-2a7.7 7.7 0 0 0 1.7-1l2.4 1 2-3.5ZM12 15a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" />
  </svg>
);

export const BuildingIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden
  >
    <path d="M3 22h18v-2H3Zm2-4h2v-2H5Zm0-4h2v-2H5Zm0-4h2V8H5Zm4 8h2v-2H9Zm0-4h2v-2H9Zm0-4h2V8H9Zm4 8h2v-2h-2Zm0-4h2v-2h-2Zm0-4h2V8h-2Zm3-6H6v4h10Zm2 4h-2v14h2Z" />
  </svg>
);
