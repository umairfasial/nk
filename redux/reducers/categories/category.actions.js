import http from '../../../config/http';
import {CATEGORY_ENDPOINTS} from '../../../config/api';
import {setAppLoading} from '../AppLoader/appLoader.actions';

export const CATEGORY_ACTION_TYPES = {
  SET_CATEGORIES: '[CATEGORY] SET_CATEGORIES',
  SET_QUESTIONS: '[CATEGORY] SET_QUESTIIONS',
  SET_LIST_ASSESMENT: '[CATEGORY] SET_LIST_ASSESMENT',
  SET_VIEW_ASSESSMENT: '[CATEGORY] SET_VIEW_ASSESSMENT',
  GET_IMAGES: 'GET_IMAGES',
};

export const setCategories = payload => {
  return dispatch =>
    dispatch({
      type: CATEGORY_ACTION_TYPES.SET_CATEGORIES,
      payload,
    });
};

export const setQuestiions = payload => {
  return dispatch =>
    dispatch({
      type: CATEGORY_ACTION_TYPES.SET_QUESTIONS,
      payload,
    });
};
export const setListAssesment = payload => {
  return dispatch =>
    dispatch({
      type: CATEGORY_ACTION_TYPES.SET_LIST_ASSESMENT,
      payload,
    });
};

export const setViewAssesment = payload => {
  return dispatch =>
    dispatch({
      type: CATEGORY_ACTION_TYPES.SET_VIEW_ASSESSMENT,
      payload,
    });
};

export const setDefaultImages = payload => {
  return dispatch =>
    dispatch({
      type: CATEGORY_ACTION_TYPES.GET_IMAGES,
      payload,
    });
};

export const getCategories = () => {
  return async dispatch => {
    try {
      dispatch(setAppLoading(true));
      const categories = await http.get(CATEGORY_ENDPOINTS.GET_ALL);
      dispatch(setCategories([...categories.data.categories]));
    } catch (err) {}
  };
};

export const getQuestions = () => {
  return async dispatch => {
    try {
      dispatch(setAppLoading(true));
      const questions = await http.get(CATEGORY_ENDPOINTS.GET_QUESTIONS);

      dispatch(setQuestiions([...questions?.data?.questionnaire]));
    } catch (err) {
      console.log('ERROR', err);
    }
  };
};

export const getListAssement = () => {
  return async dispatch => {
    try {
      dispatch(setAppLoading(true));
      const listAssesment = await http.get(
        CATEGORY_ENDPOINTS.GET_LIST_ASSESMENT,
      );

      if (!listAssesment?.data) return;

      dispatch(setListAssesment([...listAssesment?.data?.assessments]));
    } catch (err) {
      console.log('ERROR', err);
    }
  };
};

export const getViewAssessment = id => {
  return async dispatch => {
    try {
      dispatch(setAppLoading(true));
      const viewAssessments = await http.get(
        CATEGORY_ENDPOINTS.GET_VIEW_ASSESSMENT + `/${id}`,
      );
      dispatch(setViewAssesment(viewAssessments?.data?.data?.assessment));
    } catch (err) {
      console.log('ERROR', err);
    }
  };
};

export const getDefaultImages = () => {
  return async dispatch => {
    try {
      dispatch(setAppLoading(true));
      const categories = await http.get(CATEGORY_ENDPOINTS.GET_DEFAULT_IMAGES);
      dispatch(setDefaultImages(categories?.data));
    } catch (err) {}
  };
};
