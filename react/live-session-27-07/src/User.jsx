import React, { useEffect, useState } from 'react';

const baseUrl = 'https://api.github.com/users';

class User extends React.Component {
  state = {
    userName: null,
    userLocation: null,
    userAvatar: null,
  };

  componentDidMount() {
    const userId = this.props.match.params.userId;
    fetch(`${baseUrl}/${userId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error();
      })
      .then(({ avatar_url, name, location }) => {
        this.setState({
          userName: name,
          userLocation: location,
          userAvatar: avatar_url,
        });
      });
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps)
    if(this.props.match.params.userId !== prevProps.match.params.userId) {
      fetch(`${baseUrl}/${this.props.match.params.userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(taskData),
      }).then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error();
      })
      .then(({ avatar_url, name, location }) => {
        this.setState({
          userName: name,
          userLocation: location,
          userAvatar: avatar_url,
        });
      });
  }
    }
  }

  render() {
    const { userAvatar, userName, userLocation } = this.state;
    if (!userAvatar || !userName || !userLocation) {
      return null;
    }
    return (
      <div className='user'>
        <img
          alt='User Avatar'
          src={this.state.userAvatar}
          className='user__avatar'
        />
        <div className='user__info'>
          <span className='user__name'>{this.state.userName}</span>
          <span className='user__location'>{this.state.userLocation}</span>
        </div>
      </div>
    );
  }
}

// const User = () => {
//   return (
//     <div className='user'>
//       <img
//         alt='User Avatar'
//         src='https://avatars1.githubusercontent.com/u/9919?v=4'
//         className='user__avatar'
//       />
//       <div className='user__info'>
//         <span className='user__name'>GitHub</span>
//         <span className='user__location'>San Francisco,CA</span>
//       </div>
//     </div>
//   );
// };

export default User;
