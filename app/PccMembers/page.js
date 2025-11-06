import WhatWeDo from "@/components/AboutUs/WhatWeDo";
import PccMembers from "@/components/PccMembers";
import BusinessJourney from "@/components/Home/BusinessJourney";
import ContactSection from "@/components/Home/ContactSection";
import CustomHeroSection from "@/utils/CustomHeroSection";
import Ourpccmembers from "@/components/Ourpccmembers";
import React from "react";

export default function page() {
  return (
    <div>
      {/* <CustomHeroSection
        backgroundImage="/images/office-team.jpg"
        headingLines={["Meet Our Visionary Leaders"]}
        subHeadingLines={[
          "Our Board of Directors drives innovation, strategy, and excellence across all facets of our organization.",
        ]}
      /> */}
       
       <Ourpccmembers/>
       <BusinessJourney />
       {/* directors list */}
        <PccMembers />
        {/* <WhatWeDo /> */}
        <ContactSection />
    </div>
  );
}
