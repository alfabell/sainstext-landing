import AudienceCard, { UserIcon, GearIcon, BuildingIcon } from "./AudienceCard";

export default function SectionTwo() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-14">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-neutral-900 text-white p-6 sm:p-10">
        {/* dekorasi ringan */}
        <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(500px_circle_at_10%_0%,#ffffff22,transparent_40%),radial-gradient(500px_circle_at_90%_0%,#ffffff22,transparent_40%)]" />

        <div className="relative z-10">
          <h2 className="text-center text-2xl sm:text-3xl font-bold tracking-tight">
            Create Accurate Test with AI from your course!
          </h2>

          {/* cards */}
          <div className="mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <AudienceCard
              title="learners"
              icon={<UserIcon />}
              ctaLabel="Try for Free"
              href="#"
              variant="green"
            />
            <AudienceCard
              title="Educators"
              icon={<GearIcon />}
              ctaLabel="Make Your Class Great"
              href="#"
              variant="neutral"
            />
            <AudienceCard
              title="Institution"
              icon={<BuildingIcon />}
              ctaLabel="Learn More"
              href="#"
              variant="blue"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
