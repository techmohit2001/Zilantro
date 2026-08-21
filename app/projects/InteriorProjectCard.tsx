import Image from "next/image";
import type { InteriorProject } from "./interiorProjects";

export default function InteriorProjectCard({
  project,
}: {
  project: InteriorProject;
}) {
  if (!project.src) {
    return <article className="aspect-[4/3] bg-[#EDE8DC]" />;
  }

  return (
    <article className="group relative aspect-[4/3] overflow-hidden">
      <Image
        src={project.src}
        alt={project.alt}
        fill
        unoptimized
        className="object-cover transition-opacity duration-500 group-hover:opacity-0"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      {project.hoverSrc ? (
        <Image
          src={project.hoverSrc}
          alt={project.alt}
          fill
          unoptimized
          className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      ) : null}
      <div className="absolute inset-0 z-10 bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-x-0 bottom-0 px-5 py-5 sm:px-6 sm:py-6">
          {project.title ? (
            <h3 className="text-[22px] font-semibold leading-tight text-white">
              {project.title}
            </h3>
          ) : null}
          {project.description ? (
            <p className="mt-1.5 text-[18px] font-normal leading-snug text-white">
              {project.description}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}
