import React from 'react';
import './index.scss';

const Online = ({ onStatusOff }) => (
  <div className='status'>
    <h1 className='status__text' onClick={() => onStatusOff()}>
      All good!
    </h1>
  </div>
);

export default Online;
