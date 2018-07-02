import { LOGIN_USER, LOGOUT_USER } from './types';

//loginUser will need to make a request to the backend to authenticate the user

const loginUser = (user = { name: 'Joe' }) => {
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
