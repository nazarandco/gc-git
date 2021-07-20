import React from 'react';

const Pagination = ({
  currentPage,
  goNext,
  goPrev,
  totalItems,
  itemsPerPage,
}) => {

  const isPrevPageAvailable = currentPage > 1;
  const isNextPageAvailable = totalItems % itemsPerPage === 0;

  return (
    <div className='pagination'>
      {(isPrevPageAvailable && (
        <button className='btn' onClick={goPrev}>
          {'←'}
        </button>
      )) ||
        (!isPrevPageAvailable && (
          <button className='btn' onClick={goPrev} disabled>
            {''}
          </button>
        ))}
      <span className='pagination__page'>{currentPage}</span>
      {(isNextPageAvailable && (
        <button className='btn' onClick={goNext}>
          {'→'}
        </button>
      )) ||
        (!isNextPageAvailable && (
          <button className='btn' onClick={goNext} disabled>
            {''}
          </button>
        ))}
    </div>
  );
};

export default Pagination;
