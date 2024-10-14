import * as RootNavigation from '../../../navigation/RootNavigator';
import {setAppLoading, setAppToast} from '../AppLoader/appLoader.actions';
import http from '../../../config/http';
import {
  CATEGORY_ENDPOINTS,
  COURSES_ENDPOINTS,
  LESSONS_ENDPOINTS,
} from '../../../config/api';
import {TOAST_STATUS} from '../../../shared/constants';

export const COURSES_ACTION_TYPES = {
  SET_COURSES: '[COURSES] SET_COURSES',
  SET_SELECTED_COURSE: '[COURSES] SET_SELECTED_COURSE',
  SET_SELECTED_LESSON: '[COURSES] SET_SELECTED_LESSON',
  SET_COMMENTS: '[COURSES] SET_COMMENTS',
  FAVROITE_COURSES: '[COURSES] FAVORITE_COURSES',
  SET_CATEGORIES: '[COURSES] SET_CATEGORIES',
  FAVROITE_VIDEOS: '[COURSES] FAVROITE_VIDEOS',
};

export const setCourses = payload => {
  return dispatch =>
    dispatch({
      type: COURSES_ACTION_TYPES.SET_COURSES,
      payload,
    });
};

export const setCategories = payload => {
  return dispatch =>
    dispatch({
      type: COURSES_ACTION_TYPES.SET_CATEGORIES,
      payload,
    });
};

export const setSelectedLesson = payload => {
  return dispatch =>
    dispatch({
      type: COURSES_ACTION_TYPES.SET_SELECTED_LESSON,
      payload,
    });
};

export const setComments = payload => {
  return dispatch =>
    dispatch({
      type: COURSES_ACTION_TYPES.SET_COMMENTS,
      payload,
    });
};

export const getAllCourse = () => {
  return async dispatch => {
    try {
      dispatch(setAppLoading(true));
      const courses = await http.get(COURSES_ENDPOINTS.GET_ALL_COURSES);

      if (!courses.data || !courses?.data?.categories?.length) return;

      const coursesList = [];
      for (const course of courses.data.categories) {
        const _course = {...course};
        if (_course?.courses) {
          _course.data = [...course.courses];
          delete _course.courses;
          coursesList.push(_course);
        }
      }

      return dispatch(setCourses(coursesList));
    } catch (err) {
      console.log('ERROR ', err);
    }
  };
};

export const getAllCategories = () => {
  return async dispatch => {
    try {
      dispatch(setAppLoading(true));
      const categories = await http.get(CATEGORY_ENDPOINTS.GET_ALL);
    } catch (err) {
      console.log('ERROR ', err);
    }
  };
};

