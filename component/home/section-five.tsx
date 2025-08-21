import FunctionItem, { DocIcon } from "./FunctionItem";

const items = [
  { title: "AI Tutor Chat", desc: "Create note from your computer" },
  { title: "Gamification", desc: "Create note from your computer" },
  {
    title: "Automatic Summaries & Key Takeaways",
    desc: "Create note from your computer",
  },
  { title: "Data Visualization", desc: "Create note from your computer" },
  {
    title: "Flashcards & Smart Quizzes",
    desc: "Create note from your computer",
  },
  {
    title: "Progress & Performance Tracking",
    desc: "Create note from your computer",
  },
  { title: "Smart Notes & Highlights", desc: "Create note from your computer" },
  { title: "Book-on-Demand", desc: "Create note from your computer" },
  { title: "Voice Mode", desc: "Create note from your computer" },
];

export default function SectionFive() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-14">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-secondary text-secondary-foreground p-6 sm:p-10">
        {/* dekorasi radial halus */}
        <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(520px_circle_at_10%_0%,#ffffff22,transparent_45%),radial-gradient(520px_circle_at_90%_0%,#ffffff22,transparent_45%)]" />

        <div className="relative z-10">
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight">
            Function of Feature
          </h2>

          {/* grid 2 kolom di md, 1 kolom di mobile */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {items.map((it) => (
              <FunctionItem
                key={it.title}
                title={it.title}
                desc={it.desc}
                icon={<DocIcon />}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
