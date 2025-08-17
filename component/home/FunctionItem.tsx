import { ReactNode } from "react";

type Props = {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
};

export default function FunctionItem({
  title,
  subtitle = "Create note from your computer",
  icon,
}: Props) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-neutral-900 text-white px-4 py-3 shadow-sm ring-1 ring-black/10 hover:bg-neutral-800 transition">
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
        {icon ?? <NoteIcon />}
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-[12px] text-neutral-300">{subtitle}</div>
      </div>
    </div>
  );
}

/* icon sederhana */
export const NoteIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
    <path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1v5h5" />
    <rect x="8" y="11" width="8" height="1.6" rx=".8" />
    <rect x="8" y="14" width="6" height="1.6" rx=".8" />
  </svg>
);
