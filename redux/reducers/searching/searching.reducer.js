import {SEARCH_ACTIONS} from './searching.actions';

const INITIAL_STATE = {
  courseSearched: [],
  questionSearched: [],
};

const SearchReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case SEARCH_ACTIONS.SET_COURSE_SEARCHED:
      return {
        ...state,
        courseSearched: actions.payload,
      };
    case SEARCH_ACTIONS.SET_QUESTION_SEARCHED:
      return {
        ...state,
        questionSearched: actions.payload,
      };

    default:
      return state;
  }
};

export default SearchReducer;
