import React from "react";
import styled from "styled-components";
import CartControl from "./CartControl";
import { useSelector } from "react-redux";

const CartDetails = () => {
  const {
    cartState: { cart },
  } = useSelector((state) => state);
  const totalAmount = cart.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  );
  const totalAmountDiscounted = cart.reduce(
    (prev, curr) =>
      totalAmount - (prev + curr.price * curr.quantity) * (curr.discount / 100),
    0
  );
  return (
    <CartContent className="cart-content">
      <h3 className="center-items">Your Shopping Cart</h3>
      <div className="cart-section">
        <div className="delivery-info">
          <form className="delivery-form">
            <h4>Your Delivery Details</h4>
            <p>
              <input type="text" placeholder="Name" className="input-field" />
            </p>

            <p>
              <input type="email" placeholder="Email" className="input-field" />
            </p>
            <p>
              <input
                type="number"
                placeholder="Phone"
                className="input-field"
              />
            </p>
            <p>
              <input
                type="text"
                placeholder="Address"
                className="input-field"
              />
            </p>
            <p>
              <input
                type="text"
                placeholder="Postcode"
                className="input-field"
              />
            </p>
            <p className="termsofservice">
              <input type="checkbox" />
              <span>I Agree to Terms Of Service</span>
            </p>
            <p>
              <button className="proceed-btn">PROCEED TO PAYMENT</button>
            </p>
          </form>
        </div>
        <div className="cart-qty">
          {cart.length === 0 && <p>Cart is Empty</p>}
          {cart.length > 0 &&
            cart.map((cartItem) => (
              <CartControl cartItem={cartItem} key={cartItem.id} />
            ))}
          <TotalAmount>
            <span className="text">Total</span>{" "}
            <span className="price">
              $ {Math.round(totalAmount * 100) / 100}
            </span>
          </TotalAmount>
          <TotalAmount>
            <span className="text">You pay</span>{" "}
            <span className="price">
              $ {Math.round(totalAmountDiscounted * 100) / 100}
            </span>
          </TotalAmount>
        </div>
      </div>
    </CartContent>
  );
};

export default CartDetails;

const CartContent = styled.div`
  width: 100%;
  margin: 0 auto;
  height: auto;
  margin-top: 130px;
`;

const TotalAmount = styled.div`
  text-align: right;
  padding-right: 20px;
  padding: 20px;
  .price {
    background-color: #7951a92f;
    color: white;
    padding: 5px;
    border-radius: 4px;
    font-weight: bold;
    color: #4c2879;
    margin-left: 10px;
  }
  .text {
    font-weight: 600;
  }
`;
