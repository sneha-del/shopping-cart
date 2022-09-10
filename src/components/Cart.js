import React, { useContext, useState } from "react";
import Items from "./Items";
import { Product } from "./Product";
import { CartContext } from "./ProductPage";
const Cart = () => {
  const { item, totalAmount, checkout } = useContext(CartContext);
  // const [item, setItem] = useState(Product);
  return (
    <>
      <div className="main-div">
        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>4</p>
        </div>
      </div>
      <section className="main-cart-section">
        <div className="cart-items">
          <div className="cart-items-container">
            {item.map((curItem) => {
              return <Items key={curItem.id} {...curItem} />;
            })}
          </div>
        </div>
        <div className="card-total">
          <h3>
            Cart Total:<span>{totalAmount}$</span>
          </h3>
          <button onClick={checkout}>checkout</button>
        </div>
      </section>
    </>
  );
};

export default Cart;
