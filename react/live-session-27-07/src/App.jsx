import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Users from './Users.jsx';
import Home from './Home.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <div className='page'>
        <ul className='navigation'>
          <li className='navigation__item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='navigation__item'>
            <Link to='/users'>Users</Link>
          </li>
        </ul>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={Users} />
      </div>
    </BrowserRouter>
  );
};

export default App;
