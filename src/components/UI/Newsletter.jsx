import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="bg-[#141414a2]">
      <div className="w-full mx-auto px-7 md:px-10 max-w-[1200px] py-8 md:py-14">
        <div className="flex flex-col items-center space-y-9 justify-center font-lora">
           <div className="text-center">
            <h2 className="text-semibold text-2xl md:text-5xl text-white pb-5">Join our <span className="text-[#FC5545]">Newsletter</span></h2>
            <p className="mx-auto text-white px-8 md:px-0 text-[10px] md:text-[12px] md:max-w-[450px]">Our newsletter contains various news and articles that gives you great insight about our products.<br />Subscribe by providing your email.</p>
           </div>
           <div className="flex items-center justify-between space-x-3 px-2 py-1 bg-white rounded-md w-[70%]">
            <input type="text" placeholder="Enter your email" className="bg-transparent w-full outline-none py-3" />
            <button className="text-white rounded-md px-3 py-2 bg-[#FC5545] hover:bg-[#92271d] transition-all duration-300 ease-in-out">Send</button>
           </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Newsletter;
