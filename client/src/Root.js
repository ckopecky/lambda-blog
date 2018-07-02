import React from 'react';
import Route from 'react-router-dom';
import App from './App';

const Root = props => {
  return (
    <div>
      <Route path="/" component={App} />
    </div>
  );
};

export default Root;
