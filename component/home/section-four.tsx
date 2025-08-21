import Image from "next/image";

export default function SectionFour() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-14">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-secondary text-secondary-foreground p-6 sm:p-10">
        {/* dekorasi ringan */}
        <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(500px_circle_at_10%_0%,#ffffff22,transparent_40%),radial-gradient(500px_circle_at_90%_0%,#ffffff22,transparent_40%)]" />

        <div className="relative z-10">
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight">
            Watch a Demo
          </h2>

          <div className="mt-8 flex flex-col items-center">
            {/* Kartu video */}
            <div className="relative w-full max-w-4xl">
              <div className="overflow-hidden rounded-xl bg-white ring-1 ring-black/10 shadow-lg">
                {/* ganti src dengan thumbnail-mu sendiri di /public jika ada */}
                <Image
                  src="/next.svg"
                  alt="Demo preview"
                  width={1280}
                  height={720}
                  priority
                  className="w-full h-auto aspect-video object-contain bg-white"
                />

                {/* tombol play overlay */}
                <button
                  type="button"
                  aria-label="Play demo"
                  className="absolute inset-0 grid place-content-center group"
                >
                  <span className="sr-only">Play demo</span>
                  <span className="grid place-items-center h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-red-600 text-white shadow-xl transition group-hover:scale-105">
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="currentColor"
                      aria-hidden
                      className="-ml-0.5"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>
              </div>

              {/* drop shadow lembut di bawah kartu */}
              <div
                className="pointer-events-none absolute inset-x-6 -bottom-4 h-8 rounded-2xl bg-black/30 blur-xl"
                aria-hidden
              />
            </div>

            {/* CTA */}
            <a
              href="#"
              className="mt-10 inline-flex h-11 items-center justify-center rounded-md px-5 font-semibold
                         bg-emerald-600 text-white border border-emerald-600 hover:bg-emerald-700 transition"
            >
              Get Your Study Plan!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
