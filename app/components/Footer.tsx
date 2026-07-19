import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "#gallery" },
  { label: "About Us", href: "/about-us" },
];

const services = [
  "Mechanical Construction",
  "Electrical Construction",
  "Plumbing Construction",
  "Interior Design",
  "Fire Protection",
  "Civil Contracting",
  "Architecture",
  "Structural Engineering",
  "BIM Services",
  "Design & Build",
  "General Contracting",
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-black font-outfit text-base text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top CTA section */}
        <div className="flex flex-col gap-8 pt-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <p className="mb-4 text-white">Why Zilantro</p>
            <h2 className="font-cormorant text-[clamp(2rem,4vw,2.75rem)] font-semibold leading-tight text-white">
              Have a project in mind?
              <br />
              <span className="text-[#B8924A]">Let&apos;s build it together.</span>
            </h2>
          </div>

          <Link
            href="/contact-us"
            className="mt-4 w-full bg-[#B8924A] px-6 py-3.5 text-center font-outfit text-base font-medium text-white transition-colors hover:bg-gold-hover sm:px-10 lg:mt-12 lg:w-auto lg:min-w-[420px] lg:px-20"
          >
            Request a Free Quote
          </Link>
        </div>

        {/* Logo + links — same row */}
        <div className="flex flex-col gap-10 border-b border-white/10 py-14 lg:flex-row lg:items-start lg:gap-16">
          <div className="shrink-0 lg:max-w-[320px]">
            <p className="mb-6 text-base leading-relaxed text-white">
              Building Dreams, Constructing Trust full scope construction
              and MEPF solutions delivered across India.
            </p>
            <div className="inline-block bg-white px-5 py-4">
              <Image
                src="/home-footer.png"
                alt="Zilantro"
                width={180}
                height={60}
                className="h-auto w-44"
              />
            </div>
          </div>

          <div className="flex flex-1 flex-wrap gap-10 sm:gap-x-12 lg:justify-between lg:gap-y-10 xl:gap-x-16">
          <div className="w-full min-w-0 sm:w-max sm:shrink-0">
            <h3 className="mb-5 font-outfit text-base font-medium text-[#B8924A] lg:whitespace-nowrap">
              Quick links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white transition-colors hover:text-white/80"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full min-w-0 sm:w-max sm:shrink-0">
            <h3 className="mb-5 font-outfit text-base font-medium text-[#B8924A] lg:whitespace-nowrap">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full min-w-0 sm:w-max sm:shrink-0">
            <h3 className="mb-5 font-outfit text-base font-medium text-[#B8924A] lg:whitespace-nowrap">
              Contact
            </h3>
            <ul className="space-y-3 text-white">
              <li>Sector 58, Gurugram</li>
              <li>
                <a
                  href="mailto:info@zilantro.ai"
                  className="text-white transition-colors hover:text-white/80"
                >
                  info@zilantro.ai
                </a>
              </li>
              <li>
                <a
                  href="tel:+13105550199"
                  className="text-white transition-colors hover:text-white/80"
                >
                  +1-310-555-0199
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full min-w-0 sm:w-max sm:shrink-0">
            <h3 className="mb-5 font-outfit text-base font-medium text-[#B8924A] lg:whitespace-nowrap">
              Get in Touch
            </h3>
            <div className="flex gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center bg-[#B8924A] text-white transition-colors hover:bg-gold-hover"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 py-6 text-sm text-white sm:flex-row sm:items-center">
          <p className="break-words">
            &copy; 2025 Zilantro Private Limited. All rights reserved.
          </p>
          <p>
            <a
              href="https://www.zilantro.ai"
              className="text-white transition-colors hover:text-white/80"
            >
              www.zilantro.ai
            </a>
            {" · "}
            <a
              href="mailto:info@zilantro.ai"
              className="text-white transition-colors hover:text-white/80"
            >
              info@zilantro.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
