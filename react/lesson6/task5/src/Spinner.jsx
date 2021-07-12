import React from 'react';
import './index.scss';

const Spinner = ({ size }) => (
  <span
    className='spinner'
    style={{ width: `${size}px`, height: `${size}px` }}
  ></span>
);

export default Spinner;
