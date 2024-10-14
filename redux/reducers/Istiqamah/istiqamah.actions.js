import {setAppLoading, setAppToast} from '../AppLoader/appLoader.actions';
import http from '../../../config/http';
import {ISTIQAMAH_ENDPOINTS} from '../../../config/api';
import * as RootNavigation from '../../../navigation/RootNavigator';
import {TOAST_STATUS} from '../../../shared/constants';

export const ISTIQAMAS_ACTION_TYPES = {
  SET_ISTIQAMAS: 'SET_ISTIQAMAS',
  ADD_ISTAQAMA: 'ADD_ISTAQAMA',
};

export const getAllIstiqamah = () => {
  return async dispatch => {
    try {
      dispatch(setAppLoading(true));
      const allIstiqamah = await http.get(ISTIQAMAH_ENDPOINTS.GET_ALL);
      if (allIstiqamah.data) {
        return dispatch(setIstiqamas(allIstiqamah.data.todo));
      } else {
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteToDo = id => {
  return async dispatch => {
    try {
      dispatch(setAppLoading(true));
      const allIstiqamah = await http.delete(
        ISTIQAMAH_ENDPOINTS.DELETE_SINGLE + `/${id}`,
      );
      if (allIstiqamah.data) {
        dispatch(
          setAppToast({
            title: 'Deleted Successfully!',
            description: 'Istiqamah deleted successfully',
            status: TOAST_STATUS.SUCCESS,
            showToast: true,
          }),
        );
        return dispatch(getAllIstiqamah());
      } else {
        return;
      }
    } catch (err) {
      console.warn('DELETE ERROR', err);
    }
  };
};

export const createNewIstiqamah = payLoad => {
  return async dispatch => {
    try {
      dispatch(setAppLoading(true));
      const create = await http.post(ISTIQAMAH_ENDPOINTS.CREATE_NEW, payLoad);

      if (create?.data?.todo) {
        RootNavigation.goBack();
        return dispatch(setSingleIstiqamas(create.data.todo));
      } else {
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };
};
export const updateToDo = (payLoad, id) => {
  return async dispatch => {
    try {
      dispatch(setAppLoading(true));
      const create = await http.put(
        ISTIQAMAH_ENDPOINTS.UPDATE_TODO + `/${id}`,
        payLoad,
      );

      if (create?.data?.todo) {
        dispatch(
          setAppToast({
            title: 'Updated Successfully!',
            description: 'Istiqamah updated successfully',
            status: TOAST_STATUS.SUCCESS,
            showToast: true,
          }),
        );
        return dispatch(getAllIstiqamah());
      } else {
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const setIstiqamas = payload => {
  return dispatch =>
    dispatch({
      type: ISTIQAMAS_ACTION_TYPES.SET_ISTIQAMAS,
      payload,
    });
};

export const setSingleIstiqamas = payload => {
  return dispatch =>
    dispatch({
      type: ISTIQAMAS_ACTION_TYPES.ADD_ISTAQAMA,
      payload,
    });
};
