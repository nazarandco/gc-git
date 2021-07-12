import React from 'react';
import moment from 'moment';

const formatDate = (date) => moment(date).format('D MMM');
const formatTime = (time) => moment(time).format('h:mm');
const formatAmount = (amount) =>
  new Intl.NumberFormat('en-GB').format(amount);

const Transaction = ({ from, to, amount, rate, time }) => (
  <li className='transaction'>
    <span className='transaction__date'>
      {formatDate(new Date('January 10'))}
    </span>
    <span className='transaction__time'>{formatTime(time)}</span>
    <span className='transaction__assets'>{`${from} → ${to}`}</span>
    <span className='transaction__rate'>{rate}</span>
    <span className='transaction__amount'>{formatAmount(amount)}</span>
  </li>
);

export default Transaction;
