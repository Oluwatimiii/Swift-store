import React from "react";
import { ImTwitter, ImFacebook } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="bg-[#0c0b0b]">
      <div className="w-full mx-auto px-5 md:px-12 py-6 md:py-8">
        <div className="font-poppins">
          <div className="flex flex-col md:items-start md:flex-row space-y-2 md:space-y-0 md:justify-between">
            <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-x-[6rem] md:space-y-0">
              <ul className="text-white font-medium flex flex-col space-y-2">
                <li className="text-[13px] md:text-xl">PROMOTIONS</li>
                <li className="text-[13px] md:text-xl">FIND A STORE</li>
                <li className="text-[13px] md:text-xl">SIGN UP FOR EMAIL</li>
                <li className="text-[13px] md:text-xl">BECOME A MEMBER</li>
                <li className="text-[13px] md:text-xl">SEND A FEEDBACK</li>
              </ul>

              <ul className="flex flex-col space-y-3">
                <li className="text-white font-medium text-[14px] md:text-xl">
                  GET HELP
                </li>
                <li className="text-[#b3b0b0] text-[12px]">Order Status</li>
                <li className="text-[#b3b0b0] text-[12px]">
                  Shipping and Delivery
                </li>
                <li className="text-[#b3b0b0] text-[12px]">Returns</li>
                <li className="text-[#b3b0b0] text-[12px]">Payment Options</li>
                <li className="text-[#b3b0b0] text-[12px]">Contact Us</li>
              </ul>

              <ul className="flex flex-col space-y-3">
                <li className="text-white font-medium text-[14px] md:text-xl">
                  ABOUT SWIFT
                </li>
                <li className="text-[#b3b0b0] text-[12px]">News</li>
                <li className="text-[#b3b0b0] text-[12px]">Careers</li>
                <li className="text-[#b3b0b0] text-[12px]">Investors</li>
                <li className="text-[#b3b0b0] text-[12px]">Purpose</li>
              </ul>
            </div>
            {/* ICONS */}
            <div className="flex items-center pt-6 md:pt-0 md:justify-between space-x-6">
              <ImTwitter size={26} className="icons" />
              <ImFacebook size={26} className="icons" />
              <IoLogoYoutube size={26} className="icons" />
              <GrInstagram size={26} className="icons" />
            </div>
          </div>

          <div className="text-[#b3b0b0] text-[14px] mt-[2rem] md:mt-[4rem]">
            <h2 className="text-[#b3b0b0] text-[14px] pb-2">
              Developed by
              <span className="cursor-pointer text-[#d8d5d5] pl-2 hover:text-[#fff] transition-all ease-in">
                <a href="https://github.com/Oluwatimiii" target="_blank">
                  Oke Timilehin.
                </a>
              </span>
            </h2>
            <p>&copy;2022 Swift, Inc. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
