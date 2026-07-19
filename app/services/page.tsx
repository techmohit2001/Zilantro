import ServicesHeroSection from "./ServicesHeroSection";
import ServiceCardsSection from "./ServiceCardsSection";
import ClientsSection from "./ClientsSection";

export const metadata = {
  title: "Services — Zilantro",
  description:
    "Complete construction services built on quality, precision, reliability, and excellence — from mechanical and electrical to plumbing.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <ServiceCardsSection />
      <ClientsSection />
    </>
  );
}
