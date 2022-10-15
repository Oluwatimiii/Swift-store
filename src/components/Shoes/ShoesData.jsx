import { useContext } from "react";
import CartContext from "../../store/cart-context";
import ShoeForm from "./ShoeForm";

const ShoesData = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `${props.price.toFixed(2)}`;

  const addToCartHandler = (quantity) => {
    cartCtx.addItem({
      id: props.id,
      url: props.url,
      name: props.name,
      quantity: quantity,
      price: props.price
    });
  };

  return (
    <div className="rounded-lg p-2 border-[1px] border-[#ac2b2b46] bg-slate-50">
      <div className="w-full h-[180px] rounded-md border-[1px] overflow-hidden border-[#ac2b2b46]">
        <img
          src={props.url}
          alt={props.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <div className="flex flex-col space-y-2 items-start">
          <p className="font-bold pt-3 text-[17px]">{props.name}</p>
          <span className="text-white rounded-sm bg-gray-600 text-xs px-2 py-1 uppercase">
            {props.description}
          </span>
        </div>
        <div className="flex items-end justify-between">
          <p className="font-semibold text-xl text-[#df4b3e]">
            &#8358;{price}
          </p>
          <ShoeForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
      </div>
    </div>
  );
};

export default ShoesData;
