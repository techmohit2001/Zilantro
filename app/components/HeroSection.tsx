import Image from "next/image";
import Link from "next/link";

const HEADING_WORDS = ["ARCHITECTURE", "CONSTRUCTION", "INTERIOR"] as const;
const marqueeWords = [
  ...HEADING_WORDS,
  ...HEADING_WORDS,
  ...HEADING_WORDS,
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="bg-[#F4F0E8] pb-1 pt-8 font-outfit lg:pb-1 lg:pt-10"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="mb-8 lg:mb-10">
          <span className="sr-only">
            Architecture, Construction, Interior
          </span>
          <div
            className="hero-heading-marquee-wrap relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]"
            aria-hidden="true"
          >
            <div className="hero-heading-marquee-track flex w-max flex-nowrap items-center gap-[clamp(2rem,8vw,6rem)] font-outfit text-[clamp(2.25rem,11vw,9rem)] font-normal leading-none tracking-wide lg:text-[clamp(3.5rem,12vw,9rem)]">
              {marqueeWords.map((word, index) => (
                <span
                  key={`${word}-${index}`}
                  className="architecture-heading shrink-0"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </h1>

        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0">
            <p className="mb-6 max-w-xl text-base leading-[1.65] text-gray-600 sm:text-[21px] lg:max-w-none">
              Zilantro delivers end-to-end construction solutions with
              precision, accountability, and uncompromising craftsmanship. From
              critical MEPF installations to complete structural builds, we
              deliver projects made to last.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#services"
                className="bg-gold px-6 py-3 text-base font-medium text-white transition-colors hover:bg-gold-hover"
              >
                Our Services
              </Link>
              <Link
                href="#gallery"
                className="bg-gold px-6 py-3 text-base font-medium text-white transition-colors hover:bg-gold-hover"
              >
                View Our Work
              </Link>
            </div>
          </div>

          <div className="group relative aspect-[4/3] overflow-hidden">
            <Image
              src="/home-hero2.png"
              alt="Building under construction at sunset"
              fill
              className="object-cover transition-transform duration-600 ease-out group-hover:scale-110"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
