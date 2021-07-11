import React from 'react';
import './index.scss';

const Offline = ({ onStatusOn }) => (
  <div className='status'>
    <h1 className='status__text'>Offline</h1>
    <button className='status__btn' onClick={() => onStatusOn()}>
      Reconnect
    </button>
  </div>
);

export default Offline;
