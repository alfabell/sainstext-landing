"use client";

import GlareCard from "@/component/ui/glare-card";
import CTAButton from "@/component/home/CTAButton";
import { ReactElement, cloneElement } from "react";

type ButtonVariant = "green" | "blue" | "neutral" | "dark";

type Props = {
  title: string;
  icon: ReactElement<{ className?: string }>;
  ctaLabel: string;
  href: string;
  ctaVariant?: ButtonVariant;
};

export default function AudienceCard({
  title,
  icon,
  ctaLabel,
  href,
  ctaVariant = "neutral",
}: Props) {
  const bigIcon = cloneElement(icon, {
    className: [
      "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24",
      icon.props.className ?? "",
    ].join(" "),
  });

  return (
    // Glare di luar: transparan, tanpa ring/box-shadow berat
    <GlareCard className="p-[1px] bg-transparent ring-0 shadow-none">
      {/* INNER CARD: putih muda (beda dari bg), teks gelap */}
      <div
        className="
          rounded-2xl bg-neutral-50 text-neutral-900
          ring-1 ring-black/10 shadow-sm
          p-8 md:p-10 min-h-[320px] md:min-h-[360px]
          flex flex-col items-center justify-between text-center
        "
      >
        <div>
          <div
            className="
              mx-auto mb-6 flex h-28 w-28 items-center justify-center
              rounded-xl bg-white text-neutral-900 ring-1 ring-black/5
            "
          >
            {bigIcon}
          </div>

          <h3 className="text-2xl font-semibold">{title}</h3>
        </div>

        <CTAButton href={href} variant={ctaVariant} className="mt-6">
          {ctaLabel}
        </CTAButton>
      </div>
    </GlareCard>
  );
}
