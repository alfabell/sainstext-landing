import { ReactNode } from "react";

export default function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: ReactNode;
}) {
  return (
    <div className="rounded-xl bg-neutral-100 text-black ring-1 ring-white/10 shadow-sm">
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex w-full items-center justify-between gap-3 cursor-pointer p-4 sm:p-5">
          <span className="font-semibold leading-6">{question}</span>

          {/* chevron box */}
          <span
            className="grid h-8 w-8 place-items-center rounded-md bg-black/70 text-white/80
                       ring-1 ring-white/10 transition-transform duration-200 group-open:rotate-180"
            aria-hidden
          >
            <ChevronDown />
          </span>
        </summary>

        {/* isi jawaban */}
        <div className="pt-0 px-4 pb-4 sm:px-5 sm:pb-5 text-sm leading-relaxed text-black/80">
          {answer}
        </div>
      </details>
    </div>
  );
}

function ChevronDown() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
    </svg>
  );
}
