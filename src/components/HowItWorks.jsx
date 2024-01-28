import React from "react";
import Circle from "/src/assets/home/desktop/circle.svg";
import { Link } from "react-router-dom";

const HowItWorks = ({ subscribePage }) => {
  const steps = [
    {
      step: "01",
      name: "Pick your coffee",
      description:
        "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
    },
    {
      step: "02",
      name: "Choose the frequency",
      description:
        "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
    },
    {
      step: "03",
      name: "Receive and enjoy!",
      description:
        "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world -class coffees curated to provide a distinct tasting experience.",
    },
  ];

  return (
    <div
      className={`flex flex-col justify-center items-center md:items-start relative mx-auto ${
        subscribePage &&
        " bg-2C343E rounded-[10px] px-[40px] lg:px-[85px] py-[100px]"
      }`}
    >
      {!subscribePage && (
        <h1 className="text-grey text-center text-2xl font-bold leading-8 md:text-left md:mb-[80px]">
          How it works
        </h1>
      )}

      <div className="hidden md:flex items-center">
        <img src={Circle} alt="" />
        <span className="bg-pale-orange w-[250px] lg:w-[350px] h-[1px]"></span>
        <img src={Circle} alt="" />
        <span className="bg-pale-orange w-[250px] lg:w-[350px] h-[1px]"></span>
        <img src={Circle} alt="" />
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-[62px] md:gap-24">
        {steps.map((step, index) => (
          <div
            key={index}
            className="md:max-w-[285px] flex flex-col text-center md:text-left"
          >
            <h2 className="font-bold text-[72px] text-pale-orange">
              {step.step}
            </h2>
            <h3
              className={`font-bold text-[28px] md:max-w-[230px] md:text-[32px] ${
                subscribePage ? "text-white" : "text-grey-blue"
              }`}
            >
              {step.name}
            </h3>
            <p
              className={`mt-6 ${
                subscribePage ? "text-white" : "text-grey-blue"
              }`}
            >
              {step.description}
            </p>
          </div>
        ))}
      </div>
      {!subscribePage && (
        <Link to="/subscribe">
          <button className="bg-dark-cyan w-[217px]  text-light-cream font-bold px-6 py-3 rounded-md mt-11">
            Create your plan
          </button>
        </Link>
      )}
    </div>
  );
};

export default HowItWorks;
