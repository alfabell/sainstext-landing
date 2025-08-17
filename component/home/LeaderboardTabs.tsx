"use client";

type Tab = "learner" | "educators" | "institutions";

type Props = {
  value: Tab;
  onChange: (t: Tab) => void;
};

export default function LeaderboardTabs({ value, onChange }: Props) {
  const tabs: { key: Tab; label: string }[] = [
    { key: "learner", label: "Learner" },
    { key: "educators", label: "Educators" },
    { key: "institutions", label: "Institutions" },
  ];

  return (
    <div className="inline-flex gap-3">
      {tabs.map((t) => {
        const active = value === t.key;
        return (
          <button
            key={t.key}
            onClick={() => onChange(t.key)}
            className={[
              "px-4 py-2 rounded-md text-sm font-medium transition border",
              active
                ? "bg-blue-700 text-white border-blue-700"
                : "bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border-transparent"
            ].join(" ")}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
