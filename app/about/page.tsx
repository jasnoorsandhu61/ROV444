import MusicBanner from "@/components/about/MusicBanner";
import FAQSection from "@/components/about/AboutFaq";
import AgencyIntro from "@/components/about/AgencyIntro";
import ArtistBreakthrough from "@/components/about/ArtistBreakthrough";
import BookACall from "@/components/about/BookACall";
import Gallery from "@/components/about/Gallery";
import MixesSection from "@/components/about/MixesSection";
import Story from "@/components/about/Story";
import VisionSection from "@/components/about/VisionSection";
import AnimatedSection from "@/components/common/AnimatedSection";
// Import NavigationDock from the file you provided (NavDoc.tsx)
// Adjust this import path if NavDoc.tsx is located elsewhere
import { NavigationDock } from "@/components/NavDoc";

export default function Page() {
  return (
    <>
      {/* Add id="hero" wrapper for NavigationDock visibility logic */}
      <div id="hero">
        <MusicBanner />
      </div>

      <AnimatedSection>
        <VisionSection />
      </AnimatedSection>

      {/* Add id="latest-album" wrapper for the "mixes" link */}
      <div id="latest-album">
        <AnimatedSection>
          <MixesSection />
        </AnimatedSection>
      </div>

      <AnimatedSection>
        <ArtistBreakthrough />
      </AnimatedSection>

      <AnimatedSection>
        <Story />
      </AnimatedSection>

      <AnimatedSection>
        <AgencyIntro />
      </AnimatedSection>

      {/* Add id="gallery" wrapper for the "gallery" link */}
      <div id="gallery">
        <AnimatedSection>
          <Gallery />
        </AnimatedSection>
      </div>

      <AnimatedSection>
        <BookACall />
      </AnimatedSection>

      <AnimatedSection>
        <FAQSection />
      </AnimatedSection>

      {/* Add the NavigationDock component here */}
      <NavigationDock />
    </>
  );
}
