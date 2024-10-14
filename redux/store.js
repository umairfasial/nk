import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import {RootReducer} from './reducers';

export const store = createStore(RootReducer, compose(applyMiddleware(thunk)));
