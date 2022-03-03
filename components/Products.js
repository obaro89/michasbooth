import React from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";
const itemData = require("./data");
const Products = () => {
  return (
    <ProductGallery>
      {itemData.map((data) => (
        <ProductCard
          photo={data.img}
          productName={data.title}
          id={data.author}
          key={data.title}
        />
      ))}
    </ProductGallery>
  );
};

export default Products;

const ProductGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1px;
`;
