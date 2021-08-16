import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ConnectedUsersList from './users/UsersList';

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedUsersList />
    </Provider>
  );
};

export default App;
