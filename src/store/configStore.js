/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/rootReducer';

const middleWareLocalStorage = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem('app', JSON.stringify(store.getState()));
};

const losalStorageOnState = localStorage.getItem('app') ? JSON.parse(localStorage.getItem('app')) : {};

export const store = createStore(
  rootReducer,
  losalStorageOnState,
  compose(applyMiddleware(thunk, middleWareLocalStorage),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),

);
