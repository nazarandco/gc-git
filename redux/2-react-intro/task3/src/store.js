import { createStore } from 'redux';
import reducer from './users.reducer';

export const initialState = {
  usersList: [],
};

export const store = createStore(reducer);
