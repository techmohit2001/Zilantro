import SitePhotosFilmsSection from "./SitePhotosFilmsSection";
import PalmsPebblesSection from "./PalmsPebblesSection";
import DraftingBuddiesSection from "./DraftingBuddiesSection";

export const metadata = {
  title: "Gallery — Zilantro",
  description:
    "Explore our archive of project photography, visual highlights, and video presentations.",
};

export default function GalleryPage() {
  return (
    <>
      <SitePhotosFilmsSection />
      <PalmsPebblesSection />
      <DraftingBuddiesSection />
    </>
  );
}
