import React from "react";
import "./Subtotal.css";
import { useSelector } from "react-redux";
import { getBasketTotal } from "./Redux/cart";

const Subtotal = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="subtotal">
      <h3>
        Subtotal({cart.basket.length} items): $ {getBasketTotal(cart.basket)}{" "}
      </h3>

      <button className="proceed">Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
