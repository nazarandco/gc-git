import React from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';
import './index.scss';

class Auth extends React.Component {
  state = {
    isLoggedIn: false,
    isLogging: false,
  };

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  onLogin = () => {
    this.setState({
      isLogging: true,
    });

    setTimeout(
      () =>
        this.setState({
          isLoggedIn: true,
          isLogging: false,
        }),
      2000
    );
  };

  render() {
    if (this.state.isLogging) {
      return <Spinner size={30} />;
    }
    return this.state.isLoggedIn ? (
      <Logout onLogout={this.onLogout} />
    ) : (
      <Login onLogin={this.onLogin} />
    );
  }
}

export default Auth;
