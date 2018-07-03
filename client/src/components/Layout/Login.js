import React from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loginUser} from '../actions/actions_user';


class Login extends React.Component {
    render() {

    return (
        <div>
        <input 
            type="text"
            name='username'
            placeholder="username"
            />
        <input 
            type="text"
            name='password'
            placeholder="password"
            />
        <button onClick={this.props.loginUser}>Log In</button>
            </div>
    )
}
        
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({loginUser: loginUser}, dispatch)
}

export default connect(matchDispatchToProps, mapStateToProps)(Login);