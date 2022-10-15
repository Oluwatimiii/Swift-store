import React, { useEffect, useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import Client1 from "../../assets/refe1.jpg";
import Client2 from "../../assets/refe2.jpg";
import Client3 from "../../assets/rema1.jpg";
import Client4 from "../../assets/refe3.jpg";
import Client5 from "../../assets/rema3.jpg";
import Client6 from "../../assets/refe4.jpg";

const CLIENT_DATA = [
  {
    id: 1,
    img_url: Client3,
    name: "Bradley Harry",
    job: "Business Administrator",
    review: "A lovely brand. I got a great value from the shoes i purchased.",
  },
  {
    id: 2,
    img_url: Client6,
    name: "Jessica Agnes",
    job: "Model",
    review: "Loved everything about the packaging, quality is top notch also.",
  },
  {
    id: 3,
    img_url: Client5,
    name: "Josh Vegna",
    job: "Product Designer",
    review: "Incredible services and amazing customer support.",
  },
  {
    id: 4,
    img_url: Client2,
    name: "Stella Wesley",
    job: "Nurse",
    review: "I totally got a great value for my money. The quality is superb.",
  },
  {
    id: 5,
    img_url: Client1,
    name: "Biley Wells",
    job: "Software Eng.",
    review: "Incredible services and amazing customer support.",
  },
  {
    id: 6,
    img_url: Client4,
    name: "Diane Stella",
    job: "Business Administrator",
    review: "Incredible services and amazing customer support.",
  },
];

const ClientsSay = () => {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState();

  useEffect(() => {
    const windowWidth =
      window.innerWidth > 0 ? window.innerWidth : screen.width;
    setWidth(windowWidth);
  }),
    [innerWidth];

  let testLength;

  if (width >= 768) {
    testLength = 2;
  } else {
    testLength = 1;
  }

  const prevTestBtn = () => {
    setIndex((prev) => prev - 1);

    if (index <= 0) {
      setIndex(CLIENT_DATA.length - testLength);
    }
  };

  const nextTestBtn = () => {
    setIndex((prev) => prev + 1);

    if (index >= CLIENT_DATA.length - testLength) {
      setIndex(0);
    }
  };

  return (
    <div className="bg-[#F2F2F2]">
      <div className="client">
        <div className="w-full mx-auto px-7 md:px-10 max-w-[1200px] py-7">
          <div className="flex flex-col items-center justify-center space-y-7">
            <div className="text-center">
              <h1 className="text-semibold text-black text-xl md:text-3xl pb-8 font-michroma">
                What our <span className="text-[#FC5545]">clients say</span>
                <br /> about us
              </h1>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between font-lora w-full px-3">
              {CLIENT_DATA.slice(index, index + testLength).map((data) => (
                <div
                  className="bg-white rounded-md overflow-hidden shadow-lg border-[1px] border-[#e0b3b37e] w-[280px] md:w-[320px] lg:w-[440px]"
                  key={data.id}
                >
                  <div className="flex justify-between space-x-3">
                    {/* IMAGE */}
                    <div className="w-[40%] h-[130px]">
                      <img
                        src={data.img_url}
                        alt={data.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center mx-auto">
                      {/* REVIEW */}
                      <div>
                        <p className="text-[10px] lg:text-sm px-3 font-bold lg:max-w-[300px] pt-7">{`"${data.review}"`}</p>
                      </div>
                      {/* TITLE */}
                      <div className="pt-7 lg:pt-3 text-center">
                        <h3 className="text-[9px] lg:text-sm font-semibold">-{data.name}</h3>
                        <p className="text-[9px] lg:text-[12px] text-[#FC5545]">{data.job}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="pt-6 flex items-center space-x-2">
              <button onClick={prevTestBtn}>
                <IoChevronBack
                  size={20}
                  className="p-1 border-[1px] border-[#FC5545] rounded-full"
                  color="#FC5545"
                />
              </button>
              <button onClick={nextTestBtn}>
                <IoChevronForward
                  size={20}
                  className="p-1 border-[1px] border-[#1E1E1E] rounded-full"
                  color="#1E1E1E"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsSay;
