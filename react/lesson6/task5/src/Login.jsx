import React from 'react';
import Spinner from './Spinner.jsx';
import './index.scss';

// input: obj
// output: JSX

const Login = ({ onLogin }) => (
  <button className='login btn' onClick={() => onLogin()}>
    Login
  </button>
);

export default Login;
