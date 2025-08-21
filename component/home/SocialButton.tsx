import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  label: string;
  children: ReactNode; // icon
};

export default function SocialButton({ href, label, children }: Props) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20 transition"
    >
      {children}
      <span className="hidden sm:inline">{label}</span>
    </Link>
  );
}

/* icons (kalau footer kamu import dari sini) */
export const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 4a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2A2.8 2.8 0 1 0 14.8 13 2.8 2.8 0 0 0 12 8.2ZM17.5 6a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"/>
  </svg>
);
export const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
    <path d="M4.98 3.5a2.5 2.5 0 1 1-.02 5 2.5 2.5 0 0 1 .02-5ZM3 9h4v12H3zM10 9h4v2a4.6 4.6 0 0 1 4-2.2c3.03 0 5 2.04 5 5.7V21h-4v-6c0-1.84-.65-3-2.27-3-1.24 0-1.98.84-2.3 1.66-.12.3-.15.71-.15 1.12V21h-4z"/>
  </svg>
);
export const TwitterXIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
    <path d="M3 3h5.6l4.4 6.3L18.9 3H21l-7.5 9.2L21 21h-5.6l-4.7-6.7L9.1 21H3l7.7-9.3L3 3Z"/>
  </svg>
);
