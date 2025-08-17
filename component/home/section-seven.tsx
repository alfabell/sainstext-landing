import FAQItem from "@/component/home/FAQItem";

export default function SectionSeven() {
  const faqs = [
    {
      q: "What is Sainstext?",
      a: "Sainstext is an AI-assisted learning platform that provides chat tutoring, summaries, quizzes, and analytics.",
    },
    {
      q: "Is it free to use?",
      a: "You can start with a free plan. Advanced features are available on paid tiers.",
    },
    {
      q: "Who can use it?",
      a: "Learners (K-12, college), educators, and institutions can all use Sainstext.",
    },
    {
      q: "How does AI Tutor Chat work?",
      a: "Ask any question from your course; the tutor gives step-by-step guidance with citations when available.",
    },
    {
      q: "Where is my data stored?",
      a: "Data is stored securely and never shared with third parties without consent.",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="mx-auto max-w-7xl rounded-3xl bg-neutral-900 text-white p-6 sm:p-10">
        <h2 className="text-center text-2xl sm:text-3xl font-bold">Faq</h2>

        <div className="mx-auto mt-6 max-w-2xl space-y-3">
          {faqs.map((f) => (
            <FAQItem key={f.q} question={f.q} answer={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
