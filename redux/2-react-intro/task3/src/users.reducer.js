import { addUser, deleteUser } from './users.actions';
import { addFunc } from '.';

const initialState = {
  usersList: [],
};

export const ADD = 'USERS.REDUCER/ADD';
export const DELETE = 'USERS.REDUCER/DELETE';

export const userReducer = (state = initialState, action) => {
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
