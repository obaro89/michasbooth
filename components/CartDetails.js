import React from "react";
import styled from "styled-components";
import CartControl from "./CartControl";

const CartDetails = () => {
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
          <CartControl />
          <CartControl />
          <CartControl />

          <TotalItems>
            <span>Total Items </span>4
          </TotalItems>
          <TotalAmount>
            <span>Total Amount </span>$ 1234
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

const TotalItems = styled.div`
  margin-top: 10px;

  span {
    padding: 25px;
    font-weight: 500;
  }
`;

const TotalAmount = styled.div`
  margin-top: 10px;
  padding-bottom: 15px;
  span {
    padding: 25px;
    font-weight: 500;
  }
`;
