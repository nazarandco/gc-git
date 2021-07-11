import React from 'react';
import Offline from './Offline.jsx';
import Online from './Online.jsx';
import './index.scss';

const Status = ({ isOnline }) => {
  if (isOnline === false) {
    return <Online />;
  }

  if (isOnline === true) {
    return <Offline />;
  }
};

export default Status;
