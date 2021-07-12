import React from 'react';
import './index.scss';

// input: obj
// output: JSX

const Login = ({ onLogin }) => (
  <button className='login btn' onClick={() => onLogin()}>
    Login
  </button>
);

export default Login;
