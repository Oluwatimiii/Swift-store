import React, { useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../store/cart-context";
import { Puff } from "react-loader-spinner";

const isEmpty = (value) => value.trim() === "";
const isEmail = (value) => value.trim().includes("@");

const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const [formValidity, setFormValidity] = useState({
    firstName: true,
    lastName: true,
    email: true,
    address: true,
    city: true,
    country: true,
  });

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const addressInputRef = useRef();
  const cityInputRef = useRef();
  const countryInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredCountry = countryInputRef.current.value;

    const enteredFirstNameIsValid = !isEmpty(enteredFirstName);
    const enteredLastNameIsValid = !isEmpty(enteredLastName);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredCountryIsValid = !isEmpty(enteredCountry);
    const enteredEmailIsValid = isEmail(enteredEmail);

    setFormValidity({
      firstName: enteredFirstNameIsValid,
      lastName: enteredLastNameIsValid,
      email: enteredEmailIsValid,
      address: enteredAddressIsValid,
      city: enteredCityIsValid,
      country: enteredCountryIsValid,
    });

    const submitOrderHandler = async (userData) => {
      setIsSubmitting(true);
      await fetch(
        "https://e-commerce-7733b-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify({
            user: userData,
            orderedItems: cartCtx.items,
          }),
        }
      );
      setIsSubmitting(false);
      setDidSubmit(true);
      cartCtx.clearCart();
    };

    const formIsValid =
      enteredFirstNameIsValid &&
      enteredCityIsValid &&
      enteredEmailIsValid &&
      enteredLastNameIsValid &&
      enteredAddressIsValid &&
      enteredCountryIsValid;

    if (!formIsValid) {
      return;
    }

    submitOrderHandler({
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      address: enteredAddress,
      city: enteredCity,
      country: enteredCountry,
    });
  };

  const checkOutContent = (
    <React.Fragment>
      <form onSubmit={confirmHandler}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 content-center">
          <div className="flex flex-col space-y-2">
            <label htmlFor="firstname" className="font-bold">
              First Name *
            </label>
            <input
              ref={firstNameInputRef}
              type="text"
              id="firstname"
              className={`input-btn ${
                !formValidity.firstName ? "bg-red-100" : ""
              }`}
            />
            {!formValidity.firstName && (
              <p className="text-red-900 font-semibold font-lora text-[12px]">
                Please enter a valid first name.
              </p>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="lastname" className="font-bold">
              Last Name *
            </label>
            <input
              ref={lastNameInputRef}
              type="text"
              id="lastname"
              className={`input-btn ${
                !formValidity.lastName ? "bg-red-100" : ""
              }`}
            />
            {!formValidity.lastName && (
              <p className="text-red-900 font-semibold font-lora text-[12px]">
                Please enter a valid last name.
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col space-y-2 mt-3">
          <label htmlFor="email" className="font-bold">
            Email Address *
          </label>
          <input
            ref={emailInputRef}
            type="email"
            id="email"
            className={`input-btn ${!formValidity.email ? "bg-red-100" : ""}`}
          />
          {!formValidity.email && (
            <p className="text-red-900 font-semibold font-lora text-[12px]">
              Please enter a valid email.
            </p>
          )}
        </div>
        <div className="flex flex-col space-y-2 mt-3">
          <label htmlFor="address" className="font-bold">
            Street Address *
          </label>
          <input
            ref={addressInputRef}
            type="text"
            id="address"
            className={`input-btn ${!formValidity.address ? "bg-red-100" : ""}`}
          />
          {!formValidity.address && (
            <p className="text-red-900 font-semibold font-lora text-[12px]">
              Please enter a address.
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 content-center">
          <div className="flex flex-col space-y-2 mt-3">
            <label htmlFor="city" className="font-bold">
              Town / City *
            </label>
            <input
              ref={cityInputRef}
              type="text"
              id="city"
              className={`input-btn ${!formValidity.city ? "bg-red-100" : ""}`}
            />
            {!formValidity.city && (
              <p className="text-red-900 font-semibold font-lora text-[12px]">
                Please enter a valid city.
              </p>
            )}
          </div>
          <div className="flex flex-col space-y-2 mt-3">
            <label htmlFor="country" className="font-bold">
              State / Country *
            </label>
            <input
              ref={countryInputRef}
              type="text"
              id="country"
              className={`input-btn ${
                !formValidity.country ? "bg-red-100" : ""
              }`}
            />
            {!formValidity.country && (
              <p className="text-red-900 font-semibold font-lora text-[12px]">
                Please enter a valid country.
              </p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#9e1616] hover:bg-[#94261c] w-full transition-all duration-200 ease-in-out
               text-white px-3 py-2 mt-6"
        >
          CONFIRM ORDER
        </button>
      </form>
    </React.Fragment>
  );

  const isSubmittingModalContent = (
    <div>
      <section className="flex items-center justify-center mt-[5rem] mb-[8rem]">
        <Puff
          height="80"
          width="80"
          radius={1}
          color="#df4b3e"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        <h1 className="text-xl md:text-3xl mt-6 font-bold">
          Processing orders...
        </h1>
      </section>
    </div>
  );

  const didSubmitModalContent = (
    <div className="flex flex-col items-center justify-center mt-[1rem] mb-[4rem] font-poppins">
      <div className="text-center flex flex-col items-center mb-4">
        <div>
        <iframe src="https://embed.lottiefiles.com/animation/79952"></iframe>
        </div>

        <h1 className="text-1xl md:text-3xl mt-6 font-bold text-center px-4 pb-2">
          Order successful.
        </h1>
        <p className="text-sm md:text[16px] px-10">
          A summary of your order will be sent to your email.
        </p>
      </div>

      <div className="flex items-center justify-center space-x-4">
        <Link
          to="/products"
          className="rounded bg-[#d14343] hover:bg-[#94261c] transition-all duration-200 ease-in-out text-white px-3 py-1"
        >
          Shop More
        </Link>
        <Link
          to="/"
          className="rounded bg-[#d14343] hover:bg-[#94261c] transition-all duration-200 ease-in-out text-white px-3 py-1"
        >
          Home Page
        </Link>
      </div>
    </div>
  );

  return (
    <div className="bg-[#f8f8f8] pt-[4rem] mx-auto pb-[3rem]">
      <div className="w-full bg-[#881a10] text-white px-7 md:px-10">
        <div className="py-3 text-center font-poppins">
          <h1 className="text-2xl md:text-4xl font-bold">CHECKOUT</h1>
          <p className="text-[13px] md:text-[16px] text-[#eceaeaf6] pt-1 md:pt-3">
            Checkout and confirm your order details.
          </p>
        </div>
      </div>
      <div className="mx-auto px-5 md:px-6 max-w-[1200px] py-7">
        <div className="font-lora">
          {!isSubmitting && !didSubmit && checkOutContent}
          {isSubmitting && isSubmittingModalContent}
          {didSubmit && !isSubmitting && didSubmitModalContent}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
