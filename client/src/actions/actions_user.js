import { LOGIN_USER, LOGOUT_USER } from './types';

const loginUser = user => {
  return {
    type: LOGIN_USER,
    payload: user
  };
};

const logoutUser = () => {
  return {
    type: LOGOUT_USER
  };
};
