export const ADD = 'USER/ADD';
export const REMOVE = 'USER/REMOVE';

export const addUserData = (userData) => {
  return {
    type: ADD,
    payload: userData,
  };
};

export const removeUserData = () => {
  return {
    type: REMOVE,
  };
};
