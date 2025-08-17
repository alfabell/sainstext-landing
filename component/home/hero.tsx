import CTAButton from "@/component/home/CTAButton";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-20">
      <div className="relative overflow-hidden rounded-3xl bg-neutral-900 text-white p-6 sm:p-10 shadow-xl">
        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(600px_circle_at_20%_10%,#ffffff33,transparent_40%),radial-gradient(600px_circle_at_80%_0%,#ffffff22,transparent_40%)]" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              Learning resources for everyone!
            </h1>
            <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
              We are Indonesia’s largest provider of open educational resources
              (OER), offering interactive learning tools and education materials
              for the K-12 and university students. As a non-profit initiative,
              we are committed to making quality education accessible to all.
            </p>

            <div className="mt-6">
              <CTAButton href="#">Find Your Subject</CTAButton>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl max-w-md">
              <Image
                src="/next.svg"
                width={200}
                height={200}
                alt="Students learning together"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
