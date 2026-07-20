"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  {
    src: "/gallery-palms4.png",
    hoverSrc: "/gallery-palms1.png",
    alt: "Palms & Pebbles — entrance stairs and arched doorway",
  },
  {
    src: "/gallery-palms5.png",
    hoverSrc: "/gallery-palms3.png",
    alt: "Palms & Pebbles — courtyard with tree and hills",
  },
  {
    src: "/gallery-palms6.png",
    hoverSrc: "/gallery-palms2.png",
    alt: "Palms & Pebbles — building exterior with rocky terrain",
  },
];

export default function PalmsPebblesSection() {
  const [startIndex, setStartIndex] = useState(0);

  const next = () =>
    setStartIndex((i) => (i + 1 >= images.length ? 0 : i + 1));

  const visible = [
    images[startIndex],
    images[(startIndex + 1) % images.length],
    images[(startIndex + 2) % images.length],
  ];

  return (
    <section
      className="box-border border-[12px] border-white py-7 font-outfit sm:border-[16px] sm:py-10 lg:border-[25px] lg:py-14"
      style={{ background: "#FAF8F4" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 lg:mb-12">
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

        <div className="relative pr-5 sm:pr-6">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((image, index) => (
              <div
                key={`${startIndex}-${image.src}`}
                className={[
                  "group relative aspect-[3/2] overflow-hidden",
                  index === 1 ? "hidden sm:block" : "",
                  index === 2 ? "hidden lg:block" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <Image
                  src={image.hoverSrc}
                  alt={image.alt}
                  fill
                  className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next images"
            className="absolute top-1/2 right-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-white shadow-[0_4px_14px_rgba(0,0,0,0.18)] transition-colors hover:bg-gold-hover sm:h-12 sm:w-12"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
              className="sm:h-[18px] sm:w-[18px]"
            >
              <path
                d="M6 3L11 8L6 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
