import { ReactNode } from "react";

export default function LeaderboardColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-neutral-900/70 ring-1 ring-white/10 p-4 sm:p-5">
      <div className="mb-3 text-sm font-semibold text-white/85">{title}</div>
      <ul className="space-y-5">{children}</ul>
    </div>
  );
}
