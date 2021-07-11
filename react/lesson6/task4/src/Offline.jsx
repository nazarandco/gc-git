import React from 'react';
import './index.scss';

const Offline = ({ onStatusOn }) => (
  <>
    <h1 className='status__text'>Offline</h1>
    <button className='status__btn' onClick={() => onStatusOn()}>
      Reconnect
    </button>
  </>
);

export default Offline;
