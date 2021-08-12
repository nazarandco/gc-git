import { ADD, REMOVE } from './user.actions';

const userReducer = (state = null, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, ...action.payload };
    case REMOVE:
      return {};
    default:
      return state;
  }
};

export default userReducer;
