import {ISTIQAMAS_ACTION_TYPES} from './istiqamah.actions';

const INITIAL_STATE = {
  istiqamas: [],
};

const IstiqahmaReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case ISTIQAMAS_ACTION_TYPES.SET_ISTIQAMAS: {
      return {
        ...state,
        istiqamas: [...actions.payload],
      };
    }
    case ISTIQAMAS_ACTION_TYPES.ADD_ISTAQAMA: {
      return {
        ...state,
        istiqamas: [...state.istiqamas, actions.payload],
      };
    }
    default:
      return state;
  }
};

export default IstiqahmaReducer;
