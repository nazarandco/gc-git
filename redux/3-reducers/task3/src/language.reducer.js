import { SET } from './language.actions';

const languageReducer = (state = { language: 'en' }, action) => {
  switch (action.type) {
    case SET:
      return {
        language: action.payload,
      };
    default:
      return state;
  }
};

export default languageReducer;
