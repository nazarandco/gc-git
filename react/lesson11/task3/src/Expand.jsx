import React from 'react';
import PropTypes from 'prop-types';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Expand = ({ children, title, condition, showExpand, hideExpand }) => (
  <div className='expand border'>
    <div className='expand__header'>
      <span className='expand__title'>{title}</span>
      <button
        className={condition === true ? 'button-clicked' : 'expand__toggle-btn'}
        onClick={condition === true ? hideExpand : showExpand}
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
    </div>
    <div className='expand__content'>
      {condition === true ? children : null}
    </div>
  </div>
);

export default Expand;
