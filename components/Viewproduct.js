import React from "react";
import ProductDetails from "./ProductDetails";
import ProductsYouMayLike from "./ProductsYouMayLike";

const { productsData } = require("../fakeData/data");

const Viewproduct = ({ productId }) => {
  const data = productsData.filter((product) => product.id !== productId);
  console.log(data);
  return (
    <div className="viewproduct">
      <ProductDetails productId={productId} />
      <ProductsYouMayLike category={data} />
    </div>
  );
};

export default Viewproduct;
