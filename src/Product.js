import React from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import { add_basket } from "./Redux/action";

const Product = ({ id, title, image, price, rating }) => {
  const dispatch = useDispatch();
  const item = {
    id,
    title,
    image,
    price,
    rating,
  };

  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button
        className="add-to-cart"
        onClick={() => {
          dispatch(add_basket(item));
        }}
      >
        Add to basket
      </button>
    </div>
  );
};

export default Product;
