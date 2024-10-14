import * as RootNavigation from '../../../navigation/RootNavigator';
import http from '../../../config/http';
import { AUTH_ENDPOINTS, USER_ENDPOINTS } from '../../../config/api';
import { setAppLoading, setAppToast } from '../AppLoader/appLoader.actions';
import { setLocalStorage, getLocalStorage } from '../../../shared/functions';
import { STORAGE_KEYS, TOAST_STATUS } from '../../../shared/constants';
import { Alert } from 'react-native';
import { showMessage, hideMessage } from 'react-native-flash-message';

export const AUTH_ACTIONS = {
  SET_USER: '[AUTH] SET_USER',
  LOGOUT_USER: '[AUTH] LOGOUT_USER',
};

export const setUser = payload => {
  return dispatch =>
    dispatch({
      type: AUTH_ACTIONS.SET_USER,
      payload,
    });
};

export const registerAction = payload => async dispatch => {
  try {
    const reqObj = {
      ...payload,
      role: 'student',
      usageType: JSON.stringify({ courseOffer: false, askASheikh: false }),
    };
    dispatch(setAppLoading(true));
    const registerRes = await http.post(AUTH_ENDPOINTS.SIGNUP, reqObj);

    if (registerRes == 'Error: Request failed with status code 301') {
      dispatch(
        setAppToast({
          title: 'User error',
          description: 'User already exist',
          status: TOAST_STATUS.ERROR,
          showToast: true,
        }),
      );
    }

    if (!registerRes.data) return; //show any error

    await setLocalStorage(STORAGE_KEYS.TOKEN, registerRes.data?.token);
    dispatch(setUser(registerRes.data));

    dispatch(
      setAppToast({
        title: 'Login successfully',
        status: TOAST_STATUS.SUCCESS,
        showToast: true,
      }),
    );
    return RootNavigation.navigate('Home');
  } catch (error) { }
};

export const loginAction = payload => async dispatch => {
  try {
    dispatch(setAppLoading(true));
    const loginRes = await http.post(AUTH_ENDPOINTS.LOGIN, payload);
    if (!loginRes.data || loginRes.data == undefined) {
      dispatch(
        setAppToast({
          title: 'Login Error',
          description: 'Email or Password is not correct.',
          status: TOAST_STATUS.ERROR,
          showToast: true,
        }),
      );
    }

    if (loginRes.data.is_blocked) {
      Alert.alert('You are blocked by Admin');
    } else {
      await setLocalStorage(STORAGE_KEYS.TOKEN, loginRes.data.token).then(
        () => {
          dispatch(
            setAppToast({
              title: 'Login successfully',
              status: TOAST_STATUS.SUCCESS,
              showToast: true,
            }),
          );
          dispatch(setUser(loginRes.data));
          RootNavigation.navigate('Home');
        },
      );
    }
  } catch (error) { }
};

export const checkSession = () => {
  return async dispatch => {
    try {
      // dispatch(setAppLoading(true));
      const token = await getLocalStorage(STORAGE_KEYS.TOKEN);

      if (!token) {
        RootNavigation.navigate('Sign-in');
        return;
      } else {
        const sessionRes = await http.post(AUTH_ENDPOINTS.SESSION);
        dispatch(setUser(sessionRes.data));
        RootNavigation.navigate('Home');
        return dispatch(setAppLoading(false));
      }
    } catch (err) { }
  };
};

export const updateAction = payload => async dispatch => {
  try {
    const updateObj = {
      ...payload,
    };
    dispatch(setAppLoading(true));
    const updateRes = await http.put(USER_ENDPOINTS.UPDATE_PROFILE, updateObj);
    if (!updateRes.data) return;
    dispatch(setAppToast({
      title: 'Profile updated successfully',
      status: TOAST_STATUS.SUCCESS,
      showToast: true,
    }),)
    dispatch(setUser(updateRes.data));
    return RootNavigation.navigate('HomeScreen');

  } catch (error) {
    console.log('error: ', error);
  }
};

