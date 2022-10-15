import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../../store/cart-context";

const Cart = () => {
  const navigate = useNavigate();

  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemover = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAdder = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };

  return (
    <div className="bg-[#f8f8f8] h-full py-[4rem] mx-auto font-lora">
      <div className="w-full bg-[#7a1a11] text-white px-7 md:px-10">
        <div className="py-3 text-center">
          <h1 className="text-2xl md:text-4xl font-bold">CART</h1>
          <p className="text-[12px] md:text-[16px] text-[#eceaeaf6] px-4 leading-4 pt-1 md:pt-3">
            Your selected products are shown here. Checkout to continue.
          </p>
        </div>
      </div>
      <div className="mx-auto px-5 md:px-6 max-w-[1250px] py-7">
        <div>
          <button
            onClick={() => navigate(-1)}
            className="rounded bg-[#d14343] hove#94261c] transition-all duration-200 ease-in-out text-white px-3 py-1"
          >
            Back
          </button>
        </div>

        <div>
          <div className="mt-10">
            {!hasItems && (
              <div className="flex items-center justify-center mx-auto flex-col space-y-4">
                <div>
                <iframe src="https://embed.lottiefiles.com/animation/4496"></iframe>
                </div>
                <h1 className="text-center text-[12px] md:text-[16px] text-[#00000] px-6 leading-4 pt-1 md:pt-3">
                  Your cart is currently empty. Visit products page to add to
                  your cart.
                </h1>
                <div className="pt-2 md:pt-3">
                  <Link
                    to="/products"
                    className="bg-[#d14343] text-[12px] md:text-[16px] hover:bg-[#94261c] font-bold transition-all duration-200 ease-in-out text-white px-3 py-2"
                  >
                    Products Page
                  </Link>
                </div>
              </div>
            )}

            {cartCtx.items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center justify-between border-y-[1px] border-[#555151] py-3 md:py-5"
              >
                <div className="flex flex-col items-center-justify-center">
                  <div className="bg-gray-100 w-[200px] h-auto border-[1px] border-[#d14343] rounded">
                    <img
                      src={item.url}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-center mt-3 space-x-3">
                    <button
                      onClick={cartItemRemover.bind(null, item.id)}
                      className="bg-[#d14343] hover:bg-[#94261c] transition-all font-bold duration-200 rounded-md ease-in-out text-white px-5"
                    >
                      -
                    </button>
                    <button
                      onClick={cartItemAdder.bind(null, item)}
                      className="bg-[#d14343] hover:bg-[#94261c] transition-all font-bold duration-200 rounded-md ease-in-out text-white px-5"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap flex-row items-center mt-4 md:mt-0 justify-center md:justify-between space-x-[2rem] lg:space-x-[3rem] md:pr-3">
                  <p className="flex flex-col font-bold lg:text-2xl items-center">
                    PRODUCT{" "}
                    <span className="font-normal text-[13px] md:text-[18px]">
                      {item.name}
                    </span>
                  </p>
                  <p className="flex flex-col font-bold lg:text-2xl items-center">
                    PRICE{" "}
                    <span className="font-normal text-[13px] md:text-[18px]">
                      &#8358;{item.price.toFixed(2)}
                    </span>
                  </p>
                  <p className="flex flex-col font-bold lg:text-2xl items-center">
                    QUANTITY{" "}
                    <span className="font-normal text-[13px] md:text-[18px]">
                      {item.quantity}
                    </span>
                  </p>
                  <p className="flex flex-col font-bold lg:text-2xl items-center pt-3 md:pt-0">
                    SUBTOTAL{" "}
                    <span className="font-normal text-[13px] md:text-[18px]">
                      &#8358;{item.price.toFixed(2) * item.quantity}
                    </span>
                  </p>
                </div>
              </div>
            ))}

            {hasItems && (
              <div className="mt-8 border-[.1px] border-[#7a7878c4] p-3 md:p-5 flex flex-col items-center justify-center space-y-3">
                <h1 className="text-2xl md:text-4xl font-bold text-black">
                  CART DETAILS
                </h1>

                <table className="border-[1px] border-[#94261c] text-center">
                  <thead>
                    <tr className="border-[1px] border-[#94261c] font-bold">
                      <td className="border-[1px] border-[#94261c] p-2">
                        Shipping Fee
                      </td>
                      <td className="border-[1px] border-[#94261c] p-2">
                        Total Amount
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="font-semibold">
                      <td className="border-[1px] border-[#94261c] p-2">
                        &#8358; 0.00
                      </td>
                      <td className="border-[1px] border-[#94261c] p-2">
                        &#8358; {totalAmount}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <Link
                  to="/cart/checkout"
                  className="bg-[#d14343] hover:bg-[#94261c] transition-all duration-200 ease-in-out text-white px-3 py-1"
                >
                  Checkout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
