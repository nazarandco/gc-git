import React from 'react';
// import { UserDataContext } from './userData';

class UserMenu extends React.Component {
  render() {
    return (
      <div class='menu'>
        <span class='menu__greeting'>{`Hello, ${this.props.name}`}</span>
        <img
          alt='User Avatar'
          src={this.props.avatar_url}
          class='menu__avatar'
        />
      </div>
    );
  }
}

// UserMenu.contextType = UserDataContext;

export default UserMenu;
