import * as RootNavigation from '../../../navigation/RootNavigator';
import http from '../../../config/http';
import {TOAST_STATUS} from '../../../shared/constants';
import {ASK_A_SHEIKH_ENDPOINTS} from '../../../config/api';
import {setAppLoading, setAppToast} from '../AppLoader/appLoader.actions';

export const ASK_A_SHEIKH_ACTION_TYPES = {
  SET_TOPIC: '[ASK_A_SHEIKH] SET_TOPIC',
  SET_SELECTED_QUESTION: '[ASK_A_SHEIKH] SET_SELECTED_QUESTION',
  SET_SHAYOOKH: '[ASK_A_SHEIKH] SET_SHAYOOKH',
};

export const setTopic = payload => {
  return dispatch =>
    dispatch({
      type: ASK_A_SHEIKH_ACTION_TYPES.SET_TOPIC,
      payload,
    });
};

export const setSelectedQuestion = payload => {
  return dispatch =>
    dispatch({
      type: ASK_A_SHEIKH_ACTION_TYPES.SET_SELECTED_QUESTION,
      payload,
    });
};

export const setShayookh = payload => {
  return dispatch =>
    dispatch({
      type: ASK_A_SHEIKH_ACTION_TYPES.SET_SHAYOOKH,
      payload,
    });
};

export const getQuestions = topic => {
  return async dispatch => {
    try {
      const category_id = topic.category_id;

      if (!category_id) {
        return setAppToast({
          title: 'Error',
          description: 'Please select topic',
          status: TOAST_STATUS.ERROR,
          showToast: true,
        });
      }

      dispatch(setAppLoading(true));
      const questions = await http.get(
        `${ASK_A_SHEIKH_ENDPOINTS.GET_ALL}/${category_id}`,
      );
      if (!questions.data) return;

      const _topic = {
        ...topic,
        questions: [...questions.data.questions],
      };
      await dispatch(setTopic(_topic));

      return RootNavigation.navigate('AskASheikhQuestions', {item: topic});
    } catch (err) {}
  };
};

export const addQuestion = payload => {
  return async (dispatch, getState) => {
    try {
      dispatch(setAppLoading(true));
      const questionRes = await http.post(
        ASK_A_SHEIKH_ENDPOINTS.ADD_QUESTION,
        payload,
      );
      const topic = {...getState().askASheikh.topic};
      const questionLists = [...topic.questions];
      questionLists.push(questionRes.data);
      questionLists.reverse();
      topic.questions = [...questionLists];
      return await dispatch(setTopic(topic));
    } catch (err) {}
  };
};

export const replyToQuestion = payload => {
  return async (dispatch, getState) => {
    try {
      // dispatch(setAppLoading(true));
      const replyRes = await http.post(
        ASK_A_SHEIKH_ENDPOINTS.REPLY_TO_QUESTION,
        payload,
      );

      if (!replyRes.data) return;

      const _selectedQuestion = {...getState().askASheikh.selectedQuestion};
      const discussions = [..._selectedQuestion?.discussions];
      const data = {
        ...replyRes.data,
        user: {...getState().auth.user},
      };
      discussions.push(data);

      _selectedQuestion.discussions = [...discussions];
      return dispatch(setSelectedQuestion(_selectedQuestion));
    } catch (err) {}
  };
};

export const getShayookh = () => {
  return async dispatch => {
    try {
      dispatch(setAppLoading(true));
      const shayookhRes = await http.get(ASK_A_SHEIKH_ENDPOINTS.GET_SHOYOOKH);

      if (!shayookhRes.data) return;

      return dispatch(setShayookh([...shayookhRes.data.allInstructors]));
    } catch (err) {}
  };
};
