export const NEXT_PAGE = 'USERS.LIST/NEXT_PAGE';
export const PREV_PAGE = 'USERS.LIST/PREV_PAGE';

export const goNext = () => {
  return {
    type: NEXT_PAGE,
  };
};

export const goPrev = () => {
  return {
    type: PREV_PAGE,
  };
};
