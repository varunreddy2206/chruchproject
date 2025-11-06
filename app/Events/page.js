import ContactSection from "@/components/Home/ContactSection";
import FaqSection from "@/components/Home/FaqSection";
import ServicesFinal from "@/components/Events/ServicesFinal";
import CustomHeroSection from "@/utils/CustomHeroSection";
import EventsList from "@/components/Events/Events";
import Ourevents from "@/components/Events/Ourevents";
import React from "react";

export default function page() {
  return (
    <div>
      {/* <CustomHeroSection
        backgroundImage="/images/service-2.jpg"
        headingLines={["Our Services, Your Growth"]}
        subHeadingLines={[
          "From AI-driven solutions to enterprise software and IT consulting, RoboOnline delivers reliable and innovative services tailored to your business needs.",
        ]}
      /> */}
      {/* <ServicesFinal/>
      <ContactSection />
      <FaqSection /> */}
      <Ourevents/>
      <EventsList/>
    </div>
  );
}
