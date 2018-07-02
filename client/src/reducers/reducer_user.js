import { LOGIN_USER, LOGOUT_USER } from './types';

const initialState = {
  user: {
    isAuthenticated: false
  }
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return Object.assign(
        {},
        state,
        { user: action.payload },
        (user.isAuthenticated = true)
      );
    case LOGOUT_USER:
      return Object.assign({}, initialState);
    default:
      return state;
  }
};

export default userReducer;
