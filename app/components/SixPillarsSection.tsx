"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const pillars = [
  {
    title: "End-to-End Execution",
    description:
      "One team from groundbreak to handover. No gaps in ownership - we are accountable for every stage of construction.",
  },
  {
    title: "On-Time Delivery",
    description:
      "Our structured timelines and proactive planning ensure projects are delivered on schedule without compromising quality.",
  },
  {
    title: "Skilled Workforce",
    description:
      "Our in-house team of 40+ professionals brings decades of combined experience across MEPF, structural, and interior work.",
  },
  {
    title: "Precision Engineering",
    description:
      "Advanced engineering practices and modern tools ensure every detail meets the highest standards of accuracy and safety.",
  },
  {
    title: "Transparent Process",
    description:
      "Clear communication, regular updates, and honest pricing keep you informed at every stage of your project.",
  },
  {
    title: "Nationwide Reach",
    description:
      "With projects across India, we bring our expertise and quality standards to clients wherever they need us.",
  },
];

export default function SixPillarsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="services" className="bg-white py-5 font-outfit lg:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-5 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-base text-[#706F6C] sm:text-[18px]">Why Zilantro</p>
            <h2 className="font-cormorant text-[1.875rem] font-semibold leading-[1.15] text-charcoal sm:text-4xl lg:text-[3.25rem]">
              Six Pillars of{" "}
              <span className="text-gold">Uncompromising</span> 
              <br />
              Quality
            </h2>
          </div>
          <Link
            href="/services"
            className="shrink-0 bg-gold px-6 py-3 text-[18px] font-medium text-white transition-colors hover:bg-gold-hover"
          >
            See All Services
          </Link>
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-[2fr_3fr] lg:gap-14">
          <div onMouseLeave={() => setActiveIndex(null)}>
            {pillars.map((pillar, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={pillar.title}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="border-b border-[#D9D5CE]"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((current) =>
                        current === index ? null : index,
                      )
                    }
                    className="flex w-full cursor-pointer items-center justify-between py-3.5 text-left lg:cursor-default"
                    aria-expanded={isActive}
                  >
                    <span
                      className={`text-lg transition-colors sm:text-[22px] ${
                        isActive ? "text-charcoal" : "text-[#706F6C]"
                      }`}
                    >
                      {pillar.title}
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`shrink-0 transition-transform duration-200 ${
                        isActive ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="#706F6C"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-3.5 text-base leading-relaxed text-[#706F6C] sm:text-[20px]">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="group relative min-h-[280px] overflow-hidden sm:min-h-[480px] lg:min-h-[580px]">
            <Image
              src="/home-sixpillar1.png"
              alt="Luxury mall interior with chandeliers and marble floors"
              fill
              unoptimized
              priority
              className="object-cover transition-transform duration-600 ease-out group-hover:scale-110"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
