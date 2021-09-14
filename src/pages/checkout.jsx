import React from "react";
import { useStateValue } from "../contexts/stateProvider";
import checkoutAd from "../assets/checkout_banner.jpg";
import CheckOutProducts from "../components/checkoutProducts";
import Subtotal from "../components/subtotal";

export default function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="d-flex">
        <img src={checkoutAd} alt="" className="checkout_ad" />
        <article className="p-0" style={{background: '#fff'}}>
          {basket?.length > 0 && (
            <div className="checkout_payment">
              <Subtotal />
            </div>
          )}
        </article>
      </div>

      {basket?.length === 0 ? (
        <div className="checkout_mgs">
          <div className="container">
            <h2>Your Shopping basket is empty</h2>
            <p>
              You have no item in your basket. To buy one or more, click on "Add
              to next item."
            </p>
          </div>
          <hr className="cross_line" />
          <article className=""></article>
        </div>
      ) : (
        <div className="checkout_mgs">
          <div className="container">
            <h2>Your Shopping basket</h2>
            <p>
              Here are the list of item you want buy, you can move on and pay
            </p>
          </div>
          <hr className="cross_line" />
          <article className="">
            {basket.map((item, index) => (
              <CheckOutProducts
                key={index}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </article>
        </div>
      )}
    </div>
  );
}


// yarn add react-currency-format