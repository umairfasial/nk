import {ILMA_ACTION_TYPES} from './ilma.actions';

const INITIAL_STATE = {
  ilmaBytes: [],
  ilmaVideo: [],
  ilmaAllVideos: [],
  ilmaDefaultVideo: '',
};

const ilmaReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case ILMA_ACTION_TYPES.SET_ILMA_BYTES:
      return {
        ...state,
        ilmaBytes: actions.payload,
      };

    case ILMA_ACTION_TYPES.SET_ILMA_VIDEO:
      return {
        ...state,
        ilmaVideo: actions.payload,
      };
    case ILMA_ACTION_TYPES.SET_ILMA_ALL_VIDEO:
      return {
        ...state,
        ilmaAllVideos: actions.payload,
      };
    case ILMA_ACTION_TYPES.SET_ILMA_DEFAULT_VIDEO:
      return {
        ...state,
        ilmaDefaultVideo: actions.payload,
      };

    default:
      return state;
  }
};

export default ilmaReducer;
