import { createStore } from 'redux';
import reducer from './users.reducer';

export const initialState = {
  usersList: [],
};

const store = createStore(reducer);

export default store;
