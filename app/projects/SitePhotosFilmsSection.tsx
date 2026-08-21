import Link from "next/link";
import InteriorProjectCard from "./InteriorProjectCard";
import { interiorProjects } from "./interiorProjects";

const previewProjects = interiorProjects.slice(0, 6);

export default function SitePhotosFilmsSection() {
  return (
    <section
      className="box-border border-[12px] border-white py-6 font-outfit sm:border-[16px] sm:py-8 lg:border-[25px] lg:py-12"
      style={{
        background:
          "linear-gradient(83.23deg, #F4F0E8 47.32%, rgba(184, 146, 74, 0.5) 116.58%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-start justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end sm:gap-6">
          <div className="min-w-0 w-full sm:w-auto">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-[#4A4A4A]">
              Ready to get started?
            </p>
            <h2 className="mb-3 font-cormorant text-[1.875rem] font-semibold leading-[1.15] text-charcoal sm:text-4xl lg:text-[2.75rem]">
              Our Interior Projects In{" "}
              <span className="text-gold">India</span>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-[#4A4A4A] sm:whitespace-nowrap sm:text-[18px]">
              Explore our archive of project photography, visual highlights,
              &amp; video presentations
            </p>
          </div>
          <Link
            href="/interior-projects"
            className="inline-flex w-full shrink-0 items-center justify-center bg-gold px-6 py-2.5 text-base font-medium text-white transition-colors hover:bg-gold-hover sm:w-auto sm:text-[18px]"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {previewProjects.map((project) => (
            <InteriorProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
