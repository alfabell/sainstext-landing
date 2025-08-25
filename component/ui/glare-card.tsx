"use client";

import { ReactNode, useRef } from "react";

export default function GlareCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const cx = (...v: (string | undefined | false)[]) =>
    v.filter(Boolean).join(" ");

  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  function animateTransform(rx: number, ry: number) {
    if (!cardRef.current) return;
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      cardRef.current!.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    });
  }

  function handleEnter() {
    if (glowRef.current) glowRef.current.style.opacity = "1";
  }

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current;
    const glow = glowRef.current;
    if (!el || !glow) return;

    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    // normalisasi -1..1 dari pusat
    const px = (x / r.width) * 2 - 1;
    const py = (y / r.height) * 2 - 1;

    // sudut tilt
    const rotateX = -py * 8; // sumbu X (atas-bawah)
    const rotateY = px * 12; // sumbu Y (kiri-kanan)

    animateTransform(rotateX, rotateY);

    // posisikan glare
    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
  }

  function handleLeave() {
    if (glowRef.current) glowRef.current.style.opacity = "0";
    animateTransform(0, 0);
  }

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cx(
        "relative overflow-hidden rounded-2xl",
        "bg-neutral-950 text-white ring-1 ring-white/10",
        "transition-transform duration-150 will-change-transform",
        "shadow-[0_25px_60px_-30px_rgba(0,0,0,.55)] hover:shadow-[0_35px_80px_-40px_rgba(0,0,0,.65)]",
        className
      )}
      style={{ transform: "perspective(900px) rotateX(0deg) rotateY(0deg)" }}
    >
      {/* glare yang mengikuti kursor */}
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-200"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.25), transparent 65%)",
          left: "50%",
          top: "0%",
          filter: "blur(6px)",
        }}
      />

      {/* gloss tipis */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
