import { ReactNode } from "react";

export default function LeaderboardItem({
  name,
  note,
  avatar,
}: {
  name: string;
  note: string;
  avatar?: ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <div className="grid place-content-center h-10 w-10 shrink-0 rounded-lg bg-violet-600/15 text-violet-400 ring-1 ring-violet-500/20">
        {avatar ?? <UserIcon />}
      </div>
      <div className="min-w-0">
        <p className="font-semibold leading-5">{name}</p>
        <p className="text-sm text-neutral-400">{note}</p>
      </div>
    </li>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
      <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5Z" />
    </svg>
  );
}
