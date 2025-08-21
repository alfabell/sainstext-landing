import { ReactNode } from "react";

export default function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: ReactNode;
}) {
  return (
    <div className="rounded-xl bg-white text-neutral-900 ring-1 ring-black/10 shadow-sm">
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex w-full items-center justify-between gap-3 cursor-pointer p-4 sm:p-5">
          <span className="font-semibold leading-6">{question}</span>
          <span
            className="grid h-8 w-8 place-items-center rounded-md bg-neutral-100 text-neutral-700
                       ring-1 ring-black/5 transition-transform duration-200 group-open:rotate-180"
            aria-hidden
          >
            <ChevronDown />
          </span>
        </summary>

        <div className="pt-0 px-4 pb-4 sm:px-5 sm:pb-5 text-sm leading-relaxed text-neutral-600">
          {answer}
        </div>
      </details>
    </div>
  );
}

function ChevronDown() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
    </svg>
  );
}
