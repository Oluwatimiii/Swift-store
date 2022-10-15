import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Countdown = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="bg-[#F2F2F2]">
        <div className="w-full mx-auto px-7 md:px-10 max-w-[1200px] py-4">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 justify-between px-5 py-4 font-michroma">
            <p className="md:text-[20px] text-center text-black px-5  md:border-r-[1px] border-r-[#FC55456E]">
              <span className="text-[#FC5545]">
                {counterOn && (
                  <CountUp start={0} end={20} duration={2} delay={0} />
                )}
                k+
              </span>{" "}
              Orders completed
            </p>
            <p className="md:text-[20px] text-center text-black px-5  md:border-r-[1px] border-r-[#FC55456E]">
              <span className="text-[#FC5545]">
                {counterOn && (
                  <CountUp start={0} end={40} duration={2} delay={0} />
                )}
                k+
              </span>{" "}
              Regular Visitors
            </p>
            <p className="md:text-[20px] text-center text-black pl-5">
              <span className="text-[#FC5545]">
                {counterOn && (
                  <CountUp start={0} end={15} duration={2} delay={0} />
                )}
                k+
              </span>{" "}
              Happy Customers
            </p>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Countdown;
