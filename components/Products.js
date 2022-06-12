import React from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Products = () => {
  const { cartState, productsState } = useSelector((state) => state);

  return (
    <ProductGallery>
      {productsState.products.map((data) => (
        <ProductCard
          photo={data.image}
          productName={data.name}
          id={data.id}
          key={data.id}
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
