import { combineReducers } from 'redux';
import userReducer from './reducer_user';
import postReducer from './reducer_post';
//import topFiveReducer from './reducer_topFive';

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer
});

export default rootReducer;
