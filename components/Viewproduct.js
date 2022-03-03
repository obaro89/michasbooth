import React from "react";
import ProductDetails from "./ProductDetails";
import ProductsYouMayLike from "./ProductsYouMayLike";

const itemData = require("./data");

const Viewproduct = ({ productId }) => {
  return (
    <div className="container viewproduct">
      <ProductDetails productId={productId} />
      <ProductsYouMayLike category={itemData} />
    </div>
  );
};

export default Viewproduct;
