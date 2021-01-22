import * as React from "react";
import HomeSection from "../components/home-section";
import WhySection from "../components/why-section";
import ServicesSection from "../components/services-section";
import ContactSection from "../components/contact-section";

const IndexPage = () => {
  return (
    <>
      <HomeSection />
      <WhySection />
      <ServicesSection />
      <ContactSection />
    </>
  );
};

export default IndexPage;
