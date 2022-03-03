import React from "react";
import styled from "styled-components";
import Link from "next/link";

const ProductCard = ({ photo, category, productName, id }) => {
  return (
    <Link href={`/product/${id}`} passHref>
      <FlexItems>
        <FlexImage src={photo} />
        <ImageBadge>
          <Title>{productName}</Title>
          <ShopNowBtn>SHOP NOW</ShopNowBtn>
        </ImageBadge>
      </FlexItems>
    </Link>
  );
};

export default ProductCard;

const FlexItems = styled.div`
  flex: 1 1 100%;
  margin: 1px;
  position: relative;

  @media screen and (min-width: 480px) {
    flex: 1 1 50%;
  }
  @media screen and (min-width: 768px) {
    flex: 1 1 33.333%;
  }
  @media screen and (min-width: 980px) {
    flex: 1 1 20%;
  }
`;
const ShopNowBtn = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  color: white;
  cursor: pointer;
  background-color: #7851a9;
  font-weight: bolder;
  font-family: "Montserrat", sans-serif;
  &:hover {
    opacity: 0.9;
  }
`;

const FlexImage = styled.img`
  height: 100%;
  width: 100%;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
    transition: all 0.6s ease-in;
  }
`;

const ImageBadge = styled.div`
  position: absolute;
  z-index: 100;
  left: 50%;
  top: 75%;
  transform: translate(-50%, -50%);
`;

const Title = styled.p`
  background-color: black;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  padding: 10px;
  height: 60px;
  width: 200px;
  min-width: 200px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
  @media screen and (min-width: 480px) {
    min-width: 85%;
  }
`;
