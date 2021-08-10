import { initialState } from './store';

export const ADD = 'USERS.REDUCER/ADD';
export const DELETE = 'USERS.REDUCER/DELETE';

export const reducer = (state = initialState, action) => {
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
