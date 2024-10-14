import http from '../../../config/http';
import {setAppLoading} from '../AppLoader/appLoader.actions';

export const SEARCH_ACTIONS = {
  SET_COURSE_SEARCHED: 'SET_COURSE_SEARCHED',
  SET_QUESTION_SEARCHED: 'SET_QUESTION_SEARCHED',
};

export const setSearchedCourse = payload => {
  return dispatch =>
    dispatch({
      type: SEARCH_ACTIONS.SET_COURSE_SEARCHED,
      payload,
    });
};

export const setSearchedQuestion = payload => {
  return dispatch =>
    dispatch({
      type: SEARCH_ACTIONS.SET_QUESTION_SEARCHED,
      payload,
    });
};

export const courseSearchAction = payload => async dispatch => {
  try {
    dispatch(setAppLoading(true));
    const searchRes = await http.post('/courses/search-qa', {title: payload});
    if (!searchRes.data) {
      return;
    }

    dispatch(setSearchedCourse(searchRes?.data?.course));
  } catch (error) {}
};

export const questionSearchAction = payload => async dispatch => {
  try {
    dispatch(setAppLoading(true));
    const searchRes = await http.post('./ask-a-sheikh/search-qa', {
      title: payload,
    });

    if (!searchRes.data) {
      return;
    }
    dispatch(setSearchedQuestion(searchRes?.data?.questions));
  } catch (error) {}
};
