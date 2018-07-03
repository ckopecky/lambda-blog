import {
  FETCH_POSTS,
  FETCH_POST,
  CREATE_POST,
  EDIT_POST,
  DELETE_POST
} from './types';

export const fetchPosts = () => {
  let payload;
  axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
    payload = res.json();
  });
  return {
    type: FETCH_POSTS,
    payload
  };
};

export const fetchPost = id => {
  let payload;
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
    payload = res.json();
  });
  return {
    type: FETCH_POST,
    payload
  };
};

export const deletePost = id => {
  let payload = axios.delete(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return {
    type: DELETE_POST,
    payload
  };
};

export const editPost = (id, post) => {
  let payload;
  axios
    .post(`https://jsonplaceholder.typicode.com/posts/${id}`, post)
    .then(res => {
      payload = res.json();
    });

  return {
    type: EDIT_POST,
    payload
  };
};

export const createPost = post => {
  let payload;
  axios.post(`https://jsonplaceholder.typicode.com/posts`, post).then(res => {
    payload = res.json();
  });
  return {
    type: CREATE_POST,
    payload
  };
};
