import AudienceCard, { UserIcon, GearIcon, BuildingIcon } from "./AudienceCard";

export default function SectionTwo() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-14">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-secondary text-secondary-foreground p-6 sm:p-10">
        {/* dekorasi */}
        <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(500px_circle_at_10%_0%,#ffffff22,transparent_40%),radial-gradient(500px_circle_at_90%_0%,#ffffff22,transparent_40%)]" />

        <div className="relative z-10">
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight">
            Create Accurate Test with AI from your course!
          </h2>

          {/* cards – besar & putih */}
          <div className="mt-8 grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3">
            <AudienceCard
              title="Learners"
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
              variant="blue"
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
