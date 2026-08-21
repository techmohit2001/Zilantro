import Image from "next/image";
import type { DraftingProject } from "./draftingProjects";

export default function DraftingProjectCard({
  project,
}: {
  project: DraftingProject;
}) {
  return (
    <article className="group relative aspect-[3/2] overflow-hidden">
      <Image
        src={project.src}
        alt={project.alt}
        fill
        unoptimized
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <span className="absolute top-0 left-0 z-10 bg-gold px-2.5 py-1.5 text-[11px] font-medium uppercase tracking-wider text-white sm:px-3 sm:py-2 sm:text-xs">
        {project.title}
      </span>
      <div className="absolute inset-x-0 bottom-0 z-10 flex h-[42%] flex-col justify-center bg-black/50 px-5 py-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:px-6">
        <p className="text-[18px] font-normal leading-snug text-white">
          {project.description}
        </p>
      </div>
    </article>
  );
}
