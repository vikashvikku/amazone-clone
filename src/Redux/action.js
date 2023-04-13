export const add_basket = (newItem) => {
  return {
    type: "ADD_TO_BASKET",
    payload: newItem,
  };
};
export const remove_basket = (itemId) => {
  return {
    type: "REMOVE_FROM_BASKET",
    payload: itemId,
  };
};
export const emptyBasket = (itemId) => {
  return {
    type: "EMPTY_BASKET",
    // payload: itemId,
  };
};
