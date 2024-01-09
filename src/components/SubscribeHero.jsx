import React from "react";

const SubscribeHero = () => {
  return (
    <div className="">
      <div className="flex flex-col text-center md:text-left rounded-lg px-6 sm:px-[86px] justify-center items-center sm:items-start bg-cover bg-center bg-no-repeat h-[400px] md:h-[500px] bg-[url('/src/assets/plan/mobile/image-hero-blackcup.jpg')] md:bg-[url('/src/assets/plan/tablet/image-hero-blackcup.jpg')] lg:bg-[url('/src/assets/plan/desktop/image-hero-blackcup.jpg">
        <div className="max-w-[500px] flex flex-col gap-6">
          <h1 className="text-light-cream font-bold text-[40px] leading-10 sm:text-[48px] lg:text-[72px]  md:leading-[72px]">
            Create a plan
          </h1>
          <p className="text-light-cream opacity-80">
            Build a subscription plan that best fits your needs. We offer an
            assortment of the best artisan coffees from around the globe
            delivered fresh to your door.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscribeHero;
