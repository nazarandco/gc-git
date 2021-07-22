import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  useEffect(() => {
    const handleOnline = () => {
      setStatus('online');
    };
    const handleOffline = () => {
      setStatus('offline');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline('online'));
      window.removeEventListener('offline', handleOffline('offline'));
    };
  }, []);

  return status === 'online' ? (
    <div className='status'>{status}</div>
  ) : (
    <div className='status status_offline'>{status}</div>
  );
};

export default ConnectionStatus;
