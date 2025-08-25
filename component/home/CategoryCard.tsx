import Link from "next/link";
import { ReactElement, cloneElement } from "react";
import BackgroundGradient from "@/component/ui/background-gradient"; // jika kamu pakai wrapper ini
import { ShimmerButton } from "@/component/ui/shimmer-button";

type Props = {
  title: string;
  icon: ReactElement<{ className?: string }>;
  href: string;
};

export default function CategoryCard({ title, icon, href }: Props) {
  const bigIcon = cloneElement(icon, {
    className: ["w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32", icon.props.className ?? ""].join(" "),
  });

  return (
    <BackgroundGradient containerClassName="rounded-3xl" className="rounded-2xl">
      <div
        className="rounded-2xl bg-white text-neutral-900 ring-1 ring-black/10 shadow-sm
                   p-8 md:p-10 min-h-[280px] md:min-h-[320px]
                   flex flex-col items-center justify-between text-center"
      >
        <div>
          <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-xl bg-neutral-100 text-neutral-900">
            {bigIcon}
          </div>
          <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
        </div>

        {/* CTA baru: ShimmerButton sebagai link */}
        <Link href={href} className="mt-6 inline-block">
          <ShimmerButton
            // atur warna jika mau: background, shimmerColor, dll
            background="black"               /* tombol hitam */
            shimmerColor="#ffffff"           /* warna kilau */
            shimmerDuration="3s"
            borderRadius="999px"
            className="px-6 py-2.5"
          >
            Explore
          </ShimmerButton>
        </Link>
      </div>
    </BackgroundGradient>
  );
}
