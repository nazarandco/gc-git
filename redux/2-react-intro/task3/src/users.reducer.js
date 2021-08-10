import { initialState } from './store';

export const ADD = 'USERS/ADD';
export const DELETE = 'USERS/DELETE';

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        usersList: state.usersList.concat(action.payload),
      };
    case DELETE:
      return {
        ...state,
        usersList: state.usersList.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export default usersReducer;
