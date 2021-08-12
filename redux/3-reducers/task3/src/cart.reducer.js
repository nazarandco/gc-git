import { ADD, REMOVE } from './cart.actions';
import { initialState } from './store';

// const initialState = {
//   products: [],
// };

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD:
      return {
        products: state.products.concat(action.payload),
      };
    case REMOVE:
      return {
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

// const cartReducer = (state = initialState.products, action) => {
//   switch (action.type) {
//     case ADD:
//       return {
//         cart: {
//           products: state.products.concat(action.payload),
//         },
//       };
//     case REMOVE:
//       return {
//         cart: {
//           products: state.products.filter(
//             (product) => product.id !== action.payload
//           ),
//         },
//       };
//     default:
//       return state;
//   }
// };

export default cartReducer;
