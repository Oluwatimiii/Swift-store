import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import Videoo from "../../assets/Video1.mp4";

const Videos = () => {
  return (
    <div className="bg-[#FC5545] py-[3rem] mx-auto relative overflow-hidden">
      <div className="w-full mx-auto px-7 md:px-10 max-w-[1300px]">
        <div className="flex flex-col md:flex-row justify-end">
           
          <div className="cursor-pointer z-30">
            <Video
              loop
              controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
              className='max-w-[980px] max-h-[670px] overflow-hidden rounded-[20px]'
            >
              <source src={Videoo} type="video/mp4" className="w-full h-full object-cover cursor-pointer" />
            </Video>
          </div>
        </div>
        <p className="slide text-[#FFFFFF3B] hidden lg:block  whitespace-nowrap lg:-rotate-90 absolute left-0 h-full text-9xl">NIKE AIR MAX</p>
        <p className="text-[#FFFFFF3B] absolute right-10 -bottom-1  md:-bottom-3 text-5xl md:text-8xl">AIR MAX</p>
      </div>
    </div>
  );
};

export default Videos;
