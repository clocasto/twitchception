/* globals document */
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './redux/store'; //Change
import App from './components/app';
import './index.css';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));

