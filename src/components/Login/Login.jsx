import React from "react";
import { reset, Field, reduxForm } from 'redux-form';
import s from "./Login.module.css"
import { logInUser } from "../../Redux/auth-reducer";
import { connect } from "react-redux";

class LoginContainer extends React.Component {
    onSubmit = (loginData, dispatch) => {
        let { email, password, rememberMe} = loginData;
        this.props.logInUser(email, password, rememberMe);
        dispatch(reset("login"));
    }
    render () {
        return (
            <div className={s.login_container}>
                <h2>Login</h2>
                <LoginReduxForm onSubmit={this.onSubmit}/>
            </div>
        )
    } 
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} action="">            
            <div><Field name="email" component="input" type="text" placeholder="login"/></div>
            <div><Field name="password" component="input" type="text" placeholder="password"/></div>
            <div><Field name="rememberMe" component="input" type="checkbox"/>remember me</div>
            <button>Submit</button>
        </form>
    )
} 

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

let mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {logInUser})(LoginContainer);