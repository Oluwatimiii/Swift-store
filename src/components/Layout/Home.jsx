import React from "react";
import ClientsSay from "../UI/ClientsSay";
import Newsletter from "../UI/Newsletter";
import SelectedGallery from "../UI/SelectedGallery";
import Trending from "../UI/Trending";
import Video from "../UI/Video";
import Countdown from "./Countdown";
import Hero from "./Hero";
import { ToastContainer } from "react-toastify";
import About from "../UI/About";

const Home = () => {
  return (
    <div className="font-poppins" id="HomePage">
      <Hero />
      <Countdown />
      <Trending />
      <SelectedGallery />
      <About />
      <ClientsSay />
      {/* <Video /> */}
      <Newsletter />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Home;