export const getSingleCourse = course_id => {
  return async dispatch => {
    try {
      dispatch(setAppLoading(true));
      const course = await http.get(
        `${COURSES_ENDPOINTS.GET_COURSE}/${course_id}`,
      );

      if (!course.data) {
        return;
      }

      dispatch({
        type: COURSES_ACTION_TYPES.SET_SELECTED_COURSE,
        payload: course.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const addRemoveFavoriteCourse = payload => {
  return async (dispatch, getState) => {
    try {
      const reqBody = {
        course_id: payload?.course_id,
      };

      //slient add to favorite list
      const _favoriteCourses = [...getState()?.course?.favoriteCourses];
      const [isExists] = _favoriteCourses.filter(
        c => c?.course_id === payload?.course_id,
      );

      if (!isExists) {
        _favoriteCourses.push(payload?.course);
        dispatch({
          type: COURSES_ACTION_TYPES.FAVROITE_COURSES,
          payload: _favoriteCourses,
        });
      } else {
        const _removedFavoriteCourse = _favoriteCourses.filter(
          c => c?.course_id !== payload?.course_id,
        );
        dispatch({
          type: COURSES_ACTION_TYPES.FAVROITE_COURSES,
          payload: _removedFavoriteCourse,
        });
      }

      const response = await http.post(
        COURSES_ENDPOINTS.ADD_REMOVE_FAVORITE_COURSE,
        reqBody,
      );

      if (!response.data) return;
    } catch (err) {}
  };
};

export const getFavoriteCourses = () => {
  return async (dispatch, getState) => {
    try {
      const favoriteCourses = await http.get(
        COURSES_ENDPOINTS.GET_FAVORITE_COURSE,
      );

      if (!favoriteCourses.data) return;

      dispatch({
        type: COURSES_ACTION_TYPES.FAVROITE_COURSES,
        payload: favoriteCourses.data.courses,
      });
    } catch (err) {
      console.log('err: ', err);
    }
  };
};

export const addRemoveFavoriteVideo = payload => {
  return async (dispatch, getState) => {
    try {
      const response = await http.post(
        COURSES_ENDPOINTS.ADD_REMOVE_FAVORITE_VIDEO,
        payload,
      );
      if (!response.data) return;
    } catch (err) {}
  };
};

export const getFavoriteVideo = () => {
  return async (dispatch, getState) => {
    try {
      const favoriteCourses = await http.get(
        COURSES_ENDPOINTS.GET_FAVORITE_VIDEO,
      );
      if (!favoriteCourses.data) return;

      dispatch({
        type: COURSES_ACTION_TYPES.FAVROITE_VIDEOS,
        payload: favoriteCourses?.data?.favourite_videos,
      });
    } catch (err) {
      console.log('err: ', err);
    }
  };
};

export const updateLessonWatchTime = payload => {
  return async (dispatch, getState) => {
    try {
      const lessonWatchTime = await http.put(
        LESSONS_ENDPOINTS.UPDATE_WATCH_TIME,
        payload,
      );

      if (!lessonWatchTime.data) return;

      const courses = [...getState().course.courses];
      const selectedCourse = {...getState().course.selectedCourse};
      if (!selectedCourse) return;

      const lessons = [...selectedCourse.lessons];
      const [currentLesson] = lessons.filter(
        lesson => lesson.lesson_id === payload.currentLessonId,
      );
      if (!currentLesson) return;
      currentLesson.watch_time = payload.watch_time;
      currentLesson.video_length = payload.video_length;
      const indexOfCurrentLesson = lessons.findIndex(
        lesson => lesson.lesson_id === payload.currentLessonId,
      );
      if (indexOfCurrentLesson === -1) return;

      lessons[indexOfCurrentLesson] = currentLesson;
      selectedCourse.lessons = [...lessons];
      const indexOfSelectedCourse = courses.findIndex(
        course => course.course_id === selectedCourse.course_id,
      );
      if (indexOfSelectedCourse === -1) return;

      courses[indexOfSelectedCourse] = selectedCourse;
      return dispatch(setCourses([...courses]));
    } catch (err) {}
  };
};

export const getComments = () => {
  return async (dispatch, getState) => {
    try {
      const selectedLesson = {...getState().course.selectedLesson};
      const comments = await http.get(
        `${LESSONS_ENDPOINTS.GET_COMMENTS}/${selectedLesson.lesson_id}`,
      );

      dispatch(setComments([...comments.data.commentList]));
    } catch (err) {}
  };
};

export const addComment = payload => {
  return async (dispatch, getState) => {
    try {
      dispatch(setAppLoading(true));
      const newComment = await http.post(
        LESSONS_ENDPOINTS.ADD_COMMENT,
        payload,
      );

      //optimistic update
      const currentUser = getState().auth.user;
      const comments = [...getState().course.comments];
      const data = {
        ...newComment.data,
        user: {...currentUser},
        comment_replies: [],
      };
      comments.push(data);
      return dispatch(setComments([...comments]));
    } catch (err) {}
  };
};

export const addCommentReply = payload => {
  return async (dispatch, getState) => {
    try {
      dispatch(setAppLoading(true));
      const newCommentReply = await http.post(
        LESSONS_ENDPOINTS.ADD_COMMENT_REPLY,
        payload,
      );

      //optimistic update
      const currentUser = getState().auth.user;
      const comments = [...getState().course.comments];
      const [selectedComment] = comments.filter(
        c => c.comment_id === payload.comment_id,
      );
      if (!selectedComment) return;

      const indexOfSelectedComment = comments.indexOf(selectedComment);

      if (indexOfSelectedComment === -1) return;
      const commentReplies = [...selectedComment.comment_replies];
      const data = {
        ...newCommentReply.data,
        user: {...currentUser},
      };
      commentReplies.push(data);
      selectedComment.comment_replies = commentReplies;
      comments[indexOfSelectedComment] = selectedComment;

      return dispatch(setComments([...comments]));
    } catch (err) {}
  };
};
