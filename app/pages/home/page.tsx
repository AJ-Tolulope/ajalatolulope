import React from "react";
import ContactSection from "@/app/sections/contact/page";
import TestimonialSection from "@/app/sections/testimonials/page";
import PortfolioSection from "@/app/sections/portfolios/page";
import ServicesSection from "@/app/sections/services/page";
import AboutSection from "@/app/sections/about/page";
import HeroSection from "@/app/sections/hero/page";

import "./home.css";

function HomePage() {
  return (
    <>
      <HeroSection />

      <AboutSection />

      <ServicesSection />

      <PortfolioSection />

      <TestimonialSection />

      <ContactSection />
    </>
  );
}

export default HomePage;
