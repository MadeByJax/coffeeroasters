import React from "react";
import Navbar from "../components/Navbar";
import SubscribeHero from "../components/SubscribeHero";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";
import Selection from "../components/Selection";

const Subscribe = () => {
  return (
    <div className="pb-[72px]">
      {/* Navbar and SubscribeHero with consistent padding */}

      <div className="container mx-auto bg-light-cream px-6">
        <Navbar />
        <SubscribeHero />
      </div>

      {/* HowItWorks with consistent padding */}

      <div className=" rounded-[10px] mt-[155px] lg:px-6 lg:container mx-auto">
        <HowItWorks subscribePage={true} />
      </div>
      <div className="mt-[120px] px-6 lg:px-20 container mx-auto">
        <Selection />
      </div>
      {/* Footer with consistent padding */}
      <div className="mt-36 px-6 container mx-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Subscribe;
