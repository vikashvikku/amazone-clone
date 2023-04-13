import React from "react";
import "./Checkout.css";
import { useDispatch, useSelector } from "react-redux";
import CheckOutProduct from "./CheckOutProduct";
import Subtotal from "./Subtotal";
import { emptyBasket } from "./Redux/action";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Showing ad"
        ></img>
        {cart.basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Cart is Empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, Click
              on "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout-title">Your Shopping Basket</h2>
            <button
              className="empty-cart"
              onClick={() => {
                dispatch(emptyBasket());
              }}
            >
              Empty Cart
            </button>
            {cart.basket.map((item) => {
              return (
                <CheckOutProduct
                  key={item.id}
                  item={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        )}
      </div>
      {cart.basket.length > 0 && (
        <div className="checkout-right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
