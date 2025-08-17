import { ReactNode } from "react";

type Props = {
  name: string;
  subtitle?: string;
  avatar?: ReactNode; // optional custom avatar
};

export default function LeaderboardItem({
  name,
  subtitle = "The Most Impressive",
  avatar,
}: Props) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-md bg-neutral-200 dark:bg-neutral-800 grid place-items-center overflow-hidden">
        {avatar ?? <span className="text-sm">👤</span>}
      </div>
      <div className="leading-tight">
        <div className="font-semibold text-sm text-neutral-900 dark:text-white">
          {name}
        </div>
        <div className="text-xs text-neutral-600 dark:text-neutral-300">
          {subtitle}
        </div>
      </div>
    </div>
  );
}
