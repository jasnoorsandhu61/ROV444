import ContactSection from "@/components/aerielPage/ContactSection";
import FlightProcess from "@/components/aerielPage/FlightProcess";
import HeroSection from "@/components/aerielPage/HeroSection";
import TakeWork from "@/components/aerielPage/TakeWork";
import FAQSection from "@/components/aerielPage/VisionFaq";
import MissingSection from "@/components/aerielPage/VisionMixing";
import WhoWeFlyWith from "@/components/aerielPage/WhoWeFlyWith";
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

