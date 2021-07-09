import React from 'react';
import Auth from './Auth.jsx';

const Logout = ({ onLogout }) => {
  return (
    <button className='logout btn' onClick={() => this.onLogout()}>
      Logout
    </button>
  );
};

export default Logout;
