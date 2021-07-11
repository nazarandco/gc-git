import React from 'react';
import './index.scss';

const Online = ({ onStatusOff }) => (
  <h1 className='status__text' onClick={() => onStatusOff()}>
    All good!
  </h1>
);

export default Online;
