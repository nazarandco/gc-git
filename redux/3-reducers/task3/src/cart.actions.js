export const ADD = 'CART/ADD';
export const REMOVE = 'CART/REMOVE';

export const addProduct = (product) => {
  return {
    type: ADD,
    payload: product,
  };
};

export const removeProduct = (id) => {
  return {
    type: REMOVE,
    payload: id,
  };
};
