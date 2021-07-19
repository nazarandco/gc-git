import React from 'react';

const Expand = ({ children, title, condition, showExpand, hideExpand }) => (
  <div className='expand border'>
    <div className='expand__header'>
      <span className='expand__title'>{title}</span>
      <button
        className={
          condition
            ? 'expand__toggle-btn expand__toggle-btn-off'
            : 'expand__toggle-btn'
        }
        onClick={condition ? hideExpand : showExpand}
      >
        <i className='fas fa-chevron-down'></i>
      </button>
    </div>
    <div className='expand__content'>{condition ? children : null}</div>
  </div>
);

export default Expand;
