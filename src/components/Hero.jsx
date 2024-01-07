import React from "react";

const Hero = () => {
  return (
    <div className="px-6 container mx-auto">
      <div className="flex flex-col text-center sm:text-left rounded-lg px-6 sm:px-[86px] justify-center items-center sm:items-start bg-cover bg-center bg-no-repeat h-[500px] md:h-[600px] bg-[url('/src/assets/about/mobile/image-hero-whitecup.jpg')] sm:bg-[url('src/assets/about/desktop/image-hero-whitecup.jpg')]">
        <div className="max-w-[500px] flex flex-col gap-6">
          <h1 className="text-light-cream font-bold text-[28px] leading-10 sm:text-[48px] md:text-[40px] md:leading-[72px]">
            About Us
          </h1>
          <p className="text-light-cream opacity-80">
            Coffeeroasters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bring the perfect cup - from bean to brew - in
            every shipment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
