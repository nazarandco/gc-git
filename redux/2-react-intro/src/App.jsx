import React from 'react';
import Header from './Header.jsx';
import { UserDataContext } from './userData';

class App extends React.Component {
  state = {
    name: this.context.name,
    avatar_url: this.context.avatar_url,
  };

  render() {
    return (
      <div class='page'>
        <Header name={this.state.name} avatar_url={this.state.avatar_url} />
      </div>
    );
  }
}

App.contextType = UserDataContext;

export default App;
