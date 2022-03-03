import React, { Fragment } from "react";
import HeadingTag from "./HeadingTag";
import Link from "next/link";
import styled from "styled-components";
import Rating from "./Rating";

const ProductsYouMayLike = ({ category }) => {
  category.length = 4;
  return (
    <Fragment>
      <div>
        <HeadingTag
          title={"Products You May Like"}
          style={{ marginLeft: "10px" }}
        />
      </div>
      <Wrapper>
        {category.map((p, i) => {
          return (
            <Link href={`/product/${p.author}`} key={i} passHref>
              <FlexItems>
                <FlexImage src={p.img} />
                <ProductTag>
                  <ProductName>
                    <span>{p.title}</span>
                    <Rating rating={3} />
                  </ProductName>
                  <ProductPrice>
                    <span>$ 119.99</span>
                    <button>View</button>
                  </ProductPrice>
                </ProductTag>
              </FlexItems>
            </Link>
          );
        })}
      </Wrapper>
    </Fragment>
  );
};

export default ProductsYouMayLike;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1px;
  justify-content: space-around;
`;
const FlexItems = styled.div`
  flex: 1 1 100%;
  margin: 5px;
  position: relative;
  width: 100%;
  background-color: #fdfdfd;
  border: 1px solid whitesmoke;
  padding: 10px;
  height: 100%;

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
const FlexImage = styled.img`
  height: 65%;
  width: 100%;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
    transition: all 0.6s ease-in;
  }
  object-fit: cover;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const ProductTag = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductName = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  padding-top: 5px;
  font-family: "Montserrat", sans-serif;

  & span {
    margin-bottom: 5px;
    font-family: "Montserrat", sans-serif;
  }
`;
const ProductPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  padding-top: 5px;
  font-family: "Montserrat", sans-serif;

  & span {
    margin-bottom: 5px;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
  }
  & button {
    height: 25px;
    font-weight: 700;
    font-family: "Montserrat", sans-serif;
    border: none;
    border-radius: 0;
    cursor: pointer;
    color: white;
    background-color: #7851a9;
  }
`;
