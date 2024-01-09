import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Commitment from "../components/Commitment";
import UncompromisingQuality from "../components/UncompromisingQuality";
import Locations from "../components/Locations";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div className="bg-light-cream pb-[72px]">
      <Navbar />
      <Hero />
      <Commitment />
      <UncompromisingQuality />
      <Locations />
      <Footer />
    </div>
  );
};

export default AboutUs;
