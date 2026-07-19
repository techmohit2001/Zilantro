"use client";

import { FormEvent, useState } from "react";

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

const contactDetails = [
  {
    label: "Office Address",
    value:
      "Magnum Global Park, Golf Course Ext Rd, Sector 58, Gurugram, Haryana – 122005",
  },
  {
    label: "Email",
    value: "info@Zilantro.ai",
    href: "mailto:info@zilantro.ai",
  },
  {
    label: "Website",
    value: "www.Zilantro.ai",
    href: "https://www.zilantro.ai",
  },
  {
    label: "Working Hours",
    value: "Monday – Saturday, 9 AM – 7 PM IST",
  },
];

const inputClassName =
  "w-full border border-[#E5E0D8] bg-white px-3.5 py-2.5 font-outfit text-sm text-charcoal placeholder:text-gray-400 outline-none transition-colors focus:border-gold";

const GOOGLE_SHEET_ENDPOINT =
  process.env.NEXT_PUBLIC_GOOGLE_SHEET_ENDPOINT ?? "";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");

    try {
      const formData = new FormData(form);
      await fetch(GOOGLE_SHEET_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-white py-12 font-outfit lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:items-start lg:gap-16 lg:px-8">
        <div>
          <h1 className="mb-10 font-cormorant text-[clamp(2.5rem,5vw,3.5rem)] font-semibold leading-none text-charcoal">
            Contact us
          </h1>

          <div className="space-y-8">
            {contactDetails.map((item) => (
              <div key={item.label}>
                <p className="mb-1.5 text-base text-gray-500">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-base leading-relaxed text-charcoal transition-colors hover:text-gold"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="max-w-md text-base leading-relaxed text-charcoal">
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="border border-[#EDE8E0] bg-[#F5F1EB] p-6 sm:p-8 lg:p-10">
          <h2 className="mb-2 font-outfit text-[clamp(1.75rem,3vw,2.25rem)] font-normal leading-tight text-charcoal">
            Request a Quote
          </h2>
          <p className="mb-8 text-base text-gray-500">
            We respond within 24 hours — no spam, no delays.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-1.5 block text-sm font-medium text-charcoal"
                >
                  First Name<span className="text-red-500">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className={inputClassName}
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="mb-1.5 block text-sm font-medium text-charcoal"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Enter your name"
                  className={inputClassName}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-charcoal"
              >
                Email Address<span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className={inputClassName}
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-1.5 block text-sm font-medium text-charcoal"
              >
                Phone<span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="your number"
                className={inputClassName}
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="mb-1.5 block text-sm font-medium text-charcoal"
              >
                Service Required
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  className={`${inputClassName} appearance-none pr-10`}
                >
                  <option value="" disabled>
                    select a service.........
                  </option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                <svg
                  className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-gray-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div>
              <label
                htmlFor="details"
                className="mb-1.5 block text-sm font-medium text-charcoal"
              >
                Project Details
              </label>
              <textarea
                id="details"
                name="details"
                rows={4}
                placeholder="message"
                className={`${inputClassName} resize-y`}
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="flex w-full items-center justify-center gap-2 bg-gold px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-gold-hover disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? "Sending..." : "Send Enquiry"}
              {status !== "submitting" && <span aria-hidden="true">→</span>}
            </button>

            {status === "success" && (
              <p className="text-center text-sm text-gray-600" role="status">
                Thanks — we&apos;ll get back to you within 24 hours.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-sm text-red-600" role="status">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
