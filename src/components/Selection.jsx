import { React, useState, useEffect, useRef } from "react";
import Arrow from "/src/assets/plan/desktop/icon-arrow.svg";
import "./Selection.css";
import OrderSummary from "./OrderSummary";
import Modal from "./Modal";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Selection = () => {
  const QuestionCategories = [
    "Preferences",
    "Bean Type",
    "Quantity",
    "Grind Option",
    "Deliveries",
  ];

  const handleCheckout = () => {
    if (calculatePrice() !== null) {
      toast.success("Checkout successful!");
    }
    if (calculatePrice() === null) {
      toast.error("Please select all options before checkout");
    }
  };
  const CoffeeOptions = [
    {
      question: "How do you drink your coffee?",
      options: [
        {
          id: 1,
          title: "Capsule",
          description: "Compatible with Nespresso systems and similar brewers",
        },
        {
          id: 2,
          title: "Filter",
          description:
            "For pour over or drip methods like Aeropress, Chemex, and V60",
        },
        {
          id: 3,
          title: "Espresso",
          description:
            "Dense and finely ground beans for an intense, flavorful experience",
        },
      ],
    },
    {
      question: "What type of coffee?",
      options: [
        {
          id: 4,
          title: "Single Origin",
          description:
            "Distinct, high quality coffee from a specific family-owned farm",
        },
        {
          id: 5,
          title: "Decaf",
          description:
            "Just like regular coffee, except the caffeine has been removed",
        },
        {
          id: 6,
          title: "Blended",
          description:
            "Combination of two or three dark roasted beans of organic coffees",
        },
      ],
    },
    {
      question: "How much would you like?",
      options: [
        {
          id: 7,
          title: "250g",
          description:
            "Perfect for the solo drinker. Yields about 12 delicious cups.",
          price: {
            "Every week": 7.2,
            "Every 2 weeks": 9.6,
            "Every month": 12.0,
          },
        },
        {
          id: 8,
          title: "500g",
          description:
            "Perfect option for a couple. Yields about 40 delectable cups.",
          price: {
            "Every week": 13.0,
            "Every 2 weeks": 17.5,
            "Every month": 22.0,
          },
        },
        {
          id: 9,
          title: "1000g",
          description:
            "Perfect for offices and events. Yields about 90 delightful cups.",
          price: {
            "Every week": 22.0,
            "Every 2 weeks": 32.5,
            "Every month": 42.0,
          },
        },
      ],
    },
    {
      question: "Want us to grind them?",
      options: [
        {
          id: 10,
          title: "Whole bean",
          description: "Best choice if you cherish the full sensory experience",
        },
        {
          id: 11,
          title: "Filter",
          description:
            "For drip or pour-over coffee methods such as V60 or Aeropress",
        },
        {
          id: 12,
          title: "Cafetiére",
          description:
            "Course ground beans specially suited for french press coffee",
        },
      ],
    },
    {
      question: "How often should we deliver?",
      options: [
        {
          id: 13,
          title: "Every week",
          description:
            "$7.20 per shipment. Includes free first-class shipping.",
        },
        {
          id: 14,
          title: "Every 2 weeks",
          description: "$9.60 per shipment. Includes free priority shipping.",
        },
        {
          id: 15,
          title: "Every month",
          description: "$12.00 per shipment. Includes free priority shipping.",
        },
      ],
    },
    // Add more questions and options as needed
  ];

  const [visibleOptions, setVisibleOptions] = useState(
    Array(CoffeeOptions.length).fill(true)
  );
  const [selectedOptions, setSelectedOptions] = useState(
    Array(CoffeeOptions.length).fill({ title: "_____" })
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isCapsuleSelected, setIsCapsuleSelected] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const validateCheckout = () => {
    if (calculatePrice() !== null) {
      handleModal();
    }
  };

  const calculatePrice = () => {
    const weightOption = selectedOptions[2];
    const deliveryOption = selectedOptions[4];
    const weight = weightOption ? weightOption.title : null;
    const frequency = deliveryOption ? deliveryOption.title : null;

    // Check if weight and frequency are selected
    if (weight && frequency) {
      // Find the corresponding coffee option
      const coffeeOption = CoffeeOptions[2].options.find(
        (option) => option.title === weight
      );

      // Check if the coffee option and its prices are available
      if (coffeeOption && coffeeOption.price && coffeeOption.price[frequency]) {
        return coffeeOption.price[frequency] * 4;
      }
    }

    // Return null if any condition is not met
    return null;
  };

  const toggleOptions = (index) => {
    const newVisibleOptions = [...visibleOptions];
    newVisibleOptions[index] = !newVisibleOptions[index];
    setVisibleOptions(newVisibleOptions);
  };

  const handleOptionSelect = (categoryIndex, option) => {
    setSelectedOptions((prevSelectedOptions) => {
      const newSelectedOptions = [...prevSelectedOptions];
      newSelectedOptions[categoryIndex] = option;
      setSelectedCategory(QuestionCategories[categoryIndex]);

      if (categoryIndex === 0) {
        const isCapsule = option.title === "Capsule";
        setIsCapsuleSelected(isCapsule);
        setVisibleOptions((prevVisibleOptions) => {
          const newVisibleOptions = [...prevVisibleOptions];
          newVisibleOptions[3] = !isCapsule;
          return newVisibleOptions;
        });
      }

      return newSelectedOptions;
    });
  };

  return (
    <>
      <div className="flex flex-col xl:flex-row justify-between ">
        <ul className="hidden font-bold text-[24px] xl:flex flex-col gap-[24px]">
          {QuestionCategories.map((category, index) => (
            <a href={`#${category}`}>
              <li
                key={index}
                className={
                  category === selectedCategory ? "text-black" : "text-gray-500"
                }
                onClick={() => setSelectedCategory(category)}
              >
                <h3 className="mb-[24px]">
                  <span>{String(index + 1).padStart(2, "0")}</span> {category}
                </h3>
                <div className="h-[1px] w-full bg-black"></div>
              </li>
            </a>
          ))}
        </ul>
        <div className="flex flex-col gap-[96px] xl:max-w-[600px]">
          {CoffeeOptions.map((questionObj, categoryIndex) => (
            <div
              id={QuestionCategories[categoryIndex]}
              key={questionObj.question}
              className={`fade-in ${
                visibleOptions[categoryIndex] ? "visible" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <h2
                  className={`text-app-grey text-[24px] lg:text-[40px] font-bold ${
                    isCapsuleSelected && categoryIndex === 3
                      ? "unavailable"
                      : ""
                  }`}
                >
                  {questionObj.question}
                </h2>

                {categoryIndex !== 3 && (
                  <img
                    className={`w-[18px] h-[12px] transform ${
                      visibleOptions[categoryIndex] ? "rotate-180" : "rotate-0"
                    }`}
                    onClick={() => toggleOptions(categoryIndex)}
                    src={Arrow}
                    alt=""
                  />
                )}

                {categoryIndex === 3 && !isCapsuleSelected && (
                  <img
                    className={`w-[18px] h-[12px] transform ${
                      visibleOptions[categoryIndex] ? "rotate-180" : "rotate-0"
                    }`}
                    onClick={() => toggleOptions(categoryIndex)}
                    src={Arrow}
                    alt=""
                  />
                )}
              </div>
              {visibleOptions[categoryIndex] && (
                <div className="mt-[32px] flex flex-col  md:flex-row gap-[16px]">
                  {questionObj.options.map((option) => (
                    <div
                      key={option.id}
                      className={` cursor-pointer p-[24px] xl:w-[228px] md:h-[250px] text-grey-blue ${
                        selectedOptions[categoryIndex].id === option.id
                          ? "bg-dark-cyan text-white"
                          : "bg-app-off-white"
                      }`}
                      onClick={() => handleOptionSelect(categoryIndex, option)}
                    >
                      <h3 className="font-bold text-[24px]">{option.title}</h3>
                      <p>{option.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <OrderSummary
            selectedOptions={selectedOptions}
            CoffeeOptions={CoffeeOptions}
            handleModal={handleModal}
            calculatePrice={calculatePrice}
            isCapsuleSelected={isCapsuleSelected}
          />
        </div>
        {isModalOpen && (
          <Modal
            calculatePrice={calculatePrice}
            selectedOptions={selectedOptions}
            handleModal={handleModal}
            isCapsuleSelected={isCapsuleSelected}
            handleCheckout={handleCheckout}
            validateCheckout={validateCheckout}
          />
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default Selection;
