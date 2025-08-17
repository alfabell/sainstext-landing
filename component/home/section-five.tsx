import FunctionItem from "@/component/home/FunctionItem";

export default function SectionFive() {
  const items = [
    "AI Tutor Chat",
    "Automatic Summaries & Key Takeaways",
    "Flashcards & Smart Quizzes",
    "Smart Notes & Highlights",
    "Voice Mode",
    "Gamification",
    "Data Visualization",
    "Progress & Performance Tracking",
    "Book-on-Demand",
  ];

  // bagi jadi 2 kolom
  const left = items.slice(0, Math.ceil(items.length / 2));
  const right = items.slice(Math.ceil(items.length / 2));

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="mx-auto max-w-7xl rounded-3xl bg-neutral-100 p-6 sm:p-10 dark:bg-neutral-900/40">
        <h2 className="text-center text-2xl sm:text-3xl font-bold tracking-tight text-neutral-800 dark:text-white">
          Function of Feature
        </h2>

        <div className="mt-6 grid gap-4 sm:gap-6 md:grid-cols-2">
          <div className="grid gap-4 sm:gap-5">
            {left.map((t) => (
              <FunctionItem key={t} title={t} />
            ))}
          </div>
          <div className="grid gap-4 sm:gap-5">
            {right.map((t) => (
              <FunctionItem key={t} title={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
