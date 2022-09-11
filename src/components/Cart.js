import React, { useContext, useState } from "react";
import Items from "./Items";
import { Product } from "./Product";
import { CartContext } from "./ProductPage";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { item, totalAmount, checkout } = useContext(CartContext);
  // const [item, setItem] = useState(Product);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate("/checkout");
  };

  return (
    <>
      <div className="main-div">
        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>4</p>
        </div>
      </div>
      <div className="search">
        <input
          type="text"
          className="search-bar"
          placeholder="Search"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <section className="main-cart-section">
        <div className="cart-items">
          <div className="cart-items-container">
            {item
              .filter((curItem) => {
                if (query === "") {
                  return curItem;
                } else if (
                  curItem.color.toLowerCase().includes(query.toLowerCase())
                ) {
                  return curItem;
                }
              })
              .map((curItem, index) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
          </div>
        </div>
        <div className="card-total">
          <h3>
            Cart Total:<span>{totalAmount}$</span>
          </h3>
          <button onClick={() => handleClick()}>checkout</button>
        </div>
      </section>
    </>
  );
};

export default Cart;
