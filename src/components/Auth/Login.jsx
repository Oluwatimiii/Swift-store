import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ColorRing } from "react-loader-spinner";
import AuthContext from "../../store/auth-context";
import { auth } from "../../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = (props) => {
  const [emailsValue, setEmailsValue] = useState("");
  const [passwordsValue, setPasswordsValue] = useState("");
  const [errorsValue, setErrorsValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const handleEmails = (e) => {
    setEmailsValue(e.target.value);
  };

  const handlerPasswords = (e) => {
    setPasswordsValue(e.target.value);
  };

  const formHandlers = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDr1EWrfQlWeI07dhtp2EVkKdW3pQsOtOk",
      {
        method: "POST",
        body: JSON.stringify({
          email: emailsValue,
          password: passwordsValue,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed";
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }
            // setErrorsValue(errorMessage);
            // console.log(errorMessage);
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        props.setUserName(data.email)
        authCtx.login(data.idToken, expirationTime.toISOString());
        navigate("/");
      })
      .catch((err) => {
        setErrorsValue(err.message);
        console.log(err.message);
      });
  };

  const loginWithGoogle = () => {
    const googleAuthProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const expirationTime = new Date(
          new Date().getTime() + +3600 * 1000
        );

        authCtx.goggle(token, expirationTime.toISOString())
        console.log(token);
        navigate('/');


        const user = result.user;
        props.setUserName(user.displayName)
      })
      .catch((error) => {
        const errorMessage = error.message;
        const email = error.customData.email;

        console.log(errorMessage);
        console.log(email);
      });
  };

  return (
    <div className="bg-[#700a31]  flex flex-col items-center justify-center font-poppins pb-[3rem]">
      <div className="pt-[7.6rem] mx-auto px-7 md:px-10 flex items-center justify-center">
        <div className="rounded bg-white max-w-[330px] md:max-w-full md:w-[450px] px-8 py-11">
          <h1 className="font-bold text-3xl">Sign In</h1>
          <p className="text-[12px] text-gray-500 pt-2">
            Enter your credentials to access your account.
          </p>
          <div className="pt-10">
            <form onSubmit={formHandlers}>
              {errorsValue && (
                <p className="text-red-600 text-[11px] bg-red-100 p-2 rounded mb-2">
                  {errorsValue}
                </p>
              )}
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-sm">
                  Email address:
                </label>
                <input
                  type="email"
                  name="email"
                  className="border-[1px] border-gray-400 rounded p-[5px] placeholder:text-[12px] outline-none focus:border-[#770f38]"
                  onChange={handleEmails}
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
                  className="border-[1px] border-gray-400 rounded p-[5px] placeholder:text-[12px] "
                  placeholder="password"
                  onChange={handlerPasswords}
                />
              </div>
              {!isLoading && (
                <div
                  className="mt-5 flex items-center justify-center py-2 bg-[#770f38] w-full rounded-md
                 hover:bg-[#580a29] transition-all duration-300 ease-in-out"
                >
                  <button className="text-white">Login</button>
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
            <p className="pt-3 pb-1 text-xs text-center font-medium">Or</p>
          </div>
          <div
            className="mt-2 flex flex-col items-center justify-center bg-white w-full border-[1px] border-gray-400
             rounded font-semibold"
          >
            <button
              className="w-full text-black flex items-center justify-center text-[13px] py-2"
              onClick={loginWithGoogle}
            >
              <FcGoogle className="mr-2" size="15px" />
              Sign In With Google
            </button>
          </div>
          <p className="pt-4 text-[13px] font-medium">
            Don't have an account?
            <Link to="/signup" className="text-[#770f38] hover:font-bold">
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
