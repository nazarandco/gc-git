import React from 'react';
import Greeting from './Greeting.jsx';

const UserInfo = {
  firstName: 'John',
  lastName: 'Doe',
  birthDate: new Date('2004-01-01T11:11:11.819Z')
};

const App = () => (
  <Greeting
    userData={UserInfo}
  />
);

export default App;
