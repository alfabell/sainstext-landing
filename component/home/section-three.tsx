import CategoryCard, { BookIcon, CapIcon } from "./CategoryCard";

export default function SectionThree() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-14">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-secondary text-secondary-foreground p-6 sm:p-10">
        {/* dekorasi ringan */}
        <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(500px_circle_at_10%_0%,#ffffff22,transparent_40%),radial-gradient(500px_circle_at_90%_0%,#ffffff22,transparent_40%)]" />

        <div className="relative z-10">
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight">
            Category User
          </h2>

          <div className="mt-8 grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2">
            <CategoryCard
              title="K12 Education"
              icon={<BookIcon />}
              href="#"
            />
            <CategoryCard
              title="Higher Education"
              icon={<CapIcon />}
              href="#"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
