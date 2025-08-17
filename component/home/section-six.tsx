"use client";

import { useState } from "react";
import LeaderboardTabs from "./LeaderboardTabs";
import LeaderboardColumn from "./LeaderboardColumn";

type Tab = "learner" | "educators" | "institutions";

const DATA: Record<
  Tab,
  {
    k12: { name: string; subtitle?: string }[];
    college: { name: string; subtitle?: string }[];
    general: { name: string; subtitle?: string }[];
  }
> = {
  learner: {
    k12: [{ name: "Name" }, { name: "Name" }, { name: "Name" }],
    college: [{ name: "Name" }, { name: "Name" }, { name: "Name" }],
    general: [{ name: "Name" }, { name: "Name" }, { name: "Name" }, { name: "Name" }],
  },
  educators: {
    k12: [{ name: "Name" }, { name: "Name" }],
    college: [{ name: "Name" }, { name: "Name" }, { name: "Name" }],
    general: [{ name: "Name" }],
  },
  institutions: {
    k12: [{ name: "Name" }],
    college: [{ name: "Name" }, { name: "Name" }],
    general: [{ name: "Name" }, { name: "Name" }],
  },
};

export default function SectionSix() {
  const [tab, setTab] = useState<Tab>("learner");
  const d = DATA[tab];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl">
        {/* gradient bg seperti desain */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-200 to-neutral-900 dark:from-neutral-800 dark:to-neutral-900" />
        <div className="relative z-10 p-6 sm:p-10">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Leaderboard
          </h2>

          <div className="mt-4">
            <LeaderboardTabs value={tab} onChange={setTab} />
          </div>

          <div className="mt-6 grid gap-5 lg:gap-6 grid-cols-1 md:grid-cols-3">
            <LeaderboardColumn title="K12" items={d.k12} />
            <LeaderboardColumn title="College" items={d.college} />
            <LeaderboardColumn title="General" items={d.general} />
          </div>
        </div>
      </div>
    </section>
  );
}
