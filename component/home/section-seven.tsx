import FAQItem from "./FAQItem";

const faqs = [
  {
    q: "What is Sainstext?",
    a: "Sainstext is an open educational platform that helps learners, educators, and institutions create, organize, and study from AI-assisted learning materials.",
  },
  {
    q: "Is it free to use?",
    a: "Yes, you can start for free. We also provide premium features for schools and advanced users.",
  },
  {
    q: "Who can use it?",
    a: "K-12 learners, college students, teachers, and institutions can all benefit from Sainstext.",
  },
  {
    q: "How does AI Tutor Chat work?",
    a: "Upload notes or select a subject. Our AI summarizes key points, generates quizzes, and answers questions based on your materials.",
  },
  {
    q: "Where is my data stored?",
    a: "Your data is stored securely and only used to power features you enable. You can delete your data at any time.",
  },
];

export default function SectionSeven() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-14">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl  text-secondary-foreground p-6 sm:p-10">
        {/* dekorasi radial halus */}
        <div className="pointer-events-none absolute inset-0 opacity-20
                        [background:radial-gradient(520px_circle_at_10%_0%,#ffffff22,transparent_45%),
                                     radial-gradient(520px_circle_at_90%_0%,#ffffff22,transparent_45%)]" />

        <div className="relative z-10">
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-black/90">
            Faq
          </h2>

          {/* list FAQ – center, max width agar fokus */}
          <div className="mt-8 max-w-3xl mx-auto space-y-4">
            {faqs.map((f) => (
              <FAQItem key={f.q} question={f.q} answer={f.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
