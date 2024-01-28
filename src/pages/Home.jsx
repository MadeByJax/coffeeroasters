import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Collection from "../components/Collection";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-light-cream pb-[72px]">
      <div className="container mx-auto px-6">
        <Navbar />
        <Header />
        <div className="mt-32">
          <Collection />
        </div>
        <div className="mt-32">
          <WhyChooseUs />
        </div>
        <div className="mt-32">
          <HowItWorks />
        </div>
        <div className="mt-32">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
