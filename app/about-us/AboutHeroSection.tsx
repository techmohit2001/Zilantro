import Image from "next/image";
import Link from "next/link";

export default function AboutHeroSection() {
  return (
    <section className="bg-[#F5F1E8] py-10 font-outfit lg:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,2.35fr)] sm:gap-4 lg:gap-5">
          <div className="group relative aspect-[5/4] overflow-hidden sm:aspect-[4/3]">
            <Image
              src="/about-abouthero1.png"
              alt="Luxury interior under construction with chandelier installation"
              fill
              unoptimized
              priority
              className="object-cover transition-transform duration-600 ease-out group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 32vw"
            />
          </div>
          <div className="group relative aspect-[16/9] overflow-hidden sm:aspect-[2/1]">
            <Image
              src="/about-abouthero2.png"
              alt="Finished luxury living and dining space with crystal chandelier"
              fill
              unoptimized
              priority
              className="object-cover transition-transform duration-600 ease-out group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 68vw"
            />
            <span
              className="pointer-events-none absolute bottom-3 right-3 h-2.5 w-2.5 rotate-45 bg-[#E8E2D6] sm:bottom-4 sm:right-4"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.05fr)_minmax(0,1.05fr)] lg:gap-10 xl:gap-14">
          <div>
            <p className="mb-4 text-xs font-normal uppercase tracking-[0.16em] text-[#706F6C] sm:text-sm">
              About Zilantro
            </p>
            <h1 className="font-cormorant text-[2rem] font-semibold leading-[1.12] text-charcoal sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem]">
              We Build With Purpose,{" "}
              <span className="text-gold">Not Just Plans</span>
            </h1>
          </div>

          <div className="border-t border-gold pt-6">
            <p className="text-base leading-relaxed text-[#4A4A4A] sm:text-[17px]">
              Zilantro is a full-service Commercial Construction, Design-Build,
              and General Contracting company headquartered in Gurugram,
              delivering projects across India. We focus on MEPF systems,
              structural civil works, commercial interiors, and complete project
              execution, from the first day on-site to final handover, across
              corporate, hospitality, retail, healthcare, education, and
              multifamily sectors.
            </p>
            <p className="mt-5 text-base leading-relaxed text-[#4A4A4A] sm:text-[17px]">
              Many firms stop at planning or coordination. We don&apos;t. Our
              teams are on-site, hands-on, and accountable for every slab
              poured, every pipe run, and every wire installed. We take
              ownership of the work itself, not just the paperwork
            </p>
          </div>

          <div className="flex flex-col border-t border-gold pt-6">
            <p className="text-base leading-relaxed text-[#4A4A4A] sm:text-[17px]">
              behind it, bringing design, engineering support, procurement, and
              construction together under one team. That gives us tighter
              control over schedule, budget, and quality right from day one.
            </p>
            <p className="mt-5 text-base leading-relaxed text-[#4A4A4A] sm:text-[17px]">
              With over two decades of combined leadership experience across
              civil, structural, mechanical, electrical, and plumbing work,
              Zilantro has built a reputation on results, not promises. Our
              tagline isn&apos;t just marketing; it&apos;s how we operate every
              day: Building Dreams, Constructing Trust.
            </p>
            <Link
              href="/services"
              className="mt-8 inline-flex w-fit items-center justify-center bg-gold px-6 py-3 text-base font-medium text-white transition-colors hover:bg-gold-hover sm:text-[17px]"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
