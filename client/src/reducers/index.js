import { combineReducers } from 'redux';
<<<<<<< HEAD
//import userReducer from './reducer_user';
import postReducer from './reducer_post';
import topFiveReducer from './reducer_topFive';

const rootReducer = combineReducers({
//  user: userReducer,
  post: postReducer,
  topFive: topFiveReducer
=======
import userReducer from './reducer_user';
//import topFiveReducer from './reducer_topFive';

const rootReducer = combineReducers({
  user: userReducer
>>>>>>> 74a02aa7960f612281f46ff9aa5e3f76b084fe5c
});

export default rootReducer;
