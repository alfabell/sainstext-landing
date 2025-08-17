import LeaderboardItem from "./LeaderboardItem";

type Item = { name: string; subtitle?: string };
type Props = { title: string; items: Item[] };

export default function LeaderboardColumn({ title, items }: Props) {
  return (
    <div className="rounded-xl overflow-hidden bg-white dark:bg-neutral-900 ring-1 ring-neutral-200 dark:ring-neutral-800 shadow-sm">
      <div className="bg-neutral-900 text-white px-4 py-2 text-sm font-semibold">
        {title}
      </div>
      <div className="p-4 grid gap-4">
        {items.map((it, i) => (
          <LeaderboardItem key={`${it.name}-${i}`} name={it.name} subtitle={it.subtitle} />
        ))}
      </div>
    </div>
  );
}
