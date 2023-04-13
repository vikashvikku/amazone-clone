const initialState = {
  basket: [],
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

console.log("Result is: ", getBasketTotal);
const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.payload] };
    case "REMOVE_FROM_BASKET":
      const newBasket = state.basket.filter((item) => {
        if (item.id === action.payload) {
          return false;
        } else return true;
      });
      return {
        ...state,
        basket: newBasket,
      };
    case "EMPTY_BASKET":
      return { ...state, basket: [] };
    default:
      return state;
  }
};
export default cart;
