import { ADD, REMOVE } from './user.actions';
import { initialState } from './store';

const userReducer = (state = [initialState.user], action) => {
  switch (action.type) {
    case ADD:
      return state.concat(action.payload);
    case REMOVE:
      return {
        state: [],
      };
    default:
      return state;
  }
};

export default userReducer;
