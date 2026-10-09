import Image from "next/image";
import Link from "next/link";
import { palmsPebblesProjects } from "./palmsPebblesProjects";

const previewPhotos = palmsPebblesProjects.slice(0, 6);

export default function PalmsPebblesSection() {
  return (
    <section
      className="box-border border-[12px] border-white py-7 font-outfit sm:border-[16px] sm:py-10 lg:border-[25px] lg:py-14"
      style={{ background: "#FAF8F4" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-start justify-between gap-5 sm:mb-10 sm:flex-row sm:items-end sm:gap-6 lg:mb-12">
          <div className="min-w-0 w-full sm:w-auto">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-[#4A4A4A]">
              Ready to get started?
            </p>
            <h2 className="mb-3 font-cormorant text-[1.875rem] font-semibold leading-[1.15] text-charcoal sm:text-4xl lg:text-[2.75rem]">
              Palms &amp; Pebbles{" "}
              <span className="text-gold">Project</span>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-[#4A4A4A] sm:text-[18px]">
              Explore our archive of project photography, visual highlights,
              &amp; video presentations
            </p>
          </div>
          <Link
            href="/palms-&-pebbles-projects"
            className="inline-flex w-full shrink-0 items-center justify-center bg-gold px-6 py-2.5 text-base font-medium text-white transition-colors hover:bg-gold-hover sm:w-auto sm:text-[18px]"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {previewPhotos.map((photo) => (
            <div
              key={photo.src}
              className="group relative aspect-[3/2] overflow-hidden"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                unoptimized
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
