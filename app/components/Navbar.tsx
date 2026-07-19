"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about-us" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F4F0E8]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center leading-none">
          <Image
            src="/logo.png"
            alt="Zilantro"
            width={200}
            height={88}
            className="block h-14 w-auto"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base font-medium text-gray-600 transition-colors hover:text-charcoal"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact-us"
            className="rounded-sm bg-gold px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gold-hover"
          >
            Get a Quote
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/contact-us"
            className="rounded-sm bg-gold px-4 py-2 text-sm font-medium text-white"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center text-charcoal"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-[#E5E0D8] bg-[#F4F0E8] md:hidden">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="block py-3 text-base font-medium text-gray-600 transition-colors hover:text-charcoal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
