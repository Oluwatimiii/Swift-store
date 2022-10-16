import React, { useState } from "react";
import {GrClose} from 'react-icons/gr'
import img1 from "../../assets/gallery1.webp";
import img2 from "../../assets/gallery2.webp";
import img3 from "../../assets/gallery3.webp";
import img4 from "../../assets/gallery4.webp";
import img5 from "../../assets/gallery5.webp";
import img6 from "../../assets/gallery6.webp";
import img7 from "../../assets/gallery7.webp";
import img8 from "../../assets/gallery8.webp";
import img9 from "../../assets/gallery9.webp";
import img10 from "../../assets/gallery10.webp";
import img11 from "../../assets/gallery11.webp";
import img12 from "../../assets/gallery12.webp";
import img13 from "../../assets/gallery13.webp";
import img14 from "../../assets/gallery14.webp";
import img15 from "../../assets/gallery15.webp";
import img16 from "../../assets/gallery16.webp";
import img17 from "../../assets/gallery17.webp";
import img18 from "../../assets/gallery18.webp";
import img19 from "../../assets/gallery19.webp";
import img20 from "../../assets/gallery20.webp";
import img21 from "../../assets/gallery21.webp";
import "./Gallery.css";

const Gallery = () => {
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
    {
      id: 7,
      imgSrc: img7,
    },
    {
      id: 8,
      imgSrc: img8,
    },
    {
      id: 9,
      imgSrc: img9,
    },
    {
      id: 10,
      imgSrc: img10,
    },
    {
      id: 11,
      imgSrc: img11,
    },
    {
      id: 12,
      imgSrc: img12,
    },
    {
      id: 13,
      imgSrc: img13,
    },
    {
      id: 14,
      imgSrc: img14,
    },
    {
      id: 15,
      imgSrc: img15,
    },
    {
      id: 16,
      imgSrc: img16,
    },
    {
      id: 17,
      imgSrc: img17,
    },
    {
      id: 18,
      imgSrc: img18,
    },
    {
      id: 19,
      imgSrc: img19,
    },
    {
      id: 20,
      imgSrc: img21,
    },
    {
      id: 21,
      imgSrc: img21,
    },
  ];

  const [model, setModel] = useState(false)
  const [tempImgSrc, setTempImgSrc] = useState('')

  const getImg = (imgSrc) => {
     setTempImgSrc(imgSrc)
     setModel(true)
  };

  const closeModal = () => {
    setModel(false)
    console.log('clicked')
  }

  return (
    <div className="bg-[#111010] h-full py-[5rem] mx-auto" id="GalleryPage">
      <div className="mx-auto px-3 md:px-5 max-w-[1200px] flex flex-col items-center justify-center">
        <div className={model ? 'model open' : 'model'}>
            <img src={tempImgSrc} />
            <GrClose className="svg rounded-full" onClick={closeModal} />
        </div>

        <div className="py-7 text-center font-michroma text-white">
          <h1 className="font-bold text-2xl md:text-3xl tracking-widest">IMAGE GALLERY</h1>
          <p className="text-[#cecacae7] px-10 md:px-7 text-[10px] md:text-[15px] mt-2">A gallery displaying great images of our selected best collections.</p>
          <p className="text-[#ececece7] px-10 md:px-7 text-[7px] md:text-[12px] tracking-widest mt-[1px]">[Click image to view full size.]</p>
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
      </div>
    </div>
  );
};

export default Gallery;
