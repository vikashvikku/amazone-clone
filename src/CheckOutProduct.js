import React from "react";
import "./CheckoutProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { remove_basket } from "./Redux/action";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { addItem } from "./Redux/action";

const CheckOutProduct = ({
  id,
  title,
  image,
  price,
  rating,
  item,
  items,
  count,
}) => {
  console.log(item);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log("Count is : ", count);

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
            .map((_, idx) => (
              <p key={idx}>⭐</p>
            ))}
        </div>

        <RemoveIcon className="removeIcon" />
        <AddIcon
          className="addIcon"
          onClick={() => {
            dispatch(addItem(items));
          }}
        />
        {cart.count}
        <button
          className="remove-item"
          onClick={() => {
            dispatch(remove_basket(items));
          }}
        >
          Remove from basket
        </button>
      </div>
    </div>
  );
};

export default CheckOutProduct;
