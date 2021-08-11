export const ADD = 'USER/ADD';
export const REMOVE = 'USER/REMOVE';

export const setUser = (userData) => {
  return {
    type: ADD,
    payload: userData,
  };
};

export const removeUser = () => {
  return {
    type: REMOVE,
  };
};
