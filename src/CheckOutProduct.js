import React from "react";
import "./CheckoutProduct.css";
import { useDispatch } from "react-redux";
import { remove_basket } from "./Redux/action";

const CheckOutProduct = ({ id, title, image, price, rating, item }) => {
  const dispatch = useDispatch();

  return (
    <div className="checkProduct">
      <img className="checkProduct-image" src={image} alt="" />
      <div className="checkProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct-rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <button
          onClick={() => {
            dispatch(remove_basket(item));
          }}
        >
          Remove from basket
        </button>
      </div>
    </div>
  );
};

export default CheckOutProduct;
