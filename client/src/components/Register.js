import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../actions/actions_auth';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  }
  render() {
    const { errors } = this.state;

    return (
      <form noValidate onSubmit={this.onSubmit}>
        <input
          placeholder="Name"
          name="name"
          type="name"
          value={this.state.name}
          onChange={this.onInputChange}
        />

        <input
          placeholder="Email Address"
          name="email"
          type="email"
          value={this.state.email}
          onChange={this.onInputChange}
        />
        <input
          placeholder="Password"
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.onInputChange}
        />
        <button type="submit" value="Register" />
      </form>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
