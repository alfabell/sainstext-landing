"use client";

import { useState, ReactNode } from "react";

type Props = {
  question: string;
  answer: ReactNode;
  defaultOpen?: boolean;
};

export default function FAQItem({ question, answer, defaultOpen }: Props) {
  const [open, setOpen] = useState(!!defaultOpen);

  return (
    <div className="rounded-lg bg-neutral-300/90 dark:bg-neutral-700/60 text-neutral-900 dark:text-white">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-4 py-3"
        aria-expanded={open}
      >
        <span className="text-sm sm:text-base text-left font-medium">
          {question}
        </span>
        <Chevron className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {/* body */}
      <div
        className={`grid transition-[grid-template-rows] duration-200 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-4 text-sm text-neutral-700 dark:text-neutral-200">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
