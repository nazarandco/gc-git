import { createStore } from 'redux';
import usersListReducer from './users/usersList.reducer';

const store = createStore(
  usersListReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
