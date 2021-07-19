import React from 'react';
// import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//     <FontAwesomeIcon icon={faChevronUp} />

const Expand = ({ children, title, condition, showExpand, hideExpand }) => (
  <div className='expand border'>
    <div className='expand__header'>
      <span className='expand__title'>{title}</span>
      <button
        className={
          condition === true
            ? 'expand__toggle-btn expand__toggle-btn-off'
            : 'expand__toggle-btn'
        }
        onClick={condition === true ? hideExpand : showExpand}
      >
        <i className='fas fa-chevron-down'></i>
      </button>
    </div>
    <div className='expand__content'>
      {condition === true ? children : null}
    </div>
  </div>
);

export default Expand;
