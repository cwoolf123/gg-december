import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import persistedReducer from '../_reducers';

const loggerMiddleware = createLogger();

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware)( createStore );
export const store = createStoreWithMiddleware( persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),);