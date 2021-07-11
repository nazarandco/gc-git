import React from 'react';
import Offline from './Offline.jsx';
import Online from './Online.jsx';
import './index.scss';

const Status = ({ isOffline }) => {
  if (isOffline === false) {
    return <Online />;
  } 
  
  if (isOffline === true) {
    return <Offline />;
  }
};

export default Status;
