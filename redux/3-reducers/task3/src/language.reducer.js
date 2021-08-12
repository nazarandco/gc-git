import { SET } from './language.actions';
import { initialState } from './store';

const languageReducer = (state = initialState.language, action) => {
  switch (action.type) {
    case SET:
      return action.payload;
    default:
      return state;
  }
};

export default languageReducer;
