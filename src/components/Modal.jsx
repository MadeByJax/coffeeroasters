import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ handleModal, calculatePrice, selectedOptions }) => {
  return ReactDOM.createPortal(
    <div
      className=" fixed top-0 px-6 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleModal}
    >
      <div className="rounded max-w-[540px]">
        <div className="bg-grey-blue p-[24px] lg:px-[56px] lg:py-[48px]">
          <h2 className="text-white text-[28px] lg:text-[40px] font-bold">
            Order Summary
          </h2>
        </div>
        <div className="bg-light-cream p-[24px] lg:p-[56px]">
          <p className="text-[24px] font-bold text-app-grey">
            “I drink my coffee as{" "}
            <span className="text-dark-cyan">{selectedOptions[0]?.title}</span>,
            with a{" "}
            <span className="text-dark-cyan">{selectedOptions[1]?.title}</span>{" "}
            type of bean.{" "}
            <span className="text-dark-cyan">{selectedOptions[2]?.title}</span>,{" "}
            <span className="text-dark-cyan">{selectedOptions[3]?.title}</span>,{" "}
            sent to me{" "}
            <span className="text-dark-cyan">{selectedOptions[4]?.title}</span>
            .”
          </p>
          <p className="mt-2 text-grey-blue">
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.{" "}
          </p>
          <div className="hidden lg:flex items-center justify-between gap-[13px] mt-[47px]">
            <p className="text-[32px] font-bold">
              ${calculatePrice()}.00 / mo{" "}
            </p>
            <button
              className="bg-dark-cyan  text-white px-[64px] py-[15px] rounded text-[18px] font-bold hover:bg-blue-700"
              onClick={(e) => {
                e.stopPropagation();
                handleModal();
              }}
            >
              Checkout
            </button>
          </div>

          <button
            className="bg-dark-cyan w-full lg:hidden text-white px-[30px] py-[15px] mt-4 rounded text-[18px] font-bold hover:bg-blue-700"
            onClick={(e) => {
              e.stopPropagation();
              handleModal();
            }}
          >
            ${calculatePrice()}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
