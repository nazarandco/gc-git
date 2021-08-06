import React from 'react';
import Header from './Header.jsx';
import { UserDataContext } from './userDataContext';

class App extends React.Component {
  state = {
    userData: {
      name: 'Nikola Tesla',
      avatarUrl: 'https://avatars3.githubusercontent.com/u10001',
    },
  };

  render() {
    return (
      <div class='page'>
        <UserDataContext.Provider value={this.state.userData}>
          <Header></Header>
        </UserDataContext.Provider>
      </div>
    );
  }
}

export default App;
