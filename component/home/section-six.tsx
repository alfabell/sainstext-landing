"use client";

import { useState } from "react";
import LeaderboardTabs from "./LeaderboardTabs";
import LeaderboardColumn from "./LeaderboardColumn";
import LeaderboardItem from "./LeaderboardItem";

type Row = { name: string; note: string };
type Columns = { k12: Row[]; college: Row[]; general: Row[] };

const DATA: Record<"learner" | "educators" | "institutions", Columns> = {
  learner: {
    k12: [
      { name: "Name", note: "The Most Impressive" },
      { name: "Name", note: "The Most Impressive" },
      { name: "Name", note: "The Most Impressive" },
    ],
    college: [
      { name: "Name", note: "The Most Impressive" },
      { name: "Name", note: "The Most Impressive" },
      { name: "Name", note: "The Most Impressive" },
    ],
    general: [
      { name: "Name", note: "The Most Impressive" },
      { name: "Name", note: "The Most Impressive" },
      { name: "Name", note: "The Most Impressive" },
    ],
  },
  educators: {
    k12: [{ name: "Name", note: "Top Mentor" }, { name: "Name", note: "Top Mentor" }, { name: "Name", note: "Top Mentor" }],
    college: [{ name: "Name", note: "Top Mentor" }, { name: "Name", note: "Top Mentor" }, { name: "Name", note: "Top Mentor" }],
    general: [{ name: "Name", note: "Top Mentor" }, { name: "Name", note: "Top Mentor" }, { name: "Name", note: "Top Mentor" }],
  },
  institutions: {
    k12: [{ name: "School A", note: "Outstanding" }, { name: "School B", note: "Outstanding" }, { name: "School C", note: "Outstanding" }],
    college: [{ name: "Campus A", note: "Outstanding" }, { name: "Campus B", note: "Outstanding" }, { name: "Campus C", note: "Outstanding" }],
    general: [{ name: "Org A", note: "Outstanding" }, { name: "Org B", note: "Outstanding" }, { name: "Org C", note: "Outstanding" }],
  },
};

export default function SectionSix() {
  const [tab, setTab] = useState<"learner" | "educators" | "institutions">(
    "learner",
  );
  const { k12, college, general } = DATA[tab];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-14">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-secondary text-secondary-foreground p-6 sm:p-10">
        {/* dekorasi radial */}
        <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(520px_circle_at_10%_0%,#ffffff22,transparent_45%),radial-gradient(520px_circle_at_90%_0%,#ffffff22,transparent_45%)]" />

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Leaderboard
          </h2>

          <LeaderboardTabs value={tab} onChange={setTab} />

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-5">
            <LeaderboardColumn title="K12">
              {k12.map((r, i) => (
                <LeaderboardItem key={i} name={r.name} note={r.note} />
              ))}
            </LeaderboardColumn>

            <LeaderboardColumn title="College">
              {college.map((r, i) => (
                <LeaderboardItem key={i} name={r.name} note={r.note} />
              ))}
            </LeaderboardColumn>

            <LeaderboardColumn title="General">
              {general.map((r, i) => (
                <LeaderboardItem key={i} name={r.name} note={r.note} />
              ))}
            </LeaderboardColumn>
          </div>
        </div>
      </div>
    </section>
  );
}
