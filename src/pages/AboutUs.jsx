import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Commitment from "../components/Commitment";
import UncompromisingQuality from "../components/UncompromisingQuality";
import Locations from "../components/Locations";

const AboutUs = () => {
  return (
    <div className="bg-light-cream pb-[72px]">
      <Navbar />
      <Hero />
      <Commitment />
      <UncompromisingQuality />
      <Locations />
    </div>
  );
};

export default AboutUs;
