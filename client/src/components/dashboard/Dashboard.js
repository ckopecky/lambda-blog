import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: {}
    };
  }

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/');
      alert('You must be logged in to view the dashboard.');
      return;
    }
    const { id } = this.props.user;
    axios
      .get(`http://localhost:5000/api/users/${id}`)
      .then(res => res.data)
      .then(profileData => this.setState({ profileData }));
  }

  render() {
    const { user } = this.props;
    const { profileData } = this.state;
    return (
      <div>
        <h2>Welcome, {user.firstName}</h2>
        <h4>
          Name: {profileData.firstName} {profileData.lastName}
        </h4>
        <h4>Email: {profileData.username}</h4>
        <h4>profileData.cohort_name</h4>
        <h4>Skills: </h4> <p>{profileData.skills}</p>
        <h4>Job Interests: </h4> <p>{profileData.job_interests}</p>
        <h4>About me: </h4> <p>{profileData.about}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  {}
)(Dashboard);
