import React from 'react';
import Greeting from './Greeting.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };

    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    // const button = this.state.isLoggedIn
    //   ? <button onClick={this.handleLogout}>Logout</button>
    //   : <button onClick={this.handleLogin}>Login</button>;

    return (
      <div className='panel'>
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn 
        ? (
          <Login onLogin={() => this.onLogin()} />
        ) 
        : (
          <Logout onLogout={() => this.onLogout()} />
        )}
      </div>
    );
  }
}

export default Auth;
