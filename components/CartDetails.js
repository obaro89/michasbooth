import React, { useState } from "react";
import styled from "styled-components";
import CartControl from "./CartControl";
import { useSelector } from "react-redux";
import { Alert, AlertTitle } from "@mui/material";
import validator from "validator";

const CartDetails = () => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    postcode: "",
  });

  const [checked, setChecked] = useState(false);
  const [cartIsEmpty, setCartIsEmpty] = useState(false);
  const [formError, setFormError] = useState({
    isError: false,
    errText: "",
  });

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

  const onChange = (e) => {
    setFormError({ errText: "", isError: false });
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const { name, address, email, phone, postcode } = form;

  const onSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      setCartIsEmpty(true);
    }

    if (!validator.isPostalCode(postcode, "GB")) {
      return setFormError({
        isError: true,
        errText: "You have entered an invalid postcode",
      });
    }
    if (!validator.isMobilePhone(phone)) {
      return setFormError({
        isError: true,
        errText: "You have entered an invalid Phone number",
      });
    }
    if (validator.isEmpty(address)) {
      return setFormError({
        isError: true,
        errText: "Please enter a valid address",
      });
    }
    if (!validator.isEmail(email)) {
      return setFormError({ isError: true, errText: "Email is invalid" });
    }
    if (validator.isEmpty(name)) {
      return setFormError({ isError: true, errText: "Please enter a name" });
    }

    if (!formError.isError && cart.length !== 0) {
      alert("Proceeding to payment");
    }
  };

  return (
    <CartContent className="cart-content">
      <h3 className="center-items">Your Shopping Cart</h3>
      <div className="cart-section">
        <div className="delivery-info">
          <form className="delivery-form">
            <h4>Your Delivery Details</h4>
            {formError.isError && (
              <h6 style={{ color: "red" }}>{formError.errText}</h6>
            )}
            <p>
              <input
                type="text"
                placeholder="Name"
                className="input-field"
                name="name"
                value={name}
                onChange={onChange}
              />
            </p>

            <p>
              <input
                type="email"
                placeholder="Email"
                className="input-field"
                name="email"
                value={email}
                onChange={onChange}
              />
            </p>
            <p>
              <input
                type="number"
                placeholder="Phone"
                className="input-field"
                name="phone"
                value={phone}
                onChange={onChange}
              />
            </p>
            <p>
              <input
                type="text"
                placeholder="Address"
                className="input-field"
                name="address"
                value={address}
                onChange={onChange}
              />
            </p>
            <p>
              <input
                type="text"
                placeholder="Postcode"
                className="input-field"
                name="postcode"
                value={postcode}
                onChange={onChange}
              />
            </p>
            <p className="termsofservice">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <span>I Agree to Terms Of Service</span>
            </p>
            <p>
              <button
                disabled={!checked}
                className="proceed-btn"
                onClick={(e) => onSubmit(e)}
              >
                PROCEED TO PAYMENT
              </button>
            </p>
          </form>
        </div>
        <div className="cart-qty">
          {cart.length === 0 && (
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <p> Cart is Empty</p>{" "}
              {cartIsEmpty && (
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  <strong>Please add items to your cart</strong>
                </Alert>
              )}
            </p>
          )}
          {cart.length > 0 &&
            cart.map((cartItem) => (
              <CartControl cartItem={cartItem} key={cartItem.id} />
            ))}
          {cart.length > 0 && (
            <React.Fragment>
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
            </React.Fragment>
          )}
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
