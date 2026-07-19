import AboutHeroSection from "./AboutHeroSection";
import MissionVisionSection from "./MissionVisionSection";
import CertificationsSection from "./CertificationsSection";
import TeamSection from "./TeamSection";

export const metadata = {
  title: "About Us — Zilantro",
  description:
    "We build with purpose, not just plans. Learn about Zilantro's mission, vision, certifications, and the people who make it happen.",
};

export default function AboutUsPage() {
  return (
    <>
      <AboutHeroSection />
      <MissionVisionSection />
      <CertificationsSection />
      <TeamSection />
    </>
  );
}
