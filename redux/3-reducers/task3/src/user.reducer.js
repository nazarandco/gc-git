import { ADD, REMOVE } from './user.actions';

const userReducer = (state = { user: null }, action) => {
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
