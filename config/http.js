import axios from 'axios';
import {
  setAppLoading,
  setAppToast,
} from '../redux/reducers/AppLoader/appLoader.actions';
import {STORAGE_KEYS, TOAST_STATUS} from '../shared/constants';
import {getLocalStorage, removeLocalStorage} from '../shared/functions';

import {store} from '../redux/store';

const BASE_URL = `https://nk.digitalmotion.us/api/v1`;
// const BASE_URL = `http://192.168.18.5:4000/api/v1`;
// is_block
// http://65.108.48.164/

const http = axios.create({
  baseURL: BASE_URL,
});

http.interceptors.request.use(
  async config => {
    //token
    const token = (await getLocalStorage(STORAGE_KEYS.TOKEN)) || '';
    config.headers.authorization = `Bearer ${token}`;
    return config;
  },
  err => Promise.reject(err),
);

const ResponseInterceptor = response => {
  store.dispatch(setAppLoading(false));
  return response;
};

http.interceptors.response.use(ResponseInterceptor, err => {
  const error = err?.response?.data || err;
  store.dispatch(setAppLoading(false));
  if (err?.response?.status === 401) {
    //unthorized user
    removeLocalStorage(STORAGE_KEYS.TOKEN);
    // RootNavigation.navigate('Sign-in');
  }

  if (error?.message) {
    // return store.dispatch(
    //   setAppToast({
    //     title: 'Error',
    //     description: error?.message,
    //     status: TOAST_STATUS.ERROR,
    //     showToast: true,
    //   }),
    // );
  }

  return err;
});

export default http;
