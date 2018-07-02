import React from "react";
import {bindActionCreators} from 'redux';
import {logIn} from '../actions/index';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
}

submitLogIn = () => {
    window.localStorage.setItem('username', this.state.username);
    window.location.reload();
  }

    render() {

    return (
        <div>
        <input 
            type="text"
            name='username'
            placeholder="username"
            onChange={this.handleChange}
            />
        <input 
            type="text"
            name='password'
            placeholder="password"
            onChange={this.handleChange}
            />
        <button onClick={this.submitLogin}>Log In</button>
            </div>
    )
}
        
}


function matchDispatchToProps(dispatch) {
    return bindActionCreators({logIn: logIn}, dispatch)
}

export default Login;