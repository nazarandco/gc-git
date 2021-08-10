import { ADD, DELETE } from './users.actions';

const usersReducer = (state = { usersList: [] }, action) => {
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
