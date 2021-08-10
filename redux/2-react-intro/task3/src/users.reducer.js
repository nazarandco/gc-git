import { initialState } from './store';

export const ADD = 'USERS/ADD';
export const DELETE = 'USERS/DELETE';

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        usersList: state.usersList.concat(action.payload),
      };
    case DELETE:
      return {
        usersList: state.usersList.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export default usersReducer;
