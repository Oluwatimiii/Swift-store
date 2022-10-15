import React, { useRef, useState } from "react";
import Input from "../UI/Input";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShoeForm = (props) => {
  const [quantityIsValid, setQuantityIsValid] = useState(true);

  const quantityInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredQuantity = quantityInputRef.current.value;
    const enteredQuantityNumber = +enteredQuantity;

    if (
      enteredQuantity.trim().length === 0 ||
      enteredQuantityNumber < 1 ||
      enteredQuantityNumber > 15
    ) {
      setQuantityIsValid(false);
      return;
    }

    props.onAddToCart(enteredQuantityNumber);
    toast.success("Added to cart", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <form className="text-right" onSubmit={submitHandler}>
      <Input
        ref={quantityInputRef}
        label="Quantity:"
        input={{
          id: "quantity_" + props.id,
          type: "number",
          min: "1",
          max: "13",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button
        type="submit"
        className="rounded bg-[#d14343] hover:bg-[#a82c21] transition-all duration-200 ease-in-out text-[13px] text-white px-3 py-1"
      >
        Add To Cart
      </button>
      {!quantityIsValid && <p>Please enter a valid quantity (1-13).</p>}
    </form>
  );
};

export default ShoeForm;
