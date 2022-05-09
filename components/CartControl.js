import React, { useState } from "react";
import photo from "../public/img/photo.jpg";
import Image from "next/image";

const itemData = require("./data");

const CartControl = () => {
  const [cartState, setCartState] = useState({
    qty: 1,
  });

  const increaseCart = () => {
    setCartState({
      ...cartState,
      qty: cartState.qty + 1,
    });
  };

  const decreaseCart = () => {
    if (cartState.qty > 0) {
      setCartState({
        ...cartState,
        qty: cartState.qty - 1,
      });
    }
  };
  return (
    <div className="cart-control">
      <div className="cart-control-inner">
        <div className="product-left">
          <Image
            className="product-img"
            src={photo.src}
            alt={photo.src}
            width={80}
            height={80}
          />
          <div className="product-info">
            <h4 className="product-title">Hair Extension</h4>
            <span className="product-price">$ 190.99</span>
            <div className="qty-btn">
              <button onClick={decreaseCart}>-</button>
              <span className="qty-no">{cartState.qty}</span>
              <button onClick={increaseCart}>+</button>
            </div>
          </div>
        </div>
        <div className="product-right">
          <div className="qty-amount">
            <span>Qty</span> <span className="qtys-no">{cartState.qty}</span>
          </div>
          <div className="total-div">
            ${" "}
            <span className="total-amt">
              {Math.floor(cartState.qty * 190.99 * 100) / 100}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartControl;
