import React, { useEffect, useState } from 'react';
import moment from 'moment';

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

const formatDate = (date) => moment(date).format('LTS');

const Clock = ({ location, offset }) => {
  const [currentLocation, setCurrentLocation] = useState(location);
  const [currentOffset, setCurrentOffset] = useState(
    formatDate(getTimeWithOffset(offset))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffset(formatDate(getTimeWithOffset(offset)));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='clock'>
      <div className='clock__location'>{currentLocation}</div>
      <div className='clock__time'>{currentOffset}</div>
    </div>
  );
};

export default Clock;
