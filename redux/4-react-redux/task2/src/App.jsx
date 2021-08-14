import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ConnectedUsers from './users/Users';

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedUsers />
    </Provider>
  );
};

export default App;
