import React from "react";
import CartDetails from "../components/CartDetails";
import ProductsYouMayLike from "../components/ProductsYouMayLike";

const itemData = require("../components/data.js");

const Cart = () => {
  return (
    <div className="container">
      <CartDetails />
      <ProductsYouMayLike category={itemData} />
    </div>
  );
};

export default Cart;
