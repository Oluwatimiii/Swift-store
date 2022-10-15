import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import img1 from "../../assets/gallery1.webp";
import img2 from "../../assets/gallery2.webp";
import img3 from "../../assets/gallery3.webp";
import img4 from "../../assets/gallery4.webp";
import img5 from "../../assets/gallery5.webp";
import img6 from "../../assets/gallery6.webp";
import "../Layout/Gallery.css";

const SelectedGallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  const closeModal = () => {
    setModel(false);
    console.log("clicked");
  };

  return (
    <div className="bg-[#111010] h-full mx-auto py-[3rem]">
      <div className="mx-auto px-3 md:px-5 max-w-[1200px] flex flex-col items-center justify-center">
        <div className="py-7 text-center font-michroma text-white">
          <h1 className="font-bold text-xl md:text-3xl tracking-widest">
            SELECTED IMAGES
          </h1>
          <p className="text-[#ececece7] px-10 md:px-7 text-[7px] md:text-[12px] tracking-widest mt-[2px]">[Click image to view full size.]</p>
        </div>

        <div>
          <div className={model ? "model open" : "model"}>
            <img src={tempImgSrc} />
            <GrClose className="svg rounded-full" onClick={closeModal} />
          </div>

          <div className="gallery">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="pics shadow-sm shadow-white"
                  onClick={() => getImg(item.imgSrc)}
                >
                  <img
                    src={item.imgSrc}
                    alt="Gallery Pictures"
                    className="w-full h-full"
                  />
                </div>
              );
            })}
          </div>

          <div className="text-center w-full mt-6 md:mt-14">
            <Link
             to='/gallery'
             className="text-[#cecacaf3] hover:text-white font-semibold text-[12px] tracking-wide p-2 md:text-[15px] mt-2 md:mt-3 border-2 border-[#cecacae7] hover:border-[#fff] transition-all duration-300 ease-in-out ">
              View All Images
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedGallery;
