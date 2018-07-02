import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';

import rootReducer from './reducers';

import './index.css';

const store = createStore({});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
