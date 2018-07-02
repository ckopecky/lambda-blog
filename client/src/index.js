import React from 'react';
import ReactDOM from 'react-dom';
//import { createStore } from 'redux';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
//import rootReducer from './reducers';

import './index.css';

//git const store = createStore({});

ReactDOM.render(
  <Provider>
    <Router>
      <App />
    </Router>
  </Provider>, 
  document.getElementById('root')
);



