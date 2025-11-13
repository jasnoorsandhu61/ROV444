import ContactSection from "@/components/vision/ContactSection";
import FlightProcess from "@/components/vision/FlightProcess";
import HeroSection from "@/components/vision/HeroSection";
import TakeWork from "@/components/vision/TakeWork";
import FAQSection from "@/components/vision/VisionFaq";
import MissingSection from "@/components/vision/VisionMixing";
import WhoWeFlyWith from "@/components/vision/WhoWeFlyWith";
import { NavigationDock } from "@/components/NavDoc";


export default function Page() {
  return (
    <>
      <HeroSection />
      <WhoWeFlyWith />
      <FlightProcess />
      <TakeWork />
      <MissingSection />
      <ContactSection />
      <FAQSection />

      {/* Add the NavigationDock component here */}
      <NavigationDock />
    </>
  );
}

