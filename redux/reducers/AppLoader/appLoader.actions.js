import { TOAST_STATUS } from "../../../shared/constants";

export const APP_LOADER_ACTION_TYPES = {
  APP_LOADING: "[App] APP_LOADING",
  APP_TOAST: "[App] APP_TOAST",
};

const ToastState = {
  status: TOAST_STATUS.SUCCESS,
  title: "",
  description: "",
  showToast: false,
};

export const setAppLoading = (loading) => {
  return (dispatch) => {
    return dispatch({
      type: APP_LOADER_ACTION_TYPES.APP_LOADING,
      payload: loading,
    });
  };
};

export const setAppToast = (payload = ToastState) => {
  return (dispatch) => {
    return dispatch({
      type: APP_LOADER_ACTION_TYPES.APP_TOAST,
      payload,
    });
  };
};
