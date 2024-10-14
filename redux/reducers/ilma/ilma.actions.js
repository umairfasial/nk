import {ILMA_ENDPOINTS} from '../../../config/api';
import http from '../../../config/http';

export const ILMA_ACTION_TYPES = {
  SET_ILMAS: '[ILMAS] SET_ILMAS',
  SET_ILMA_BYTES: '[ILMAS] SET_ILMA_BYETS',
  SET_ILMA_VIDEO: '[ILMAS] SET_ILMA_VIDEO',
  SET_ILMA_DEFAULT_VIDEO: '[ILMAS] SET_ILMA_DEFAULT_VIDEO',
  SET_ILMA_ALL_VIDEO: '[ILMAS] SET_ILMA_ALL_VIDEO',
};

export const setilmaByets = payload => {
  return dispatch =>
    dispatch({
      type: ILMA_ACTION_TYPES.SET_ILMA_BYTES,
      payload,
    });
};

export const setilmaDefaultVideo = payload => {
  return dispatch =>
    dispatch({
      type: ILMA_ACTION_TYPES.SET_ILMA_DEFAULT_VIDEO,
      payload,
    });
};

export const setilmaVideo = payload => {
  return dispatch =>
    dispatch({
      type: ILMA_ACTION_TYPES.SET_ILMA_VIDEO,
      payload,
    });
};

export const setilmaAllVideo = payload => {
  return dispatch =>
    dispatch({
      type: ILMA_ACTION_TYPES.SET_ILMA_ALL_VIDEO,
      payload,
    });
};

export const getIlmas = () => {
  return async dispatch => {
    try {
      const ilmasRes = await http.get(ILMA_ENDPOINTS.GET_ILMAS);

      if (!ilmasRes.data) return;

      const ilmaByets = ilmasRes.data.ilmas?.filter(
        ilma => ilma.type === 'text' || ilma.type === 'pdf',
      );

      dispatch(setilmaByets(ilmaByets || []));
    } catch (err) {}
  };
};

export const getIlmasLatestVideo = () => {
  return async dispatch => {
    try {
      const ilmasVideoRes = await http.get(
        ILMA_ENDPOINTS.GET_ILMAS_TODAY_VIDEO,
      );

      if (!ilmasVideoRes?.data) return;

      dispatch(setilmaVideo(ilmasVideoRes?.data?.ilmas || []));
    } catch (err) {}
  };
};

export const getIlmasDefaultVideo = () => {
  return async dispatch => {
    try {
      const ilmasVideoRes = await http.get(
        ILMA_ENDPOINTS.GET_ILMAS_DEFAULT_VIDEO,
      );
      if (!ilmasVideoRes?.data) return;

      dispatch(setilmaDefaultVideo(ilmasVideoRes?.data?.ilmas || {}));
    } catch (err) {}
  };
};

export const getIlmasAllVideos = () => {
  return async dispatch => {
    try {
      const ilmasAllVideoRes = await http.get(
        ILMA_ENDPOINTS.GET_ILMAS_ALL_VIDEOS,
      );
      if (!ilmasAllVideoRes?.data) return;

      dispatch(setilmaAllVideo(ilmasAllVideoRes?.data?.ilmas || []));
    } catch (err) {}
  };
};
