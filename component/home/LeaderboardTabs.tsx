export default function LeaderboardTabs({
  value,
  onChange,
}: {
  value: "learner" | "educators" | "institutions";
  onChange: (v: "learner" | "educators" | "institutions") => void;
}) {
  const tabs: Array<{ key: typeof value; label: string }> = [
    { key: "learner", label: "Learner" },
    { key: "educators", label: "Educators" },
    { key: "institutions", label: "Institutions" },
  ];

  return (
    <div className="mt-4 flex gap-2">
      {tabs.map((t) => {
        const active = value === t.key;
        return (
          <button
            key={t.key}
            onClick={() => onChange(t.key)}
            className={[
              "h-9 rounded-md px-3 text-sm font-medium transition border",
              active
                ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                : "bg-black/30 text-white/85 border-white/10 hover:bg-white/15",
            ].join(" ")}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
