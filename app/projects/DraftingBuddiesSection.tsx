import Link from "next/link";
import DraftingProjectCard from "./DraftingProjectCard";
import { draftingProjects } from "./draftingProjects";

const previewProjects = draftingProjects.slice(0, 6);

export default function DraftingBuddiesSection() {
  return (
    <section
      className="box-border border-[12px] border-white pt-7 pb-7 font-outfit sm:border-[16px] sm:pt-10 sm:pb-10 lg:border-[25px] lg:pt-14 lg:pb-12"
      style={{
        background:
          "linear-gradient(83.23deg, #F4F0E8 47.32%, rgba(184, 146, 74, 0.5) 116.58%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-start justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end sm:gap-6">
          <div className="min-w-0 w-full sm:w-auto">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-[#4A4A4A]">
              Latest Project
            </p>
            <h2 className="mb-3 font-cormorant text-[1.875rem] font-semibold leading-[1.15] text-charcoal sm:text-4xl lg:text-[2.75rem]">
              Latest{" "}
              <span className="text-gold">Project</span>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-[#4A4A4A] sm:text-[18px]">
              Showcasing precision, collaboration, and excellence in every
              detail.
            </p>
          </div>
          <Link
            href="/latest-project"
            className="inline-flex w-full shrink-0 items-center justify-center bg-gold px-6 py-2.5 text-base font-medium text-white transition-colors hover:bg-gold-hover sm:w-auto sm:text-[18px]"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {previewProjects.map((project) => (
            <DraftingProjectCard key={project.src} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
