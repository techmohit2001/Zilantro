import Image from "next/image";

const clients = [
  { src: "/home-client1.png", alt: "Facebook" },
  { src: "/home-client4.png", alt: "Tesla", large: true },
  { src: "/home-client3.png", alt: "Amazon" },
  { src: "/home-client5.png", alt: "Walmart" },
  { src: "/home-client2.png", alt: "Universal" },
];

const marqueeClients = [...clients, ...clients];

function ClientLogo({
  src,
  alt,
  large,
}: {
  src: string;
  alt: string;
  large?: boolean;
}) {
  return (
    <div className="group flex shrink-0 items-center justify-center px-8 sm:px-10 lg:px-12">
      <Image
        src={src}
        alt={alt}
        width={large ? 260 : 180}
        height={large ? 104 : 56}
        unoptimized
        className={`h-auto w-auto max-w-full object-contain brightness-0 grayscale transition-all duration-300 ease-out group-hover:brightness-100 group-hover:grayscale-0 group-hover:saturate-150 ${
          large ? "h-16 sm:h-[5.5rem] lg:h-24" : "h-10 sm:h-12 lg:h-14"
        }`}
      />
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section id="gallery" className="bg-[#EDE8DC] pb-14 pt-4 font-outfit lg:pb-20 lg:pt-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center lg:mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Our Clients
          </p>
          <h2 className="mb-5 font-cormorant text-[2.25rem] font-semibold leading-[1.2] text-charcoal sm:text-4xl lg:text-[2.75rem]">
            Proud to work with great companies
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#706F6C] sm:text-[18px]">
            We collaborate with forward thinking organizations that value
            <br className="hidden sm:inline" />
            {" "}
            quality, reliability, & excellence
          </p>
        </div>

        <div
          className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
          aria-label="Client logos"
        >
          <div className="client-marquee-track flex items-center">
            {marqueeClients.map((client, index) => (
              <div key={`${client.alt}-${index}`} className="flex shrink-0 items-center">
                {index > 0 && (
                  <div
                    className="h-16 w-px shrink-0 bg-[#D4C9B5]"
                    aria-hidden="true"
                  />
                )}
                <ClientLogo
                  src={client.src}
                  alt={client.alt}
                  large={client.large}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
