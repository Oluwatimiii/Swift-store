import React, { useState } from "react";
import Polygon from "../../assets/Polygon.png";
import Shoe1 from "../../assets/Shoe1.png";
import Ratings from "../../assets/Ratings.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const [color, setColor] = useState("#FC5545");
  const [hueColor, setHueColor] = useState("orange");

  const orangeColor = () => {
    setColor("#FC5545");
    setHueColor("orange");
  };
  const blueColor = () => {
    setColor("#0396E8");
    setHueColor("blues");
  };
  const yellowColor = () => {
    setColor("#FAB239");
    setHueColor("yellow");
  };

  return (
    <div>
      <div className="bg-[#fcfcfc] h-full pt-[6rem] md:pt-[4rem] lg:pt-[8rem] pb-[7rem] mx-auto">
        <div className="w-full mx-auto px-4 md:px-10 max-w-[1200px]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-[4rem] lg:space-y-0">
            <div className="px-5 md:px-0">
              <h1 className="text-[43px] md:text-[48px] leading-none lg:text-[68px] font-michroma">
                <span className="flex items-center">
                  summer
                  <img src={Polygon} alt="/" />
                </span>
                collections
                <span className="flex items-center">
                  2022
                  <img src={Polygon} alt="/" />
                </span>
              </h1>
              <p className="text-[#666666] text-[14px] lg:text-[18px] py-5 font-medium max-w-[330px] lg:max-w-[500px]">
                Find your shoes from our various collections. Here shoes are
                endless and profit is also endless.
              </p>
              <Link
              to='/products'
                className="bg-[#FC5545] rounded-md py-2 px-8 text-white hover:bg-[#a82c21] 
               transition-all duration-200 ease-in-out"
              >
                Shop Now
              </Link>
            </div>

            <div className="relative flex flex-col lg:flex-row items-center">
              <div className="relative">
                <div
                  className={`bg-[${color}] h-[300px] w-[300px] md:h-[350px] md:w-[350px] lg:h-[390px] lg:w-[390px] rounded-full border-[20px] border-[#f5bdb998]`}
                ></div>
                <div className="absolute -top-4 right-[5px] lg:top-2 lg:right-[40px] shoe h-[360px] w-[360px] md:w-[410px] md:h-[410px] lg:w-[450px] lg:h-[450px]">
                  <img
                    src={Shoe1}
                    alt="air-jordan"
                    className={`w-full h-full object-cover ${hueColor}`}
                  />
                </div>
              </div>
              <div className="buttons flex flex-row justify-center lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2 mt-[8rem] md:mt-[4rem] p-2 border-[1px] border-black lg:ml-12 items-center">
                <div
                  onClick={orangeColor}
                  className="bg-[#FC5545] border-[2px] border-white rounded-full h-6 w-6"
                ></div>
                <div
                  onClick={blueColor}
                  className="bg-[#0396E8] border-[2px] border-white rounded-full h-6 w-6"
                ></div>
                <div
                  onClick={yellowColor}
                  className="bg-[#FAB239] border-[2px] border-white rounded-full h-6 w-6"
                ></div>
              </div>
              <div className="absolute top-[270px] lg:top-[300px] right-0 py-3 px-3 bg-[#f4f4f4a9] backdrop-blur-[45px] rounded-md">
                <div className="flex items-center space-x-2">
                  <p className="text-[#333333] text-[20px] md:text-2xl lg:text-3xl pr-4 border-r-[1px] border-r-black">
                    Nike air max
                  </p>
                  <img src={Ratings} alt="/" />
                </div>
                <div className="flex items-center pt-3">
                  <p className="text-[#FC5545] pr-6 text-[20px] md:text-2xl text-3xl">
                    $120
                  </p>
                  <button className="px-2 py-1 text-[#333333] text-[20px] md:text-2xl text-3xl border-[1px] border-[#333333] hover:bg-[#333333] hover:text-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
