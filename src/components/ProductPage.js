import React, { createContext, useEffect, useReducer } from "react";
import Cart from "./Cart";
import { Product } from "./Product";
import { reducer } from "./reducer";
//import Checkout from "./Checkout";

export const CartContext = createContext();
const initialState = {
  item: Product,

  totalAmount: 0,
  totalItem: 0,
};
const ProductPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const inc = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };
  const dec = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.item]);
  // const checkout = (id) => {
  //   return dispatch({
  //     typeof: "CHECKOUT",
  //     payload: id,
  //   });
  // };
  //const [item, setItem] = useState(Product);

  return (
    <>
      <CartContext.Provider value={{ ...state, inc, dec }}>
        <Cart />
        {/* <CheckOutItem /> */}
      </CartContext.Provider>
    </>
  );
};

export default ProductPage;
