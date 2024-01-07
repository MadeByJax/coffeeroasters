import React from "react";
import mobileImage from "/src/assets/about/mobile/image-commitment.jpg";
import desktopImage from "/src/assets/about/desktop/image-commitment.jpg";
import tabletImage from "/src/assets/about/tablet/image-commitment.jpg";

const Commitment = () => {
  return (
    <div className="px-6 container mx-auto mt-[120px]">
      <div className="flex flex-col md:flex-row gap-12 lg:px-12 items-center">
        <div className="md:w-1/2">
          <img
            className="rounded-lg hidden lg:block "
            src={desktopImage}
            alt=""
          />
          <img
            className="rounded-lg hidden md:block lg:hidden "
            src={tabletImage}
            alt=""
          />
          <img
            className="rounded-lg md:hidden w-full h-full"
            src={mobileImage}
            alt=""
          />
        </div>
        <div className="md:w-1/2 md:text-left text-grey-blue text-center flex flex-col gap-8">
          <h2 className="font-bold text-[32px]">Our commitment</h2>
          <p className="text-[15px]">
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Commitment;
