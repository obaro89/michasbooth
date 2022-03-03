import Rating from "./Rating";
import React from "react";
import styled from "styled-components";
import itemData from "./data.js";
import HeadingTag from "./HeadingTag";
import ProductAccordion from "./ProductAccordion";
import ProductVideo from "./ProductVideo";
import CustomersReviews from "./CustomersReviews";

const ProductDetails = ({ productId }) => {
  const data = itemData.find((p) => p.author === productId);

  return (
    <ProductMain className="product-details">
      <div className="pimage">
        <ProductImage src={data.img} />
      </div>
      <ProductInfo className="product-info">
        <HeadingTag
          title={data.title}
          style={{ textAlign: "center", fontSize: 38, margin: 0 }}
        />
        <p className="center-items mobile">
          <Rating rating={3} fontSize={38} />
          <span>20 Reviews</span>
        </p>
        <p className="center-items">
          <CustomersReviews />
        </p>
        <h6 className="center-items">32 PCS Available</h6>
        <p className="center-items">
          <ProductVideo />
        </p>
        <p className="center-items">
          <button className="primary-btn"> ADD TO CART ($ 433.99)</button>
        </p>

        <p className="center-items">
          <ProductAccordion />
        </p>
      </ProductInfo>
    </ProductMain>
  );
};

export default ProductDetails;

const ProductMain = styled.div`
  display: flex;
  background-color: white;
  margin: 15px;
  height: auto;
`;

const ProductInfo = styled.div`
  height: auto;
  width: 85%;
`;
const ProductImage = styled.img`
  /* width: auto;*/
  //height: auto;
  object-fit: cover;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 95%;
`;
