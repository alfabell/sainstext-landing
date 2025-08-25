import CategoryCard from "./CategoryCard";
import { BookIcon, CapIcon } from "./icons";

export default function SectionThree() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Judul sederhana */}
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold tracking-tight text-black">
          Category User
        </h2>

        {/* Grid cards (ukuran tetap seperti sebelumnya) */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <CategoryCard
            title="K12 Education"
            icon={<BookIcon className="w-12 h-12" />}
            href="#"
          />
          <CategoryCard
            title="Higher Education"
            icon={<CapIcon className="w-12 h-12" />}
            href="#"
          />
        </div>
      </div>
    </section>
  );
}
