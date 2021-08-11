import { ADD, REMOVE } from './cart.actions';

const initialState = {
  products: [],
};

const cartReducer = (state = { cart: initialState }, action) => {
  switch (action.type) {
    case ADD:
      return {
        cart: {
          products: state.cart.products.concat(action.payload),
        },
      };
    case REMOVE:
      return {
        cart: {
          products: state.cart.products.filter(
            (product) => product.id !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default cartReducer;
