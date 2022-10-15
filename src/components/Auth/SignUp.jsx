import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";

const SignUp = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorValue, setErrorValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmailValue(e.target.value);
  };

  const handlerPassword = (e) => {
    setPasswordValue(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDr1EWrfQlWeI07dhtp2EVkKdW3pQsOtOk",
      {
        method: "POST",
        body: JSON.stringify({
          email: emailValue,
          password: passwordValue,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      setIsLoading(false);
      if (res.ok) {
        navigate("/login")
      } else {
        return res.json().then((data) => {
          let errorMessage = "Authentication Failed";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          setErrorValue(errorMessage);
          console.log(errorMessage);
        });
      }
    });
  };

  return (
    <div className="bg-[#700a31] h-screen flex flex-col items-center justify-center font-poppins pb-[3rem]">
      <div className="pt-[7.6rem] mx-auto px-7 md:px-10">
        <div className="rounded bg-white max-w-[330px] md:max-w-full md:w-[400px] px-8 py-11 mx-auto">
          <h1 className="font-bold text-3xl">Just Do It!</h1>
          <p className="text-[12px] text-gray-500 pt-2">
            Sign up on to order a perfect footwear.
          </p>
          <div className="pt-5">
            <form onSubmit={formHandler}>
              {errorValue && (
                <p className="text-red-600 text-[11px] bg-red-100 p-2 rounded mb-2">
                  {errorValue}
                </p>
              )}
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-sm">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  className="border-[1px] border-gray-400 rounded p-[5px] placeholder:text-[12px] outline-none focus:border-[#770f38]"
                  onChange={handleEmail}
                  placeholder="name@gmail.com"
                />
              </div>
              <div className="flex flex-col space-y-2 mt-5">
                <label htmlFor="password" className="text-sm">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  className="border-[1px] border-gray-400 rounded p-[5px] placeholder:text-[12px] outline-none focus:border-[#770f38]"
                  onChange={handlerPassword}
                  placeholder="password"
                />
              </div>
              {!isLoading && (
                <div
                  className="mt-5 flex items-center justify-center"
                >
                  <button className="text-white w-full py-2 bg-[#770f38] rounded-md
                 hover:bg-[#580a29] transition-all duration-300 ease-in-out">Create account</button>
                </div>
              )}
              {isLoading && (
                <div className="flex items-center justify-center">
                  <ColorRing
                    visible={true}
                    height="70"
                    width="70"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={[
                      "#770f38",
                      "#770f38",
                      "#f8b26a",
                      "#770f38",
                      "#849b87",
                    ]}
                  />
                </div>
              )}
            </form>
            <p className="pt-4 text-[13px] font-medium">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#770f38] pl-[2px] hover:font-bold"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
