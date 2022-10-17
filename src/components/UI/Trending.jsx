import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import ShoesData from "../Shoes/ShoesData";
import { motion } from "framer-motion";
import { Puff } from "react-loader-spinner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

const Trending = () => {
  const [shoes, setShoes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();

  const slider = React.useRef(null);

  useEffect(() => {
    const fetchShoes = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://e-commerce-7733b-default-rtdb.firebaseio.com/shoes.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedShoes = [];

      for (const key in responseData) {
        loadedShoes.push({
          id: key,
          name: responseData[key].name,
          url: responseData[key].url,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setShoes(loadedShoes);
      setIsLoading(false);
    };

    fetchShoes().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className="flex items-center justify-center mt-[8rem] mb-[12rem]">
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
      </section>
    );
  }

  if (httpError) {
    return (
      <section className="flex items-center justify-center">
        <h1 className="text-2xl md:text-4xl font-semibold font-lora text-[#df4b3e]">
          {httpError}
        </h1>
      </section>
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 4000,
          pauseOnHover: true,
          dots: true,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#FAFAFA]" id="TrendingPage">
      <div className="w-full mx-auto px-7 md:px-8 max-w-[1200px] py-8">
        <div className="flex flex-col space-y-[3rem]  justify-center font-michroma">
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <button onClick={() => slider?.current?.slickPrev()}>
                <IoChevronBack
                  size={20}
                  className="p-1 border-[1px] border-[#FC5545] rounded-full"
                  color="#FC5545"
                />
              </button>
              <button onClick={() => slider?.current?.slickNext()}>
                <IoChevronForward
                  size={20}
                  className="p-1 border-[1px] border-[#1E1E1E] rounded-full"
                  color="#1E1E1E"
                />
              </button>
            </div>

            <div className="flex items-center space-x-2 md:space-x-5 justify-between">
              <div className="h-[1px] w-[30px] md:w-[75px] bg-[#FC554575] "></div>
              <h1 className="text-[#1E1E1E] text-[14px] md:text-3xl">
                Trending{" "}
                <span className="text-[#FC5545] pl-1">Collections</span>
              </h1>
            </div>
          </div>

          {/* CAROUSEL */}
          <div className="w-full">
            <Slider ref={slider} {...settings}>
              {shoes.slice(0, 7).map((shoe) => (
                <motion.div
                  initial={{ y: -250 }}
                  animate={{ y: 0 }}
                  transition={{ type: 'spring', stifffness: 200 }}
                  className="font-poppins max-w-full overflow-hidden"
                  key={shoe.id}
                >
                  <ShoesData
                    id={shoe.id}
                    key={shoe.id}
                    name={shoe.name}
                    url={shoe.url}
                    description={shoe.description}
                    price={shoe.price}
                  />
                </motion.div>
              ))}
            </Slider>
          </div>

          {/* BUTTON */}
          <div className="flex items-center justify-center mx-auto">
            <Link
              to="/products"
              className="rounded bg-[#d14343] hover:bg-[#94261c] transition-all duration-200 ease-in-out text-white px-4 py-2"
            >
              View All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
