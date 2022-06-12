import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../redux/features/cartSlice/cartSlice";
import Image from "next/image";

const CartControl = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { cartState } = useSelector((state) => state);

  const increaseCart = () => {
    dispatch(increaseQty(cartItem));
  };

  const decreaseCart = () => {
    dispatch(decreaseQty(cartItem));
  };

  return (
    <div className="cart-control">
      <div className="cart-control-inner">
        <div className="product-left">
          <Image
            className="product-img"
            src={cartItem.image}
            alt={cartItem.name}
            width={80}
            height={80}
          />
          <div className="product-info">
            <h4 className="product-title">{cartItem.name}</h4>
            <span className="product-price">$ {cartItem.price}</span>
            <div className="qty-btn">
              <button disabled={cartItem.quantity < 1} onClick={decreaseCart}>
                -
              </button>
              <span className="qty-no">{cartItem.quantity}</span>
              <button
                disabled={cartItem.quantity >= cartItem.quantityInStock}
                onClick={increaseCart}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="product-right">
          <div className="qty-amount">
            <span>Qty</span>{" "}
            <span className="qtys-no">{cartItem.quantity}</span>
          </div>
          <div className="total-div">
            ${" "}
            <span className="total-amt">
              {Math.round(cartItem.quantity * cartItem.price * 100) / 100}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartControl;
