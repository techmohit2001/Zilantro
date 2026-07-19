import Image from "next/image";

export default function MissionVisionSection() {
  return (
    <section className="bg-white py-10 font-outfit lg:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-3 lg:grid-cols-2 lg:gap-4">
          {/* Mission */}
          <article className="relative flex min-h-[560px] flex-col overflow-hidden bg-[#F7F3EB] sm:min-h-[620px] lg:min-h-[660px]">
            <div className="h-1.5 w-full shrink-0 bg-gold" aria-hidden="true" />

            <div className="relative z-10 flex flex-1 flex-col px-7 pt-8 pb-64 sm:px-10 sm:pt-10 sm:pb-72 lg:pb-80">
              <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold sm:h-[72px] sm:w-[72px]">
                <Image
                  src="/about-mission3.png"
                  alt=""
                  width={40}
                  height={40}
                  unoptimized
                  className="h-10 w-10 object-contain sm:h-11 sm:w-11"
                />
              </span>

              <h2 className="w-fit border-b-[2.5px] border-gold pb-2.5 text-[1.75rem] font-semibold leading-none text-[#2F2F2F] sm:text-[2rem]">
                Mission
              </h2>

              <p className="mt-5 max-w-[34rem] text-[15px] leading-[1.75] text-[#4A4A4A] sm:text-base">
                To become a globally recognized leader in Design-Build
                construction, delivering innovative, sustainable, high-quality
                solutions that shape the future of the built environment. We aim
                to be the trusted partner for clients, architects, engineers, and
                developers, turning vision into expertly executed projects
                through precision, collaboration, and construction excellence
                across industries and markets worldwide.
              </p>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[250px] sm:h-[290px] lg:h-[320px]">
              <Image
                src="/about-mission2.png"
                alt=""
                fill
                unoptimized
                className="object-contain object-bottom mix-blend-multiply scale-125"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </article>

          {/* Vision */}
          <article className="relative flex min-h-[560px] flex-col overflow-hidden bg-gold sm:min-h-[620px] lg:min-h-[660px]">
            <div className="h-1.5 w-full shrink-0 bg-[#9A7839]" aria-hidden="true" />

            <div className="relative z-10 flex flex-1 flex-col px-7 pt-8 pb-64 sm:px-10 sm:pt-10 sm:pb-72 lg:pb-80">
              <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white sm:h-[72px] sm:w-[72px]">
                <Image
                  src="/about-mission4.png"
                  alt=""
                  width={40}
                  height={40}
                  unoptimized
                  className="h-10 w-10 object-contain sm:h-11 sm:w-11"
                />
              </span>

              <h2 className="w-fit border-b-[2.5px] border-white pb-2.5 text-[1.75rem] font-semibold leading-none text-white sm:text-[2rem]">
                Vision
              </h2>

              <p className="mt-5 max-w-[34rem] text-[15px] leading-[1.75] text-white/95 sm:text-base">
                We deliver innovative, efficient, high-quality construction
                solutions that meet our clients&apos; immediate goals while
                supporting their long-term success. We&apos;re committed to
                cost-effective, sustainable, and environmentally responsible
                solutions that reduce a project&apos;s impact without compromising
                design quality, functionality, or the look of every space we
                build.
              </p>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[250px] sm:h-[290px] lg:h-[320px]">
              <Image
                src="/about-mission1.png"
                alt=""
                fill
                unoptimized
                className="object-contain object-bottom mix-blend-multiply opacity-75 scale-125"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
