import store from './store';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';
import { addUserData, removeUserData } from './user.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(setLanguage('ukr'));

store.dispatch(addProduct({ id: 76, name: 'milk' }));
store.dispatch(addProduct({ id: 7, name: 'bread' }));
store.dispatch(addProduct({ id: 88, name: 'meat' }));
store.dispatch(removeProduct(76));

store.dispatch(addUserData({ name: 'Bob' }));
store.dispatch(addUserData({ age: 45 }));
store.dispatch(addUserData({ face: 'poker' }));
store.dispatch(removeUserData());
