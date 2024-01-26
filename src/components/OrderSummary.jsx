import { useState, useEffect } from "react";

const OrderSummary = ({
  selectedOptions,
  coffeeOptions,
  handleModal,
  calculatePrice,
  isCapsuleSelected,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="p-[40px] text-white bg-2C343E rounded-xl ">
        <h2 className="opacity-50 uppercase">Order Summary</h2>

        <p className="text-[24px] font-bold mt-[8px]">
          “I drink my coffee as{" "}
          <span className="text-dark-cyan">{selectedOptions[0]?.title}</span>,
          with a{" "}
          <span className="text-dark-cyan">{selectedOptions[1]?.title} </span>{" "}
          type of bean.{" "}
          <span className="text-dark-cyan">{selectedOptions[2]?.title}</span>,{" "}
          {console.log(isCapsuleSelected) /* Add this line to log the value */}
          {!isCapsuleSelected && (
            <span className="text-dark-cyan">{selectedOptions[3]?.title}</span>
          )}{" "}
          sent to me{" "}
          <span className="text-dark-cyan">{selectedOptions[4]?.title}</span>.”
        </p>
      </div>
      <button
        onClick={(e) => {
          handleModal(), calculatePrice();
        }}
        className="bg-dark-cyan px-[30px] py-[16px] text-white text-[18px] font-bold rounded-[6px] mt-[56px]"
      >
        Create my plan!
      </button>
    </div>
  );
};

export default OrderSummary;
