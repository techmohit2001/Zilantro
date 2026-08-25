import Image from "next/image";
import { palmsPebblesProjects } from "@/app/projects/palmsPebblesProjects";

export default function PalmsPebblesProjectsSection() {
  return (
    <section
      className="box-border border-[12px] border-white pt-7 pb-7 font-outfit sm:border-[16px] sm:pt-10 sm:pb-10 lg:border-[25px] lg:pt-14 lg:pb-12"
      style={{ background: "#FAF8F4" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-[#4A4A4A]">
            Ready to get started?
          </p>
          <h1 className="mb-3 font-cormorant text-[1.875rem] font-semibold leading-[1.15] text-charcoal sm:text-4xl lg:text-[2.75rem]">
            Palms &amp; Pebbles{" "}
            <span className="text-gold">Project</span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-[#4A4A4A] sm:text-[18px]">
            Explore our archive of project photography, visual highlights,
            &amp; video presentations
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {palmsPebblesProjects.map((photo, index) => (
            <article
              key={photo.src}
              className="group relative aspect-[3/2] overflow-hidden"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                unoptimized
                priority={index < 3}
                className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <Image
                src={photo.hoverSrc}
                alt={photo.alt}
                fill
                unoptimized
                className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
