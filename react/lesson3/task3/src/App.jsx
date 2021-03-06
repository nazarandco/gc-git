import React from 'react';
import Comment from './Comment.jsx';

const UserInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars1.githubusercontent.com',
};

const App = () => (
  // <div>
    <Comment
      author={UserInfo}
      text='Good job!'
      date={new Date('2019-01-01T11:32:19.566Z')}
    />
  //   <Comment
  //     user={UserInfo}
  //     text='Hello, world!'
  //     date={new Date('2001-01-01T11:32:19.566Z')}
  //   />
  // </div>
);

export default App;
