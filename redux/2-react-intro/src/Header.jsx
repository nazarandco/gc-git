import React from 'react';
import UserMenu from './UserMenu.jsx';

class Header extends React.Component {
  render() {
    return (
      <header class='header'>
        <UserMenu name={this.props.name} avatar_url={this.props.avatar_url} />
      </header>
    );
  }
}

export default Header;
