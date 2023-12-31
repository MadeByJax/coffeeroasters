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
      <Navbar />
      <Header />
      <Collection />
      <WhyChooseUs />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Home;
