import { ADD, REMOVE } from './user.actions';
import { initialState } from './store';

const userReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case ADD:
      return {
        user: [action.payload].concat(state.user),
      };
    case REMOVE:
      return {
        user: [],
      };
    default:
      return state;
  }
};

export default userReducer;
