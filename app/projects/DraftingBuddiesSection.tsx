import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    category: "Industrial",
    title: "Tesla Manufacturing Building",
    src: "/gallery-drafting1.png",
    alt: "Aerial view of Tesla manufacturing facility",
  },
  {
    category: "Industrial",
    title: "Amazon Warehouse PVD2",
    src: "/gallery-drafting2.png",
    alt: "Amazon warehouse exterior",
  },
  {
    category: "Entertainment",
    title: "Universal Studios Florida",
    src: "/gallery-drafting3.png",
    alt: "Universal Studios Florida entrance",
  },
  {
    category: "Healthcare",
    title: "Umc Health & Wellness Centre",
    src: "/gallery-drafting4.png",
    alt: "UMC Health & Wellness Centre building",
  },
  {
    category: "Transport",
    title: "Ferrero Chocolate Factory",
    src: "/gallery-drafting5.png",
    alt: "Ferrero chocolate factory building",
  },
  {
    category: "Hotels",
    title: "MNGE Eufaula & Casino Hotel",
    src: "/gallery-drafting6.png",
    alt: "MNGE Eufaula casino hotel aerial view",
  },
];

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
            href="/#services"
            className="inline-flex w-full shrink-0 items-center justify-center bg-gold px-6 py-2.5 text-base font-medium text-white transition-colors hover:bg-gold-hover sm:w-auto sm:text-[18px]"
          >
            See All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative aspect-[3/2] overflow-hidden"
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
              <span className="absolute top-0 left-0 bg-gold px-2.5 py-1.5 text-[11px] font-medium uppercase tracking-wider text-white sm:px-3 sm:py-2 sm:text-xs">
                {project.category}
              </span>
              <h3 className="absolute bottom-3 left-3 right-3 font-outfit text-base font-medium text-white sm:bottom-4 sm:left-4 sm:right-4 sm:text-lg">
                {project.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
