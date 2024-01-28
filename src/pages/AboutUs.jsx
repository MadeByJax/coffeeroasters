import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Commitment from "../components/Commitment";
import UncompromisingQuality from "../components/UncompromisingQuality";
import Locations from "../components/Locations";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div className="bg-light-cream">
      <div className="container mx-auto px-6 pb-[72px]">
        <Navbar />
        <Hero />
        <div className="mt-32">
          <Commitment />
        </div>
        <div className="mt-[198px] md:mt-[300px]">
          <UncompromisingQuality />
        </div>
        <div className="mt-32">
          <Locations />
        </div>
        <div className="mt-32">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
