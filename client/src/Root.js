import React from 'react';
import Route from 'react-router-dom';
import App from './App';
import Login from './components/Login';

const Root = props => {
  return (
    <div>
      <Route path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard/:id" component={Dashboard} />
    </div>
  );
};

export default Root;
