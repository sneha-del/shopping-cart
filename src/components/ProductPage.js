import React, { createContext, useReducer } from "react";
import Cart from "./Cart";
import { Product } from "./Product";
import { reducer } from "./reducer";
export const CartContext = createContext();
const initialState = { item: Product, totalAmount: 0, totalItem: 0 };
const ProductPage = () => {
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
  // const [item, setItem] = useState(Product);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <CartContext.Provider value={{ ...state, inc, dec }}>
        <Cart />
      </CartContext.Provider>
    </>
  );
};

export default ProductPage;
