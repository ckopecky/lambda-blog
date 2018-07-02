import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';

import rootReducer from './reducers';

import './index.css';

import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

const initialState = {};

const store = createStore(initialState, rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
