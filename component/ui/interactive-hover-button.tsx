"use client";

import Link from "next/link";
import { ReactNode, useRef } from "react";

type Variant = "dark" | "light";
type Size = "sm" | "md" | "lg";

export function InteractiveHoverButton({
  href = "#",
  children,
  variant = "dark",
  size = "md",
  className,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  // util gabung class tanpa dependency
  const cx = (...v: (string | undefined | false)[]) => v.filter(Boolean).join(" ");

  const sizes: Record<Size, string> = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-sm",
    lg: "h-12 px-7 text-base",
  };

  const fills: Record<Variant, string> = {
    dark: "bg-black text-white hover:bg-black/90",
    light: "bg-white text-neutral-900 hover:bg-white/90",
  };

  const glowRef = useRef<HTMLSpanElement>(null);

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glowRef.current?.style.setProperty("--x", `${x}px`);
    glowRef.current?.style.setProperty("--y", `${y}px`);
  }

  return (
    <Link
      href={href}
      onMouseMove={handleMove}
      className={cx(
        // outer gradient ring ala 21st.dev
        "group inline-flex rounded-full p-[2px] transition",
        "bg-[linear-gradient(90deg,#7c3aed_0%,#06b6d4_50%,#22c55e_100%)]",
        "hover:brightness-110 active:brightness-95",
        className
      )}
    >
      <span
        className={cx(
          "relative inline-flex items-center justify-center gap-2 rounded-full",
          "ring-1 ring-black/10 overflow-hidden",
          sizes[size],
          fills[variant]
        )}
      >
        {/* hover glow mengikuti posisi cursor */}
        <span
          ref={glowRef}
          aria-hidden
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full
                     w-44 h-44 opacity-0 group-hover:opacity-100 transition-opacity duration-200
                     bg-[radial-gradient(circle_at_center,rgba(255,255,255,.18),transparent_60%)]"
          style={{ left: "var(--x)", top: "var(--y)" } as React.CSSProperties}
        />
        <span className="relative">{children}</span>
        {/* panah */}
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          aria-hidden
          className="relative transition-transform duration-200 group-hover:translate-x-0.5"
          fill="currentColor"
        >
          <path d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
        </svg>
      </span>
    </Link>
  );
}

// optional default export kalau kamu suka import default
export default InteractiveHoverButton;
