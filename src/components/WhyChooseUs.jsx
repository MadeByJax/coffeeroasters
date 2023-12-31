import React from "react";
import coffeebean from "/src/assets/home/desktop/icon-coffee-bean.svg";
import gift from "/src/assets/home/desktop/icon-gift.svg";
import truck from "/src/assets/home/desktop/icon-truck.svg";

const WhyChooseUs = () => {
  const reasonsToChooseUs = [
    {
      img: coffeebean,
      name: "Best Quality",
      description:
        "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
    },
    {
      img: gift,
      name: "Exclusive benefits",
      description:
        "Special offers and swag when you subscribe, including 30% off your first shipment.",
    },
    {
      img: truck,
      name: "Free shipping",
      description:
        "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
    },
  ];

  return (
    <div className="px-6 mt-[120px] container relative mx-auto">
      <div className="relative h-full">
        <div className="bg-2C343E h-3/5 lg:h-4/5 rounded-lg  absolute left-0 right-0"></div>
        <div className="px-6 pt-16 relative text-center text-light-cream">
          <h2 className="text-[28px] font-bold ">Why choose us?</h2>
          <p className="mt-6 opacity-80">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>

        <div className="relative rounded-b-[10px] pt-[36px] px-6 md:px-[58px] lg:px-[85px] md:pt-[58px] flex flex-col gap-6 lg:flex-row">
          {reasonsToChooseUs.map((reason, index) => (
            <div
              key={index}
              className="bg-dark-cyan flex flex-col items-center justify-center gap-14 rounded-lg px-[33px] pt-[72px] pb-[51px] md:flex-row md:py-[41px] md:px-[70px] lg:flex-col lg:px-10 lg:py-12 lg:mb-0"
            >
              <img
                className="h-[72px] w-[72px] md:h-[56px] md:w-[56px] lg:h-[72px] lg:w-[72px] lg:mt-6"
                src={reason.img}
                alt={`Reason ${index + 1}`}
              />
              <div className="flex flex-col gap-4">
                <h1 className="text-light-cream text-center  text-2xl font-bold leading-8 md:text-left lg:text-center">
                  {reason.name}
                </h1>
                <p className="text-light-cream text-center text-[15px] leading-[25px] md:text-left lg:text-center">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
