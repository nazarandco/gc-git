import React from 'react';
import Offline from './Offline.jsx';
import Online from './Online.jsx';
import './index.scss';

const Status = ({ isOnline }) => {
  if (isOnline === true) {
    return <Online />;
  } 
  
  if (isOnline === false) {
    return <Offline />;
  }
};

export default Status;
