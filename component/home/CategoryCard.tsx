import { ReactNode } from "react";
import Link from "next/link";

type Props = {
  title: string;
  icon: ReactNode;
  href?: string; // opsional: kalau ingin seluruh card bisa diklik ya dud 
};

export default function CategoryCard({ title, icon, href }: Props) {
  const CardInner = (
    <div className="h-full rounded-xl bg-neutral-100 dark:bg-neutral-800 p-6 ring-1 ring-neutral-200/80 dark:ring-neutral-700 shadow-sm hover:shadow-md transition">
      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-white dark:bg-neutral-900">
        <div className="text-[#0B3263]">{icon}</div>
      </div>
      <div className="text-sm font-semibold text-[#0B3263]">{title}</div>
    </div>
  );

  return href ? (
    <Link
      href={href}
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl"
    >
      {CardInner}
    </Link>
  ) : (
    CardInner
  );
}

/*Ikon simpel (inline)*/
export const BookIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden>
    <path d="M6 3a3 3 0 0 0-3 3v13a2 2 0 0 0 2 2h12.5a1.5 1.5 0 0 0 0-3H6.5A1.5 1.5 0 0 1 5 16V6a1 1 0 0 1 1-1h11V3H6z" />
    <path d="M19 5h-5v11h5a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z" />
    <rect x="9" y="7" width="4" height="1.6" rx=".8"/>
    <rect x="9" y="10" width="4" height="1.6" rx=".8"/>
  </svg>
);

export const CapIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden>
    <path d="M12 3 1 8l11 5 9-4.09V16h2V8L12 3z" />
    <path d="M7 12v3.5c0 1.93 2.69 3.5 6 3.5s6-1.57 6-3.5V12l-6 2.73L7 12z" />
  </svg>
);
