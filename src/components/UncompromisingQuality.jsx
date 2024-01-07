import React from "react";
import mobileQuality from "/src/assets/about/mobile/image-quality.jpg";
import tabletQuality from "/src/assets/about/tablet/image-quality.jpg";
import desktopQuality from "/src/assets/about/desktop/image-quality.jpg";

const UncompromisingQuality = () => {
  return (
    <div className="container mx-auto px-6 mt-[198px] md:mt-[396px] lg:mt-[244px]">
      <div className="flex flex-col justify-center items-center lg:flex-row-reverse bg-2C343E rounded-[10px] px-6 md:px-12 pb-16 lg:py-[88px] gap-16">
        <img
          className="md:hidden h-full w-full object-cover object-center -mt-20 rounded-[8px]"
          src={mobileQuality}
          alt=""
        />
        <img
          className=" rounded-[8px] -mt-40 hidden md:block lg:hidden"
          src={tabletQuality}
          alt=""
        />
        <img
          className=" rounded-[8px] -mt-40 hidden lg:block"
          src={desktopQuality}
          alt=""
        />
        <div className="text-center max-w-[540px] lg:text-left text-light-cream flex flex-col  gap-6">
          <h2 className="text-[28px] lg:text-[40px] leading-[28px] lg:leading-[48px] font-bold">
            Uncompromising Quality
          </h2>
          <p className="opacity-80">
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UncompromisingQuality;
