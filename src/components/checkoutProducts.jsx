import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../contexts/stateProvider";

export default function CheckOutProducts({ id, title, image, price, rating }) {
  const [, dispatch] = useStateValue();
  const handleRemoveItem = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };
  return (
    <div className="d-flex">
      <div className="checkout__product card-body">
        <img className="p-3" src={image} alt="" />
        <div className="checkout__product__info">
          <div className="checkout__product__price">
            <p>{title}</p>
            <span>$</span>
            <strong>{price}</strong>
          </div>
          <div className="checkout__product__rating">
            {Array(rating)
              .fill()
              .map((_, index) => (
                <span key={index} role="img">
                  🌟
                </span>
              ))}
          </div>
          <button className="px-2 me-3" onClick={handleRemoveItem}>
            Remove from Basket
          </button>
          <Link to="/" className="px-2 basket__list__btn">
            <button className="px-2 me-3">buy more</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
