import {APP_LOADER_ACTION_TYPES} from './appLoader.actions';

const INITIAL_STATE = {
  loading: false,
  toast: {
    showToast: false,
    title: '',
    description: '',
    type: 'success',
  },
};

const AppReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case APP_LOADER_ACTION_TYPES.APP_LOADING:
      return {
        ...state,
        loading: actions.payload,
      };

    case APP_LOADER_ACTION_TYPES.APP_TOAST:
      return {
        ...state,
        toast: {...actions.payload},
      };

    default:
      return state;
  }
};

export default AppReducer;
