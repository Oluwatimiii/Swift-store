import React, { useContext, useState } from "react";
import { GiHypersonicMelon } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import HeaderCartBtn from "./HeaderCartBtn";
import AuthContext from "../../store/auth-context";

const Navbar = () => {
  //   const navigate = useNavigate();
 
  const authCtx = useContext(AuthContext)

  const isLoggedIn = authCtx.isLoggedIn;

  const [openNav, setOpenNav] = useState(false);

  const navOpener = () => {
    setOpenNav((prev) => !prev);
  };

  return (
    <div className="relative z-[1000]">
      <div className="shadow-md fixed top-0 left-0 nav w-full m-auto font-lora">
        <div className="bg-white py-4 flex md:flex items-center justify-between px-4 md:px-10">
          <Link
           to="/"
          >
            <div className="flex items-center font-bold text-2xl cursor-pointer">
              <span className="mr-1 text-[#FC5545]">
                <GiHypersonicMelon />
              </span>{" "}
              Swift
            </div>
          </Link>
          <div
            onClick={navOpener}
            className="text-2xl p-2 absolute right-4 top-3 cursor-pointer md:hidden transition-all ease-in duration-500"
          >
            {openNav ? <FaTimes /> : <FaBars />}
          </div>

          <ul
            className={`flex flex-col md:flex-row items-center z-[-1] justify-center text-center md:ml-[5rem] pb-20 md:pb-0 
            absolute top-0 left-0 md:static bg-black md:bg-white text-white md:text-black
             md:z-auto w-full md:w-auto h-screen md:h-auto ${
               openNav ? "top-[60px] opacity-100" : "top-[-700px] opacity-0"
             } md:opacity-100`}
          >
            <Link
              to="/"
              className="cursor-pointer md:ml-6 font-semibold hover:border-b-2 hover:border-[#FC5545] hover:transition-all hover:duration-100 transition ease-in
                 duration-200 lg:ml-8 text-[18px] lg:text-xl my-5 md:my-0"
              onClick={() => setOpenNav(!openNav)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="cursor-pointer md:ml-6 font-semibold hover:border-b-2 hover:border-[#FC5545] hover:transition-all hover:duration-100 transition ease-in-out
                 duration-200 lg:ml-8 text-[18px] lg:text-xl my-5 md:my-0"
              onClick={() => setOpenNav(!openNav)}
            >
              Products
            </Link>
            <Link
              to="/gallery"
              className="cursor-pointer md:ml-6 font-semibold hover:border-b-2 hover:border-[#FC5545] hover:transition-all hover:duration-100 transition ease-in-out
                 duration-200 lg:ml-8 text-[18px] lg:text-xl my-5 md:my-0"
              onClick={() => setOpenNav(!openNav)}
            >
              Gallery
            </Link>
            {!isLoggedIn && <Link
              to="/login"
              className="md:ml-6 font-semibold hover:border-b-2 hover:border-[#FC5545] hover:transition-all hover:duration-100 transition ease-in-out
                 duration-200 lg:ml-8 text-[18px] lg:text-xl my-5 md:my-0"
              onClick={() => setOpenNav(!openNav)}
            >
              Login
            </Link>}

            {isLoggedIn && <Link
              to="/profile"
              className="md:ml-6 font-semibold hover:border-b-2 hover:border-[#FC5545] hover:transition-all hover:duration-100 transition ease-in-out
                 duration-200 lg:ml-8 text-[18px] lg:text-xl my-5 md:my-0"
              onClick={() => setOpenNav(!openNav)}
            >
              Profile
            </Link>}

          </ul>

          <Link to="/cart" className="flex items-center mr-12 md:mr-5">
            <HeaderCartBtn />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
