import React from 'react';
import UserMenu from './UserMenu.jsx';

class Header extends React.Component {
  render() {
    return (
      <header class='header'>
        <UserMenu />
      </header>
    );
  }
}

export default Header;
