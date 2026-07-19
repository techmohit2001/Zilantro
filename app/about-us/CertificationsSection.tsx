import Image from "next/image";

const certifications = [
  {
    title: "MSME Registration",
    subtitle: "Ministry of MSME, Govt. of India",
    description:
      "Registered as Micro/Small/Medium Enterprise under the MSME Development Act",
    icon: "/about-certificate1.png",
  },
  {
    title: "ISO 9001:2015",
    subtitle: "International Standards Organization",
    description:
      "Quality Management System ensuring consistent, high-quality service delivery",
    icon: "/about-certificate2.png",
  },
  {
    title: "ESI & PF Registration",
    subtitle: "ESIC & EPFO, Govt. of India",
    description:
      "Employee State Insurance & Provident Fund registration for workforce",
    icon: "/about-certificate3.png",
  },
  {
    title: "Registered Electrical Contractor",
    subtitle: null,
    description: "Registered electrical contractor for construction projects",
    icon: "/about-certificate5.png",
  },
  {
    title: "BS EN ISO 19650",
    subtitle: "BIM Management Standards",
    description:
      "Compliance with international BIM management & information delivery standards",
    icon: "/about-certificate4.png",
  },
  {
    title: "OSHA Compliance",
    subtitle: "Occupational Safety & Health Admin.",
    description:
      "Full compliance with health & safety guidelines for all construction work",
    icon: "/about-certificate6.png",
  },
];

export default function CertificationsSection() {
  return (
    <section className="bg-white pt-4 pb-10 font-outfit lg:pt-6 lg:pb-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-12">
          <p className="mb-3 font-outfit text-xs font-normal uppercase tracking-[0.16em] text-[#706F6C] sm:text-sm">
            Our Credentials
          </p>
          <h2 className="font-cormorant text-[1.875rem] font-semibold leading-[1.15] text-charcoal sm:text-4xl lg:text-[2.75rem]">
            Certifications &amp;{" "}
            <span className="text-gold">Registrations</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-outfit text-base leading-relaxed text-[#4A4A4A] sm:text-[17px]">
            Recognized certifications and registrations that reflect our
            commitment to quality, compliance, and industry standards.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {certifications.map((item) => (
            <article
              key={item.title}
              className="flex flex-col items-center border-2 border-gold bg-[#F5F1E9] px-6 py-8 text-center sm:px-7 sm:py-9"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold sm:h-16 sm:w-16">
                <Image
                  src={item.icon}
                  alt=""
                  width={32}
                  height={32}
                  unoptimized
                  className="h-7 w-7 object-contain sm:h-8 sm:w-8"
                />
              </span>

              <span
                className="mt-5 h-0.5 w-10 bg-gold sm:mt-6"
                aria-hidden="true"
              />

              <h3 className="mt-5 font-outfit text-base font-semibold leading-snug text-charcoal sm:mt-6 sm:text-lg">
                {item.title}
              </h3>

              {item.subtitle ? (
                <p className="mt-1.5 font-outfit text-sm font-medium text-gold sm:text-[15px]">
                  {item.subtitle}
                </p>
              ) : null}

              <p className="mt-3 max-w-[18rem] font-outfit text-sm leading-relaxed text-[#4A4A4A] sm:text-[15px]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
