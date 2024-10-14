import { AUTH_ACTIONS } from "./auth.actions";

const INITIAL_STATE = {
  user: {},
};

const AuthReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case AUTH_ACTIONS.SET_USER:
      return {
        ...state,
        user: actions.payload,
      };

    default:
      return state;
  }
};

export default AuthReducer;
