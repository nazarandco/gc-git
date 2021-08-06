import React from 'react';
import { UserDataContext } from './userDataContext';

class UserMenu extends React.Component {
  render() {
    return (
      <div class='menu'>
        <span class='menu__greeting'>{`Hello, ${this.context.name}`}</span>
        <img
          alt='User Avatar'
          src={this.context.avatar_url}
          class='menu__avatar'
        />
      </div>
    );
  }
}

UserMenu.contextType = UserDataContext;

export default UserMenu;
