import { createStore } from 'redux';
import { userReducer } from './users.reducer';

export const initialState = {
  usersList: [],
};

export const store = createStore(userReducer);
