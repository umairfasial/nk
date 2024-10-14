import { ASK_A_SHEIKH_ACTION_TYPES } from "./askASheikh.action";

const INITIAL_STATE = {
  topic: {},
  selectedQuestion: {},
  shayookh: [],
};

const AskASheikhReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case ASK_A_SHEIKH_ACTION_TYPES.SET_TOPIC:
      return {
        ...state,
        topic: actions.payload,
      };

    case ASK_A_SHEIKH_ACTION_TYPES.SET_SELECTED_QUESTION:
      return {
        ...state,
        selectedQuestion: actions.payload,
      };

    case ASK_A_SHEIKH_ACTION_TYPES.SET_SHAYOOKH:
      return {
        ...state,
        shayookh: actions.payload,
      };

    default:
      return state;
  }
};

export default AskASheikhReducer;
