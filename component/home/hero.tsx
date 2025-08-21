import CTAButton from "@/component/home/CTAButton";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-10 pb-16">
      <div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl
                      bg-secondary text-secondary-foreground p-6 sm:p-10
                      ring-1 ring-white/10 shadow-[0_40px_60px_-30px_rgba(0,0,0,.45)]"
      >
        {/* Dekorasi radial halus */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20
                     [background:radial-gradient(700px_circle_at_12%_0%,#ffffff22,transparent_45%),
                                  radial-gradient(700px_circle_at_88%_0%,#ffffff22,transparent_45%)]"
          aria-hidden
        />

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">
          {/* Kiri: teks */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Learning resources for
              <br />
              everyone!
            </h1>

            <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/80">
              We are Indonesia’s largest provider of open educational resources
              (OER), offering interactive learning tools and education materials
              for the K–12 and university students. As a non-profit initiative,
              we are committed to making quality education accessible to all.
            </p>

            <div className="mt-7">
              <CTAButton href="#">Find Your Subject</CTAButton>
            </div>
          </div>

          {/* Kanan: kartu gambar */}
          <div className="lg:justify-self-end w-full">
            <div
              className="relative mx-auto max-w-md overflow-hidden rounded-2xl
                            bg-white/5 ring-1 ring-white/10 shadow-2xl"
            >
              <Image
                // ganti ke thumbnailmu jika sudah ada di /public, mis: "/hero-students.jpg"
                src="/next.svg"
                alt="Students learning together"
                width={960}
                height={720}
                priority
                className="w-full h-auto object-contain bg-white"
              />
              {/* bayangan lembut */}
              <div
                className="pointer-events-none absolute inset-x-6 -bottom-4 h-8 rounded-2xl
                           bg-black/35 blur-xl"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
