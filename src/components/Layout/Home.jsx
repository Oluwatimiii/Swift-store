import React from "react";
import ClientsSay from "../UI/ClientsSay";
import Newsletter from "../UI/Newsletter";
import SelectedGallery from "../UI/SelectedGallery";
import Trending from "../UI/Trending";
import { motion } from "framer-motion";
// import Video from "../UI/Video";
import Countdown from "./Countdown";
import Hero from "./Hero";
import About from "../UI/About";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: .7 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, when: 'beforeChildren', staggerChildren: 2 }}
      className="font-poppins"
      id="HomePage"
    >
      <Hero />
      <Countdown />
      <Trending />
      <SelectedGallery />
      <About />
      <ClientsSay />
      {/* <Video /> */}
      <Newsletter />
    </motion.div>
  );
};

export default Home;
