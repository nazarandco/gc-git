import React from 'react';
import './index.scss';

const Logout = ({ onLogout }) => (
  <button className='logout btn' onClick={() => onLogout()}>
    Logout
  </button>
);

export default Logout;
