import { store } from './store';
import { addUser, deleteUser } from './users.actions';

const firstUser = addUser({ id: 76, name: 'Sarah' });
const secondUser = addUser({ id: 73, name: 'Bob' });
const thirdUser = addUser({ id: 8, name: 'Tommy' });

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

const addFunc = (user) => {
  store.dispatch(user);
};
addFunc(firstUser);
addFunc(secondUser);
addFunc(thirdUser);

const deleteFunc = (id) => {
  store.dispatch(deleteUser(id));
};
deleteFunc(73);
// console.log(store.getState());