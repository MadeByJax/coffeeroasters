import React from "react";

const Header = () => {
  return (
    <div className="px-6 container mx-auto">
      <div className="flex flex-col text-center sm:text-left rounded-lg px-6 sm:px-[86px] justify-center items-center sm:items-start bg-cover bg-center bg-no-repeat h-[500px] md:h-[600px] bg-[url('src/assets/home/mobile/image-hero-coffeepress.jpg')] sm:bg-[url('src/assets/home/desktop/image-hero-coffeepress.jpg')]">
        <div className="max-w-[500px] flex flex-col gap-6">
          <h1 className="text-light-cream font-bold text-[40px] leading-10 sm:text-[48px] md:text-[72px] md:leading-[72px]">
            Great coffee made simple.
          </h1>
          <p className="text-light-cream opacity-80">
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <button className="bg-dark-cyan text-light-cream font-bold px-6 py-3 rounded-md md:w-1/2">
            Create your plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
