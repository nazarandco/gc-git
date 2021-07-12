import React from 'react';
import Offline from './Offline.jsx';
import Online from './Online.jsx';
import './index.scss';

const Status = ({ isOnline }) => (isOnline ? <Online /> : <Offline />);

export default Status;
