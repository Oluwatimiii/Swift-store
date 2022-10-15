import React, { useContext } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import CartContext from "../../store/cart-context";

const HeaderCartBtn = () => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);

  return (
    <button className="relative font-poppins" >
      <span>
        <MdOutlineShoppingCart className="w-[30px] h-[30px]" />
      </span>
      <p
        className="flex items-center justify-center absolute top-[-4px] right-[-2px] bg-black text-[13px]
       text-white rounded-full font-bold px-[2.5px] w-4 h-5"
      >
        {numberOfCartItems}
      </p>
    </button>
  );
};

export default HeaderCartBtn;
