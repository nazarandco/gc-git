import React from 'react';
import Auth from './Auth.jsx';

const Login = ({ onLogin }) => {
  return (
    <button className='login btn' onClick={() => onLogin()}>
      Login
    </button>
  );
};

export default Login;
