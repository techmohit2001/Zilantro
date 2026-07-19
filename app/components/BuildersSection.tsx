import Image from "next/image";

export default function BuildersSection() {
  return (
    <section className="bg-[#F5F1E8] py-6 font-outfit lg:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
          {/* Left column: text + interior image */}
          <div className="flex flex-col justify-between gap-8 lg:gap-12">
            <div>
              <p className="mb-4 text-base text-[#706F6C] sm:text-[18px]">Who We Are?</p>
              <h2 className="mb-6 font-cormorant text-[2rem] font-semibold leading-[1.15] sm:text-4xl lg:text-[3.25rem]">
                <span className="text-charcoal">Builders.</span>{" "}
                <span className="text-gold">Not Consultants.</span>
              </h2>
              <p className="text-base leading-relaxed text-[#706F6C] sm:text-[18px]">
                Zilantro is a full-service construction company that takes
                complete ownership of every project from planning to final
                handover. Specializing in MEPF systems, civil works, and turnkey
                construction, we deliver reliable, high-quality solutions across
                India.
              </p>
              <p className="mt-5 text-base leading-relaxed text-[#706F6C] sm:text-[18px]">
                Backed by an experienced team of engineers, project managers,
                and site supervisors, we have successfully completed more than
                150 projects across residential, commercial, and industrial
                sectors. Every project is delivered on schedule, within
                specifications, and with an unwavering commitment to quality.
              </p>
            </div>

            <div className="group relative aspect-[5/3] w-full shrink-0 overflow-hidden">
              <Image
                src="/home-builder2.png"
                alt="Modern interior living room with designer chandelier"
                fill
                unoptimized
                className="object-cover transition-transform duration-600 ease-out group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right column: construction image */}
          <div className="group relative aspect-[19/20] overflow-hidden">
            <Image
              src="/home-builder1.png"
              alt="Construction site at sunset showing building skeleton"
              fill
              unoptimized
              className="object-cover transition-transform duration-600 ease-out group-hover:scale-110"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
