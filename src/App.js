import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import ProductPage from "./components/ProductPage";
//import Checkout from "./components/Checkout";

const App = () => {
  return (
    <>
      {/* <ProductPage/> */}
      <Routes>
        <Route exact path="/" element={<ProductPage />}></Route>
        {/* <Route exact path="/checkout" element={<Checkout />}></Route> */}
        {/* <ProductPage /> */}
      </Routes>
    </>
  );
};

export default App;
