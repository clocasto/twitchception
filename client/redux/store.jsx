/* global window */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/';

const defaultState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const store = createStore(
  rootReducer,
  defaultState,
  composeEnhancers(applyMiddleware(thunk)),
  window.devToolsExtension && window.devToolsExtension(),
);

export const history = syncHistoryWithStore(browserHistory, store);
export default store;

