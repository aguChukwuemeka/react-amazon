import React from "react";
import { useStateValue } from "../contexts/stateProvider";

export default function Products({ id, title, image, price, rating }) {
  const [, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info p-3">
        <p>{title}</p>
        <p className="Product__price">
          <span>$</span>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>🌟</p>
            ))}
        </div>
      </div>
      <img className="p-3" src={image} alt="" />
      <button className="px-2" onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
}
