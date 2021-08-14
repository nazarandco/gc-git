import { createStore, combineReducers } from 'redux';
import usersListReducer from './users/usersList.reducer';

const reducer = combineReducers({
  users: usersListReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
