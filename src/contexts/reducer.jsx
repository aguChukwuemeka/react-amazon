import storeProducts from "./api/data";
import img3 from "../assets/images/qq3.jpg";

export const initialState = {
  products: storeProducts,
  basket: [
    {
      id: 12321341,
      title:
        "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
      image: img3,
      price: 11.96,
      rating: 4,
      inCart: false,
      count: 0,
      total: 0,
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_DATA":
      return {};
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((item) => item.id === action.id);
      if ((index) => 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `can't remove product (id ${action.id}) as its not in basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
