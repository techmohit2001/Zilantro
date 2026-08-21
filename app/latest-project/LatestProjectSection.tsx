import DraftingProjectCard from "@/app/projects/DraftingProjectCard";
import { draftingProjects } from "@/app/projects/draftingProjects";

export default function LatestProjectSection() {
  return (
    <section
      className="box-border border-[12px] border-white pt-7 pb-7 font-outfit sm:border-[16px] sm:pt-10 sm:pb-10 lg:border-[25px] lg:pt-14 lg:pb-12"
      style={{ background: "#FAF8F4" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-[#4A4A4A]">
            Latest Project
          </p>
          <h1 className="mb-3 font-cormorant text-[1.875rem] font-semibold leading-[1.15] text-charcoal sm:text-4xl lg:text-[2.75rem]">
            Latest <span className="text-gold">Project</span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-[#4A4A4A] sm:text-[18px]">
            Showcasing precision, collaboration, and excellence in every detail.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {draftingProjects.map((project) => (
            <DraftingProjectCard key={project.src} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
