import Testimonials from "@/components/AboutUs/Testimonials";
import WhatWeDo from "@/components/AboutUs/WhatWeDo";
import BusinessJourney from "@/components/Home/BusinessJourney";
import ContactSection from "@/components/Home/ContactSection";
import TeamSection from "@/components/Home/TeamSection";
import CustomHeroSection from "@/utils/CustomHeroSection";
import Homepage from "@/components/Home/Homepage";
import Homepage2 from "@/components/Home/Homepage2";
import ChurchTimings from "@/components/ChurchTimings";
import HomepageEvent from "@/components/HomepageEvent";

import React from "react";

export default function page() {
  return (
    <div>
      {/* <CustomHeroSection
        backgroundImage="/images/office-team.jpg"
        headingLines={[
          "Empowering Businesses Globally",
        ]}
        subHeadingLines={[
          "RoboOnline delivers cutting-edge software, AI, and IT services that drive growth.",
        ]}
      /> */}
      <Homepage/>
      <BusinessJourney />
      <Homepage2/>
      <ChurchTimings/>
      <HomepageEvent/>
      
      {/* what wwe do */}
      {/* <WhatWeDo /> */}
      <TeamSection />
      <Testimonials />
      {/* <ContactSection /> */}
    </div>
  );
}
