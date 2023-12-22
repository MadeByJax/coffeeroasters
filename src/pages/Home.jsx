import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Collection from "../components/Collection";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <div className="bg-light-cream">
      <Navbar />
      <Header />
      <Collection />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
