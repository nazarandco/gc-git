import { store, increment, decrement } from './counter';

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
