import DigitalStage from "@/components/home/DigitalStage";
import HomeBanner from "@/components/home/HomeBanner";
import WhoWeBuildFor from "@/components/home/WhoWeBuildFor";
import WorkSection from "../../components/home/WorkSection";
import HowWeWorkSection from "@/components/home/HowWeWorkSection";
import FAQSection from "@/components/home/FAQSection";
import WhatMakesUsDifferent from "@/components/home/WhatMakesUsDifferent";
import HustleSection from "@/components/home/HustleSection";
import AnimatedSection from "@/components/common/AnimatedSection";
import BookACall from "@/components/home/BookACall";
import { NavigationDock } from "@/components/NavDoc";

export default function Page() {
  return (
    <>
      {/* Added id="home" for the NavDoc link */}
      <div id="home">
        <HomeBanner />
      </div>

      <AnimatedSection>
        <DigitalStage />
      </AnimatedSection>

      {/* Added id="gallery" for the NavDoc link */}
      <AnimatedSection id="gallery">
        <WorkSection />
      </AnimatedSection>

      <AnimatedSection>
        <WhoWeBuildFor />
      </AnimatedSection>

      <AnimatedSection>
        <HowWeWorkSection />
      </AnimatedSection>

      <AnimatedSection>
        <FAQSection />
      </AnimatedSection>

      <AnimatedSection>
        <WhatMakesUsDifferent />
      </AnimatedSection>

      <AnimatedSection>
        <HustleSection />
      </AnimatedSection>

      <AnimatedSection>
        <BookACall />
      </AnimatedSection>

      {/* Add the NavigationDock component here */}
      <NavigationDock />
    </>
  );
}
