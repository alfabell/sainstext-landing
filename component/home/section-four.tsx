// component/home/section-four.tsx
import { Button } from "@/component/ui/button"; // pastikan file-nya ada & named export

export default function SectionFour() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-14">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-black/10 p-6 sm:p-10">
        <div className="relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black">
            Watch a Demo
          </h2>

          {/* ... area video / gambar ... */}

          <div className="mt-6">
            {/* Tombol hitam (teks putih) */}
            <Button size="lg" variant="secondary" className="rounded-full">
              Get Your Study Plan!
            </Button>

            {/* === opsi lain (biarkan dikomentari jika tidak dipakai) === */}

            {/* Tombol putih (teks hitam) */}
            {/* 
            <Button size="lg" variant="default" className="rounded-full">
              Get Your Study Plan!
            </Button>
            */}

            {/* Tombol jadi link */}
            {/* 
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <a href="#plan">Get Your Study Plan!</a>
            </Button>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}
