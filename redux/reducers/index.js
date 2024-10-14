import {combineReducers} from 'redux';

import AppReducer from './AppLoader/appLoader.reducers';
import AskASheikhReducer from './askASheikh/askASheikh.reducer';
import AuthReducer from './auth/auth.reducer';
import CategoryReducer from './categories/category.reducer';
import CoursesReducer from './courses/courses.reducer';
import ilmaReducer from './ilma/ilma.reducer';
import IstiqahmaReducer from './Istiqamah/istiqamah.reducer';
import SearchReducer from './searching/searching.reducer';

const reducers = combineReducers({
  app: AppReducer,
  auth: AuthReducer,
  category: CategoryReducer,
  course: CoursesReducer,
  ilma: ilmaReducer,
  askASheikh: AskASheikhReducer,
  istiqamas: IstiqahmaReducer,
  searched: SearchReducer,
});

export const RootReducer = (state, action) => {
  //Reset Global state
  if (action.type === '[Auth] LOGOUT_USER') {
    return reducers(undefined, action);
  }

  return reducers(state, action);
};
