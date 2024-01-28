import React from "react";
import Navbar from "../components/Navbar";
import SubscribeHero from "../components/SubscribeHero";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";
import Selection from "../components/Selection";

const Subscribe = () => {
  return (
    <div className="bg-light-cream">
      <div className="container mx-auto px-6 pb-[72px] ">
        <Navbar />
        <SubscribeHero />
        <div className="rounded-[10px] mt-32">
          <HowItWorks subscribePage={true} />
        </div>
        <div className="mt-32 xl:px-12">
          <Selection />
        </div>
        <div className="mt-32">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
