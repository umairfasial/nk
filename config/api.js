export const AUTH_ENDPOINTS = {
  LOGIN: '/auth/login',
  SIGNUP: '/auth/register',
  LOGOUT: '/auth/logout',
  SESSION: '/auth/session-user',
};

export const COURSES_ENDPOINTS = {
  GET_ALL_COURSES: '/courses/all-published',
  GET_COURSE: '/courses/get-course',
  GET_FAVORITE_COURSE: '/courses/my-favorite-courses',
  ADD_REMOVE_FAVORITE_COURSE: '/courses/add-remove-favorite',
  ADD_REMOVE_FAVORITE_VIDEO: '/favourite-video/add-remove-video',
  GET_FAVORITE_VIDEO: '/favourite-video/my-favorite-videos',
};

export const LESSONS_ENDPOINTS = {
  UPDATE_WATCH_TIME: '/lessons/updateLessonWatchTime',
  GET_COMMENTS: '/lessons/comments',
  ADD_COMMENT: '/lessons/add-comment',
  ADD_COMMENT_REPLY: '/lessons/add-comment-reply',
};

export const CATEGORY_ENDPOINTS = {
  GET_ALL: '/cat/categories',
  GET_QUESTIONS: '/my-journey/list-questions',
  GET_LIST_ASSESMENT: '/my-journey/list-assessment',
  GET_VIEW_ASSESSMENT: '/my-journey/view-assessment',
  SUBMIT_ASSESSMENT: '/my-journey/submit-assessment',
  GET_RESULT_ASSESSMENT: '/my-journey/result-submitted-assessment',
  GET_DEFAULT_IMAGES: '/cat/get-default-image',
};

export const ASK_A_SHEIKH_ENDPOINTS = {
  GET_ALL: '/ask-a-sheikh/all',
  ADD_QUESTION: '/ask-a-sheikh/ask-question',
  REPLY_TO_QUESTION: '/ask-a-sheikh/reply-to-question',
  GET_SHOYOOKH: '/user/list-instructor',
};

export const ISTIQAMAH_ENDPOINTS = {
  GET_ALL: '/todo/all',
  CREATE_NEW: '/todo/create',
  GET_SINGLE: '/todo/view',
  DELETE_SINGLE: '/todo/delete',
  UPDATE_TODO: '/todo/update',
};

export const ILMA_ENDPOINTS = {
  GET_ILMAS: '/ilma/get-pdf',
  GET_ILMAS_TODAY_VIDEO: '/ilma//get-current-video',
  GET_ILMAS_ALL_VIDEOS: '/ilma/get-published-videos',
  GET_ILMAS_DEFAULT_VIDEO: '/ilma/get-default-video',
};

export const USER_ENDPOINTS = {
  UPDATE_PROFILE: '/user/update',
  UPDATE_PASSWORD: '/user/change-password',

};
