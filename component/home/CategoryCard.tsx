import Link from "next/link";
import React, {
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
} from "react";

type Props = {
  title: string;
  icon: ReactNode;   // kirim <BookIcon /> atau <CapIcon />
  href: string;
};

export default function CategoryCard({ title, icon, href }: Props) {
  // Besarkan ikon tanpa ubah komponennya (type-safe)
let bigIcon: ReactNode = icon;

if (isValidElement<{ className?: string }>(icon)) {
  bigIcon = cloneElement(icon, {
    className: [
      "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32", // ukuran ikon
      icon.props.className ?? "",
    ].join(" "),
  });
}


  return (
    <Link
      href={href}
      className="group rounded-2xl bg-white text-neutral-900 shadow-sm ring-1 ring-black/10 p-8 md:p-10 flex flex-col items-center text-center justify-between min-h-[320px] md:min-h-[360px] transition hover:shadow-lg hover:ring-black/20"
    >
      <div>
        {/* kotak ikon besar */}
        <div className="mx-auto mb-6 flex h-40 w-40 sm:h-44 sm:w-44 md:h-48 md:w-48 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-900">
          {bigIcon}
        </div>

        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>

      {/* hint kecil biar terasa clickable */}
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-600 group-hover:gap-3 transition">
        Explore
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
          <path d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
        </svg>
      </span>
    </Link>
  );
}

/* Ikon – menerima className agar bisa dibesarkan dari luar */
export const BookIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M3 4a2 2 0 0 1 2-2h9a3 3 0 0 1 3 3v15a1 1 0 0 1-1.447.894L12 19.118 8.447 20.894A1 1 0 0 1 7 20V3H5a1 1 0 0 0-1 1v16H3V4Zm6 1v12.382l3-1.5 3 1.5V5a1 1 0 0 0-1-1H9Z" />
  </svg>
);

export const CapIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M12 3 1 8l11 5 9-4.091V17h2V8L12 3ZM4 13v4a4 4 0 0 0 4 4h8v-2H8a2 2 0 0 1-2-2v-4Z" />
  </svg>
);
