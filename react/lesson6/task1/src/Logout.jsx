import React from 'react';
import Auth from './Auth.jsx';
import Greeting from './Greeting.jsx';

const Logout = ({ onLogout }) => {
  return (
    <button className='logout btn' onClick={() => onLogout()}>
      Logout
    </button>
  );
};

export default Logout;
