import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ConnectedUserList from './users/UsersList';

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedUserList />
    </Provider>
  );
};

export default App;
