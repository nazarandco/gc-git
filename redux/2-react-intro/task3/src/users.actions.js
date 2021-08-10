import { ADD, DELETE } from './users.reducer';

export const addUser = (user) => {
  return {
    type: ADD,
    payload: user,
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};
