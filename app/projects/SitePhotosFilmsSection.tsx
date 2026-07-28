import Image from "next/image";
import Link from "next/link";

const images = [
  {
    src: "/gallery-sitephoto7.png",
    hoverSrc: "/gallery-sitephoto1.png",
    alt: "Interior with circular wall feature",
  },
  {
    src: "/gallery-sitephoto8.png",
    hoverSrc: "/gallery-sitephoto2.png",
    alt: "Arched wall feature during renovation",
  },
  {
    src: "/gallery-sitephoto9.png",
    hoverSrc: "/gallery-sitephoto3.png",
    alt: "Tiled interior with exposed plumbing",
  },
  {
    src: "/gallery-sitephoto10.png",
    hoverSrc: "/gallery-sitephoto4.png",
    alt: "Kitchen cabinetry installation in progress",
  },
  {
    src: "/gallery-sitephoto11.png",
    hoverSrc: "/gallery-sitephoto5.png",
    alt: "Room under construction with exposed wiring",
  },
  {
    src: "/gallery-sitephoto12.png",
    hoverSrc: "/gallery-sitephoto6.png",
    alt: "Interior renovation with metal framing",
  },
];

export default function SitePhotosFilmsSection() {
  return (
    <section
      className="box-border border-[12px] border-white py-6 font-outfit sm:border-[16px] sm:py-8 lg:border-[25px] lg:py-12"
      style={{
        background:
          "linear-gradient(83.23deg, #F4F0E8 47.32%, rgba(184, 146, 74, 0.5) 116.58%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-start justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end sm:gap-6">
          <div className="min-w-0 w-full sm:w-auto">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-[#4A4A4A]">
              Ready to get started?
            </p>
            <h2 className="mb-3 font-cormorant text-[1.875rem] font-semibold leading-[1.15] text-charcoal sm:text-4xl lg:text-[2.75rem]">
              Our Interior Projects In{" "}
              <span className="text-gold">India</span>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-[#4A4A4A] sm:whitespace-nowrap sm:text-[18px]">
              Explore our archive of project photography, visual highlights,
              &amp; video presentations
            </p>
          </div>
          <Link
            href="/#services"
            className="inline-flex w-full shrink-0 items-center justify-center bg-gold px-6 py-2.5 text-base font-medium text-white transition-colors hover:bg-gold-hover sm:w-auto sm:text-[18px]"
          >
            See All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <div
              key={image.src}
              className="group relative aspect-[4/3] overflow-hidden border border-white sm:border-2"
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
      </div>
    </section>
  );
}
