import React from 'react';
import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  useEffect(() => {
    const handleStatus = (currentStatus) => {
      setStatus(currentStatus);
    };
    window.addEventListener('online', handleStatus('online'));
    window.addEventListener('offline', handleStatus('offline'));

    return () => {
      window.removeEventListener('online', handleStatus('online'));
      window.removeEventListener('offline', handleStatus('offline'));
    };
  });

  return status === 'online' ? (
    <div className='status'>{status}</div>
  ) : (
    <div className='status status_offline'>{status}</div>
  );
};


export default ConnectionStatus;
