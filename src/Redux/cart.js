const initialState = {
  basket: [],
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

console.log("Result is: ", getBasketTotal);
const cart = (state = initialState, action) => {
  switch (action.type) {
    // case "ADD_TO_BASKET":
    //   return { ...state, basket: [...state.basket, action.payload] };

    case "ADD_TO_BASKET":
      let newState = { basket: [] };
      let isMatch = false;
      for (let item of state.basket) {
        if (item.id === action.payload.id) {
          newState.basket.push({ ...item, count: item.count + 1 });
          isMatch = true;
        } else {
          newState.basket.push(item);
        }
      }
      if (isMatch === false) {
        newState.basket.push({ ...action.payload, count: 1 });
      }
      return newState;

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
