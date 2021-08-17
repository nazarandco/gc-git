export const UPDATE_FILTER = 'USERS/UPDATE_FILTER';

export const updateFilter = (filterText) => {
  return {
    type: UPDATE_FILTER,
    payload: {
      newFilterText: filterText,
    },
  };
};
