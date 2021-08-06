import React from 'react';
import Header from './Header.jsx';
// import { UserDataContext } from './userData';

class App extends React.Component {
  state = {
    userData: {
      name: 'Nikola Tesla',
      avatar_url: 'https://avatars3.githubusercontent.com/u10001',
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

// App.contextType = UserDataContext;

export default App;
