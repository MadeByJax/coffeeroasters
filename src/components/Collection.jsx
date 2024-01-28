import React from "react";

const Collection = () => {
  return (
    <div className="relative ">
      <div className="relative  opacity-60">
        <div className="absolute h-[120px] inset-0 top-[-20px] bg-gradient-to-b from-transparent to-light-cream"></div>
        <h1 className="text-grey text-center  text-[40px] font-bold leading-[72px] md:text-[96px] lg:text-[150px]">
          our collection
        </h1>
      </div>
      <div className="mt-8 md:-mt-2 flex md:px-20 lg:px-0 relative flex-col lg:flex-row justify-center  items-center gap-12">
        <div className="flex flex-col md:flex-row lg:flex-col items-center justify-center">
          <img
            className="w-[200px] h-[150px] md:w-[255px] md:h-[193px]"
            src="assets/home/desktop/image-danche.png"
            alt=""
          />
          <div className="text-center text-grey-blue">
            <h3 className="text-[24px]  font-bold">Danche</h3>
            <p>
              Ethiopian hand-harvested blend densely packed with vibrant fruit
              notes
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col items-center justify-center">
          <img
            className="w-[200px] h-[150px]  md:w-[255px] md:h-[193px]"
            src="assets/home/desktop/image-gran-espresso.png"
            alt=""
          />
          <div className="text-center text-grey-blue">
            <h3 className="text-[24px]  font-bold">Gran Espresso</h3>
            <p>
              Light and flavorful blend with cocoa and black pepper for an
              intense experience
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col items-center justify-center">
          <img
            className="w-[200px] h-[150px]  md:w-[255px] md:h-[193px]"
            src="assets/home/desktop/image-piccollo.png"
            alt=""
          />
          <div className="text-center text-grey-blue">
            <h3 className="text-[24px]  font-bold">Piccollo</h3>
            <p>
              Mild and smooth blend featuring notes of toasted almond and dried
              cherry
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col items-center justify-center">
          <img
            className="w-[200px] h-[150px]  md:w-[255px] md:h-[193px]"
            src="assets/home/desktop/image-planalto.png"
            alt=""
          />
          <div className="text-center text-grey-blue">
            <h3 className="text-[24px]  font-bold">Planalto</h3>
            <p>
              Brazilian dark roast with rich and velvety body, and hints of
              fruits and nuts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
