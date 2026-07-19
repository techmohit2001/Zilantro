import Image from "next/image";
import Link from "next/link";
import { Outfit } from "next/font/google";

const outfitSemibold = Outfit({
  subsets: ["latin"],
  weight: "600",
});

const stats = [
  {
    value: "150+",
    label: "Projects Delivered",
    icon: "/home-aboutsection2.png",
  },
  {
    value: "15+",
    label: "Years on Ground",
    icon: "/home-aboutsection3.png",
  },
  {
    value: "40+",
    label: "Expert Professionals",
    icon: "/home-aboutsection4.png",
  },
  {
    value: "Globally",
    label: "Project Reach",
    icon: "/home-aboutsection5.png",
  },
  {
    value: "Globally",
    label: "Project Reach",
    icon: "/home-aboutsection5.png",
  },
];

export default function StatsAboutSection() {
  return (
    <section id="about" className="bg-[#FAF9F6] py-10 font-outfit lg:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div className="group w-full self-start">
            <Image
              src="/home-abousection1.png"
              alt="Luxurious hotel lobby with marble pillars and chandeliers"
              width={820}
              height={703}
              unoptimized
              className="block h-auto w-full object-contain transition-transform duration-600 ease-out group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col space-y-5 self-start lg:space-y-6">
            <p className="text-xs font-normal uppercase tracking-[0.16em] text-[#706F6C] sm:text-sm">
              Transforming Spaces Into Timeless Experiences
            </p>
            <h2 className="font-cormorant text-[2rem] font-semibold leading-[1.2] text-[#4A4A4A] sm:text-[2.25rem] lg:text-[2.75rem]">
              We design &amp; deliver
              <br />
              <span className="text-gold">exceptional environments</span>
            </h2>
            <p className="max-w-lg text-base font-normal leading-relaxed text-[#4A4A4A] sm:text-[17px] lg:text-[18px]">
              Every project starts with a vision and ends with a space built for
              performance, functionality, and lasting value. At Zilantro, we
              bring together engineering expertise, fresh thinking, and careful
              execution to create environments that meet your business goals and
              go beyond expectations.
            </p>
            <Link
              href="#quote"
              className="group inline-flex items-center gap-3 text-[#4A4A4A] transition-colors hover:text-gold"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#B59052] text-white transition-colors group-hover:bg-gold-hover">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 7H10.5"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7.5 4L11 7L7.5 10"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className={`${outfitSemibold.className} text-base`}>
                Ready to start your journey?
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-10 lg:mt-12">
          <div className="-mx-6 flex overflow-x-auto px-6 pb-2 [scrollbar-width:none] lg:mx-0 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
            <div className="flex min-w-full divide-x divide-[#E5E0D8]">
              {stats.map((stat, index) => (
                <div
                  key={`${stat.value}-${stat.label}-${index}`}
                  className={`flex min-w-[7.5rem] flex-1 flex-col items-start py-2 text-left sm:min-w-0 ${
                    index === 0 ? "pl-0 pr-4" : "pl-5 pr-4 sm:pl-6"
                  }`}
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-gold sm:mb-4 sm:h-14 sm:w-14">
                    <div
                      className="h-7 w-7 bg-gold sm:h-8 sm:w-8"
                      style={{
                        WebkitMaskImage: `url(${stat.icon})`,
                        maskImage: `url(${stat.icon})`,
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                      }}
                      role="presentation"
                      aria-hidden="true"
                    />
                  </div>
                  <span
                    className={`${outfitSemibold.className} text-2xl leading-none text-gold sm:text-3xl lg:text-4xl`}
                  >
                    {stat.value}
                  </span>
                  <span className="mt-2 text-xs leading-snug text-[#706F6C] sm:text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
