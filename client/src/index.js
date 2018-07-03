import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
//import { createStore } from 'redux';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
//import rootReducer from './reducers';

import './index.css';

//git const store = createStore({});
=======
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';

import rootReducer from './reducers';

import './index.css';

import App from './App';

const initialState = {};

const store = createStore(initialState, rootReducer);
>>>>>>> ccfc3154291e0fe102c51306e68961942d262a9d

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
<<<<<<< HEAD



=======
>>>>>>> ccfc3154291e0fe102c51306e68961942d262a9d
