import React from 'react';
import Header from './Header.jsx';
import { userData, UserDataContext } from './userData';

class App extends React.Component {
  state = {
    userData: {
      name: userData.name,
      avatar_url: userData.avatar_url,
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

App.contextType = UserDataContext;

export default App;
