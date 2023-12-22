import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Collection from "../components/Collection";

const Home = () => {
  return (
    <div className="bg-light-cream">
      <Navbar />
      <Header />
      <Collection />
    </div>
  );
};

export default Home;
