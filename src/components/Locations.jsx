import React from "react";
import UK from "/assets/about/desktop/illustration-uk.svg";
import Canada from "/assets/about/desktop/illustration-canada.svg";
import Australia from "/assets/about/desktop/illustration-australia.svg";

const Locations = () => {
  return (
    <div className="">
      <h2 className="font-bold text-app-grey text-[24px] text-center md:text-left">
        Our headquarters
      </h2>
      <div className="mt-[72px] grid md:grid-cols-3 justify-center items-center gap-[80px]">
        <div className="flex text-center md:text-left flex-col items-center md:items-start">
          <img src={UK} alt="" />
          <h3 className="font-bold text-grey-blue text-[28px] md:text-[24px] lg:text-[32px] mt-[40px]">
            United Kingdom
          </h3>
          <ul className="mt-[20px]">
            <li>68 Asfordby Rd</li>
            <li>Alcaston</li>
            <li>SY6 1YA</li>
            <li>+44 1241 918425</li>
          </ul>
        </div>
        <div className="flex text-center md:text-left flex-col items-center md:items-start">
          <img src={Canada} alt="" />
          <h3 className="font-bold text-grey-blue text-[28px] md:text-[24px] lg:text-[32px] mt-[40px]">
            Canada
          </h3>
          <ul className="mt-[20px]">
            <li>1528 Eglinton Avenue</li>
            <li>Toronto</li>
            <li>Ontario M4P 1A6</li>
            <li>+1 416 485 2997</li>
          </ul>
        </div>
        <div className="flex text-center md:text-left flex-col items-center md:items-start">
          <img src={Australia} alt="" />
          <h3 className="font-bold text-grey-blue text-[28px] md:text-[24px] lg:text-[32px] mt-[40px]">
            Australia
          </h3>
          <ul className="mt-[20px]">
            <li>36 Swanston Street</li>
            <li>Kewell</li>
            <li>Victoria</li>
            <li>+61 4 9928 3629</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Locations;
