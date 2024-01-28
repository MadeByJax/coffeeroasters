import React, { useState } from "react";
import ReactDOM from "react-dom"; // Corrected import
import Logo from "/src/assets/shared/desktop/logo.svg";
import Hamburger from "/src/assets/shared/mobile/icon-hamburger.svg";
import Hamburgerclose from "/src/assets/shared/mobile/icon-close.svg";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isClosed, setIsClosed] = useState(true);

  return (
    <div className="flex justify-between items-center   py-8">
      <Link to="/">
        <img className="w-[163px] h-[18px] cursor-pointer" src={Logo} alt="" />
      </Link>
      <img
        onClick={() => {
          setIsClosed(!isClosed);
        }}
        className="w-[16px] h-[15px cursor-pointer sm:hidden"
        src={!isClosed ? Hamburgerclose : Hamburger}
        alt=""
      />
      <ul className="hidden sm:flex text-[12px] text-app-grey gap-8">
        <li className="hover:text-grey-blue cursor-pointer">
          <Link to="/">HOME</Link>
        </li>

        <li className="hover:text-grey-blue cursor-pointer">
          <Link to="/about">ABOUT US</Link>
        </li>
        <li className="hover:text-grey-blue cursor-pointer">
          <Link to="/subscribe">CREATE YOUR PLAN</Link>
        </li>
      </ul>
      {!isClosed &&
        ReactDOM.createPortal(
          <div className="sm:hidden bg-gradient-custom fixed top-0 right-0 bottom-0 left-0 flex flex-col  text-[24px] font-bold text-center  transition-all px-6 duration-500 ease-in-out">
            <div className="flex justify-between py-8">
              <Link to="/">
                <img
                  className="w-[163px] h-[18px] cursor-pointer mb-8"
                  src={Logo}
                  alt=""
                  onClick={() => {
                    setIsClosed(!isClosed);
                  }}
                />
              </Link>
              <img
                onClick={() => {
                  setIsClosed(!isClosed);
                }}
                className="w-[16px] h-[15px] cursor-pointer mb-8"
                src={!isClosed ? Hamburgerclose : Hamburger}
                alt=""
              />
            </div>
            <ul
              className="flex flex-col text-[24px] text-app-grey gap-8 "
              onClick={() => {
                setIsClosed(!isClosed);
              }}
            >
              <li className="text-grey-blue cursor-pointer hover:text-dark-cyan transition-colors duration-300">
                <Link to="/">Home</Link>
              </li>
              <li className="text-grey-blue cursor-pointer hover:text-dark-cyan transition-colors duration-300">
                <Link to="/about">About Us</Link>
              </li>
              <li className="text-grey-blue cursor-pointer whitespace-nowrap hover:text-dark-cyan transition-colors duration-300">
                <Link to="/subscribe">Create Your Plan</Link>
              </li>
            </ul>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Navbar;
