import {COURSES_ACTION_TYPES} from './courses.actions';

const INITIAL_STATE = {
  courses: [],
  selectedCourse: {},
  selectedLesson: {},
  comments: [],
  favoriteCourses: [],
  favoriteVideos: [],
  categories: [],
};

const CoursesReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case COURSES_ACTION_TYPES.SET_COURSES:
      return {
        ...state,
        courses: [...actions.payload],
      };
    case COURSES_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: [...actions.payload],
      };
    case COURSES_ACTION_TYPES.SET_SELECTED_COURSE:
      return {
        ...state,
        selectedCourse: {...actions.payload},
      };

    case COURSES_ACTION_TYPES.SET_SELECTED_LESSON:
      return {
        ...state,
        selectedLesson: {...actions.payload},
      };

    case COURSES_ACTION_TYPES.FAVROITE_COURSES:
      return {
        ...state,
        favoriteCourses: [...actions.payload],
      };
    case COURSES_ACTION_TYPES.FAVROITE_VIDEOS:
      return {
        ...state,
        favoriteVideos: [...actions.payload],
      };

    case COURSES_ACTION_TYPES.SET_COMMENTS:
      return {
        ...state,
        comments: actions.payload,
      };

    default:
      return state;
  }
};

export default CoursesReducer;
