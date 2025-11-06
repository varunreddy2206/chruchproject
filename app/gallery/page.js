import GalleryList from "@/components/GalleryList";
import ContactSection from "@/components/Home/ContactSection";
import CustomHeroSection from "@/utils/CustomHeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VisitUsSection from "@/components/VisitUsSection";
import Ourgallery from "@/components/Ourgallery";
import React from "react";

export default function page() {
  return (
    <div>
      {/* <CustomHeroSection
        backgroundImage="/images/service-2.jpg"
        headingLines={["Our Gallery"]}
        subHeadingLines={[
          "Explore our gallery showcasing innovative projects, successful collaborations, and highlights of our work across various domains. Witness creativity and expertise in action.",
        ]}
      /> */}
      <Ourgallery/>
      <GalleryList />
      <TestimonialsSection/>
      <VisitUsSection/>
       <ContactSection />
    </div>
  );
}
