import store from './store';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';
import { setUser, removeUser } from './user.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(setLanguage('ukr'));

store.dispatch(addProduct({ id: 76, name: 'milk' }));
store.dispatch(addProduct({ id: 7, name: 'bread' }));
store.dispatch(addProduct({ id: 88, name: 'meat' }));
store.dispatch(removeProduct(76));

store.dispatch(setUser({ name: 'Bob' }));
store.dispatch(setUser({ age: 45 }));
store.dispatch(setUser({ face: 'poker' }));
// store.dispatch(removeUser());
