import React from 'react';
import Greeting from './Greeting.jsx';

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
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
        {this.state.isLoggedIn ? (
          <button className='logout btn' onClick={this.onLogout}>
            Logout
          </button>
        ) : (
          <button className='login btn' onClick={this.onLogin}>
            Login
          </button>
        )}
      </div>
    );
  }
}

export default Auth;
