import React from "react";
import Shoes from "../Shoes/Shoes";

const Products = () => {
  return (
    <div
      className="bg-[#f8f8f8] h-full py-[6rem] mx-auto"
    >
      <div className="mx-auto px-5 md:px-8 max-w-[1200px]">
        <div className="text-center font-michroma text-black mb-6 md:mb-10">
          <h1 className="font-bold text-2xl md:text-3xl tracking-widest">
            AVAILABLE <span className="text-[#FC5545]">PRODUCTS</span>
          </h1>
          <p className="px-10 text-[10px] md:text-[13px] mt-2 font-poppins">
            Our products page houses all in-stock quality products.
          </p>
        </div>

        <Shoes />
      </div>
    </div>
  );
};

export default Products;
