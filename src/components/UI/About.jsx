import React, { useState } from "react";
import Image1 from "../../assets/gallery15.webp";
import { IoChevronDown } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";

const dataCollection = [
  {
    question: "Swift's Efficiency",
    answer:
      "We provide a great service in multiple aspects to give our customers an awesome satisfaction.",
  },
  {
    question: "Physical Stores",
    answer:
      "Asides from our online stores, swift has multiple licensed walk-in stores all around to world, to provide swift access to our products",
  },
  {
    question: "Products Availability",
    answer:
      "We provide daily updates on available products, to make our customers well informed.",
  },
  {
    question: "Customers Satisfaction",
    answer:
      "Our efficient services as stated gives you a great satisfaction. Shop with swift today.",
  },
];

const About = () => {
  const [accordion, setAccordion] = useState(-1);

  function toggleAccordion(index) {
    if (index === accordion) {
      setAccordion(-1);
      return;
    }
    setAccordion(index);
  }

  return (
    <div className="bg-[#fdfcfc] h-full mx-auto py-[5rem] font-poppins">
      <div className="mx-auto px-6 md:px-7 max-w-[1200px]">
        <div
          className="flex flex-col items-center md:items-stretch md:flex-row justify-center md:justify-between"
        >
          <div className="overflow-hidden rounded-md shadow-lg max-h-[300px] max-w-[230px] md:max-w-[40%] md:max-h-[370px] lg:max-w-[450px] lg:max-h-[470px]">
            <img
              src={Image1}
              alt="A shoe image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="pt-[3.5rem] md:pt-0">
            <div className="flex items-center space-x-2 md:space-x-5">
              <div className="h-[1px] w-[30px] md:w-[75px] bg-[#FC554575] "></div>
              <h1 className="text-[#1E1E1E] text-[14px] lg:text-xl">
                WHY CHOOSE
                <span className="text-[#FC5545] pl-1 md:pl-2">SWIFT</span>?
              </h1>
            </div>
            <h1 className="font-semibold pt-2 text-[14px] lg:text-2xl">
              A leading nike retail store.
            </h1>
            <p className="md:max-w-[370px] lg:max-w-[450px] py-5 text-[14px] lg:text-[16px] leading-[1.9rem]">
              Shop great quality and perfect nike products. Our world-class and
              top notch services provides all answers to make your daily life
              activities awesome.
            </p>

            <div className="lg:ml-4 mt-3">
              <div className="w-full flex flex-col space-y-5">
                {dataCollection.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => toggleAccordion(index)}
                    className={`w-full flex flex-col items-start px-3 transition-all duration-300 ease-in-out ${
                      accordion === index &&
                      "bg-[#fffefe] rounded-md shadow-sm shadow-gray-300 py-3"
                    }`}
                  >
                    <div className="flex items-center space-x-4 pb-2">
                      <div>
                        {accordion === index ? (
                          <>
                            <span>
                              <IoChevronDown
                                size={20}
                                className="p-1 border-[1px] border-[#FC5545] cursor-pointer rounded-full"
                                color="#FC5545"
                              />
                            </span>
                          </>
                        ) : (
                          <>
                            <span>
                              <IoChevronForward
                                size={20}
                                className="p-1 border-[1px] border-[#1E1E1E] cursor-pointer rounded-full"
                                color="#1E1E1E"
                              />
                            </span>
                          </>
                        )}
                      </div>

                      <h2
                        className={`
                          ${
                            accordion === index &&
                            "font-semibold text-15px lg:text-xl text-[#FC5545]"
                          }
                           cursor-pointer font-semibold text-15px lg:text-xl
                        `}
                      >
                        {item.question}
                      </h2>
                    </div>
                    <div
                      className="md:max-w-[350px] lg:max-w-[400px] transition-all duration-300 ease-in-out"
                    >
                      <p
                        className={
                          accordion === index
                            ? "block pl-[1.7rem] transition-all duration-300 ease-in-out md:pl-[2.4rem] lg:pl-[2.8rem] text-[13px] lg:text-[14px]"
                            : "hidden"
                        }
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
