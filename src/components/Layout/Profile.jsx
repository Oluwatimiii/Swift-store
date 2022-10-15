import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import Time from "../UI/Time";

const Profile = ({ userName }) => {
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const logoutHandler = () => {
    authCtx.logout();
    navigate("/");
  };


  return (
    <div className="h-screen profile">
      <div className="bg-[#0a0a0ada] text-white h-full w-full flex flex-col items-center justify-center font-poppins pt-[7.6rem] pb-[3rem]">
        <div className="mx-auto px-7 md:px-10 flex flex-col items-center text-center space-y-5 justify-center">
          <h2 className="text-xl md:text-2xl lg:text-5xl font-poppins uppercase">HELLO  {userName}</h2>
          <Time />
        </div>

        <div className="mt-5 flex flex-col items-center">
          <button
            onClick={logoutHandler}
            className="text-white px-12 py-2 bg-[#ca3426] rounded-md
                 hover:bg-[#85251c] transition-all duration-300 ease-in-out"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
