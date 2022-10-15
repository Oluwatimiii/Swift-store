import React, { useEffect, useState } from "react";
import ShoesData from "./ShoesData";
import { Puff } from "react-loader-spinner";

const Shoes = () => {
  const [shoes, setShoes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();

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

  const shoeLists = shoes.map((shoe) => (
    <ShoesData
      id={shoe.id}
      key={shoe.id}
      name={shoe.name}
      url={shoe.url}
      description={shoe.description}
      price={shoe.price}
    />
  ));

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center gap-2 font-poppins">
      {shoeLists}
    </div>
  );
};

export default Shoes;
