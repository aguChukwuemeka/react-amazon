import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../contexts/stateProvider";
import { getBasketTotal } from "../contexts/reducer";

export default function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const handleProceed = () => {
    dispatch({});
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <article>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="total__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </article>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="subtotal__btn" onClick={handleProceed}>
        Proceed to checkbox
      </button>
    </div>
  );
}
