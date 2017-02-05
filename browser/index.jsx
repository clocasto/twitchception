/* globals document */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './Redux/store';
import App from './_components/App';
import './Styles/index.css';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));

