"use client";

import Image from "next/image";

export default function SectionFour() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-14">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl">
        {/* background block (gelap ke terang) */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-100 dark:to-neutral-900" />
        <div className="relative z-10 px-4 sm:px-8 py-10 sm:py-12">
          <h2 className="text-center text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Watch a Demo
          </h2>

          {/* Media */}
          <div className="mt-6 flex justify-center">
            <div className="relative w-full max-w-3xl rounded-2xl bg-white p-3 shadow-xl">
              <div className="overflow-hidden rounded-xl">
                {/* sementara */}
                <Image
                  src="/next.svg"
                  alt="Demo preview"
                  width={1280}
                  height={720}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Play overlay (hanya visual ya dud) */}
              <button
                type="button"
                aria-label="Play demo"
                className="absolute inset-0 m-auto h-14 w-14 rounded-full bg-red-600 shadow-lg grid place-items-center hover:bg-red-700 transition"
                style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
              >
                <svg viewBox="0 0 24 24" width="22" height="22" fill="white" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 flex justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-green-700 transition"
            >
              Get Your Study Plan!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
