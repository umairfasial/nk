import {CATEGORY_ACTION_TYPES} from './category.actions';

const INITIAL_STATE = {
  categories: [],
  questions: [],
  listAssesment: [],
  viewAssessment: {},
  defaultImages: {},
};

const CategoryReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: [...actions.payload],
      };

    case CATEGORY_ACTION_TYPES.SET_QUESTIONS:
      return {
        ...state,
        questions: [...actions.payload],
      };
    case CATEGORY_ACTION_TYPES.SET_LIST_ASSESMENT:
      return {
        ...state,
        listAssesment: [...actions.payload],
      };
    case CATEGORY_ACTION_TYPES.SET_VIEW_ASSESSMENT:
      return {
        ...state,
        viewAssessment: {...actions.payload},
      };
    case CATEGORY_ACTION_TYPES.GET_IMAGES:
      return {
        ...state,
        defaultImages: {...actions.payload},
      };

    default:
      return state;
  }
};

export default CategoryReducer;
