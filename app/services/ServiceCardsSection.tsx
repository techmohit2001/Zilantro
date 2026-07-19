"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  {
    title: "Mechanical Construction",
    image: "/services-cards1.png",
    imageAlt: "Construction workers on scaffolding at a building site",
    icon: "/service-cardicon1.png",
    description:
      "HVAC, ventilation, and climate control systems engineered and installed to perform well and meet code, keeping buildings comfortable and running efficiently.",
    tags: ["HVAC", "Electrical", "Fire Safety", "Plumbing"],
  },
  {
    title: "Electrical Construction",
    image: "/services-cards2.png",
    imageAlt: "Interior construction with conduit and scaffolding",
    icon: "/service-cardicon2.png",
    description:
      "Complete electrical systems, from power distribution to lighting and low-voltage wiring, installed to the highest safety and code standards.",
    tags: ["RCC Structure", "Commercial", "Residential"],
  },
  {
    title: "Plumbing Construction",
    image: "/services-cards3.png",
    imageAlt: "Site team reviewing plans near piping installation",
    icon: "/service-cardicon3.png",
    description:
      "Full plumbing systems for commercial and institutional buildings, covering supply and drainage lines, fixture installation, and compliance testing.",
    tags: ["Civil Works", "Excavation", "Site Prep"],
  },
  {
    title: "Interior Design",
    image: "/services-cards5.png",
    imageAlt: "Modern commercial interior lobby design",
    icon: "/service-cardicon1.png",
    description:
      "Functional, on-brand interiors for offices, retail, and hospitality spaces, designed to improve experience and support your business goals.",
    tags: ["HVAC", "Electrical", "Fire Safety", "Plumbing"],
  },
  {
    title: "General Contracting",
    image: "/services-cards4.png",
    imageAlt: "Large commercial construction site with workers",
    icon: "/service-cardicon2.png",
    description:
      "We manage every part of construction execution, scheduling, site management, trade coordination, & quality assurance, delivered safely & to the highest standard of workmanship.",
    tags: ["RCC Structure", "Commercial", "Residential"],
  },
  {
    title: "Fire Protection",
    image: "/services-cards6.png",
    imageAlt: "Fire suppression piping and sprinkler system",
    icon: "/service-cardicon3.png",
    description:
      "Fire detection and suppression systems designed and installed to meet code requirements and keep people and property safe.",
    tags: ["Civil Works", "Excavation", "Site Prep"],
  },
  {
    title: "Civil Contracting",
    image: "/services-cards7.png",
    imageAlt: "Engineers reviewing blueprints at a civil works site",
    icon: "/service-cardicon1.png",
    description:
      "Site prep and outdoor civil work, grading, excavation, hardscaping, parking, and landscaping infrastructure, built to last.",
    tags: ["HVAC", "Electrical", "Fire Safety", "Plumbing"],
  },
  {
    title: "Architecture",
    image: "/services-cards8.png",
    imageAlt: "Architect sketching a modern house design on a tablet",
    icon: "/service-cardicon2.png",
    description:
      "Design services that turn your vision into buildable plans, balancing form, function, and feasibility from concept through construction documents.",
    tags: ["RCC Structure", "Commercial", "Residential"],
  },
  {
    title: "Structural Engineering",
    image: "/services-cards9.png",
    imageAlt: "Steel structural framework of a building under construction",
    icon: "/service-cardicon3.png",
    description:
      "Structural design and analysis that keep every building strong, from foundation to full envelope, engineered for safety and durability.",
    tags: ["Civil Works", "Excavation", "Site Prep"],
  },
  {
    title: "Design & Build",
    image: "/services-cards10.png",
    imageAlt: "Team reviewing architectural plans on a table",
    icon: "/service-cardicon1.png",
    description:
      "One team manages planning, design, procurement, and construction, cutting down complexity, improving communication, and speeding up delivery.",
    tags: ["HVAC", "Electrical", "Fire Safety", "Plumbing"],
  },
  {
    title: "BIM Services",
    image: "/services-cards11.png",
    imageAlt: "Professional reviewing a 3D BIM model of a building",
    icon: "/service-cardicon2.png",
    description:
      "3D modeling and coordination across all building systems, reducing conflicts, improving accuracy, and streamlining construction from day one.",
    tags: ["RCC Structure", "Commercial", "Residential"],
  },
];

const INITIAL_COUNT = 3;

export default function ServiceCardsSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll
    ? services
    : services.slice(0, INITIAL_COUNT);

  return (
    <section className="bg-[#F9F6EE] pb-12 pt-10 font-outfit lg:pb-16 lg:pt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {visibleServices.map((service) => (
            <article
              key={service.title}
              className="flex flex-col border-b-2 border-gold bg-white px-5 pb-7 pt-6 sm:px-6 sm:pb-8 sm:pt-7"
            >
              <div className="mb-5">
                <h2 className="text-lg font-semibold text-charcoal sm:text-xl">
                  {service.title}
                </h2>
                <span
                  className="mt-3 block h-px w-10 bg-charcoal"
                  aria-hidden="true"
                />
              </div>

              <div className="relative mb-10">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-600 ease-out hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <span className="absolute bottom-0 left-1/2 flex h-14 w-14 -translate-x-1/2 translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-gold shadow-sm sm:h-16 sm:w-16">
                  <Image
                    src={service.icon}
                    alt=""
                    width={40}
                    height={40}
                    unoptimized
                    className="h-8 w-8 object-contain mix-blend-screen sm:h-9 sm:w-9"
                  />
                </span>
              </div>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#706F6C] sm:text-[15px]">
                {service.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-gold/40 bg-white px-2.5 py-1 text-xs font-medium text-gold sm:text-[13px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center lg:mt-12">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center justify-center bg-gold px-7 py-3 text-base font-medium text-white transition-colors hover:bg-gold-hover sm:text-[17px]"
          >
            {showAll ? "Show Less" : "See All Services"}
          </button>
        </div>
      </div>
    </section>
  );
}
