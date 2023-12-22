import React, { useState } from "react";
import Logo from "/src/assets/shared/desktop/logo.svg";
import Hamburger from "/src/assets/shared/mobile/icon-hamburger.svg";
import Hamburgerclose from "/src/assets/shared/mobile/icon-close.svg";

const Navbar = () => {
  const [isClosed, setIsClosed] = useState(true);

  return (
    <div className="flex justify-between items-center container mx-auto px-6 py-8">
      <img className="w-[163px] h-[18px]" src={Logo} alt="" />
      <img
        onClick={() => {
          setIsClosed(!isClosed);
        }}
        className="w-[16px] h-[15px cursor-pointer sm:hidden"
        src={!isClosed ? Hamburgerclose : Hamburger}
        alt=""
      />
      <ul className="hidden sm:flex text-[12px] text-app-grey gap-8">
        <li className="hover:text-grey-blue cursor-pointer">HOME</li>
        <li className="hover:text-grey-blue cursor-pointer">ABOUT US</li>
        <li className="hover:text-grey-blue cursor-pointer">
          CREATE YOUR PLAN
        </li>
      </ul>
      {!isClosed && (
        <ul className="sm:hidden fixed inset-0 top-28 flex flex-col items-center text-[24px] font-bold text-center gap-8 bg-white">
          <li className="text-grey-blue cursor-pointer">HOME</li>
          <li className="text-grey-blue cursor-pointer">ABOUT US</li>
          <li className="text-grey-blue cursor-pointer whitespace-nowrap">
            CREATE YOUR PLAN
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
