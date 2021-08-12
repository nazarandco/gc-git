import { SET } from './language.actions';

const languageReducer = (state = 'en', action) => {
  switch (action.type) {
    case SET:
      return action.payload;
    default:
      return state;
  }
};

export default languageReducer;
