import Rating from "./Rating";
import React from "react";
import styled from "styled-components";
import HeadingTag from "./HeadingTag";
import ProductAccordion from "./ProductAccordion";
import ProductVideo from "./ProductVideo";
import CustomersReviews from "./CustomersReviews";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../redux/features/cartSlice/cartSlice";

const ProductDetails = ({ productId }) => {
  const dispatch = useDispatch();
  const { cartState, productsState } = useSelector((state) => state);

  const products = productsState.products;
  const data = products.find((p) => p.id === productId);
  console.log(data);
  const isInCart = cartState.cart.some((cartItem) => cartItem.id === productId);

  const handleAddToCart = () => {
    dispatch(addToCart(data));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(data));
  };
  return (
    <ProductMain className="product-details">
      <div className="pimage">
        <ProductImage src={data.image} className="image-src" />
      </div>
      <ProductInfo className="product-info">
        <HeadingTag
          title={data.name}
          style={{ textAlign: "center", fontSize: 38, margin: 0 }}
        />
        <p className="center-items">
          <Rating rating={data.rating} fontSize={38} />
          <span>{data.numReviews} Reviews</span>
        </p>
        <p className="center-items">
          <CustomersReviews />
        </p>
        <h6 className="center-items">{data.quantityInStock} PCS Available</h6>
        <p className="center-items">
          <ProductVideo />
        </p>
        <p className="center-items">
          <button
            disabled={isInCart}
            className="primary-btn"
            onClick={handleAddToCart}
          >
            {" "}
            ADD TO CART ($ {data.price})
          </button>
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
