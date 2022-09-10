import React, { useContext, useState } from "react";
import { CartContext } from "./ProductPage";

const Items = ({ id, title, img, amount, price, color }) => {
  const { inc, dec } = useContext(CartContext);
  return (
    <>
      {" "}
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="img" />
        </div>
        <div className="title">
          <h2>{title}</h2>
          <p>{color}</p>
        </div>
        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={() => dec(id)}></i>
          <input type="text" placeholder={amount} />
          <i className="fas fa-plus add" onClick={() => inc(id)}></i>
        </div>
        <div className="price">
          <h3>{price}$</h3>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Items;
