import {
  FETCH_POSTS,
  FETCH_POST,
  CREATE_POST,
  EDIT_POST,
  DELETE_POST
} from '../actions/types';

const initialState = {
  posts: [],
  post: {}
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return Object.assign({}, state, { posts: action.payload });
    case FETCH_POST:
      return Object.assign({}, state, { post: action.payload });
    case CREATE_POST:
      return Object.assign({}, state, { post: action.payload });
    case EDIT_POST:
      return Object.assign({}, state, { post: action.payload });
    case DELETE_POST:
      return Object.assign({}, state, { post: action.payload });
    default:
      return state;
  }
};

export default postReducer;
