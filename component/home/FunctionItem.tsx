import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  desc: string;
};

export default function FunctionItem({ icon, title, desc }: Props) {
  return (
    <div className="rounded-xl bg-white text-neutral-900 ring-1 ring-black/10 shadow-sm hover:shadow-md transition">
      <div className="p-4 sm:p-5 flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-900 ring-1 ring-black/5">
          {icon}
        </div>
        <div className="min-w-0">
          <h4 className="font-semibold leading-6">{title}</h4>
          <p className="mt-1 text-sm text-neutral-500">{desc}</p>
        </div>
      </div>
    </div>
  );
}

/* Ikon sederhana (dokumen) – dipakai default */
export const DocIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    className={className}
    fill="currentColor"
    aria-hidden
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Zm0 0v6h6" />
  </svg>
);
