import React from "react";
import { reset, Field, reduxForm } from "redux-form";
import s from "./Login.module.css";
import { logInUser } from "../../Redux/auth-reducer";
import { connect } from "react-redux";
import { Input } from "../common/formControllers/FormControls";
import { required, maxLength, minLength } from "../../Utils/formValidators";
import { Redirect } from "react-router-dom";

const maxLength20 = maxLength(20);
const minLength6 = minLength(6);

const LoginContainer = (props) => {
  let onSubmit = (loginData, dispatch) => {
    let { email, password, rememberMe } = loginData;
    props.logInUser(email, password, rememberMe);
    dispatch(reset("login"));
  };
  if (props.isAuth) {
    console.log(props.isAuth);
    return <Redirect to={"/profile"} />;
  }
  return (
    <div className={s.login_container}>
      <h2>Sign in</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} action="">
      <div>
        <Field
          name="email"
          component={Input}
          validate={[required, maxLength20, minLength6]}
          type="email"
          placeholder="login"
        />
      </div>
      <div>
        <Field
          name="password"
          component={Input}
          validate={[required, maxLength20, minLength6]}
          type="password"
          placeholder="password"
        />
      </div>
      <div>
        <Field name="rememberMe" component="input" type="checkbox" />
        remember me
      </div>
      <button>Sign In</button>
      
      {/* Image and input for captcha, doesn't work yet */}
      {props.captchaUrl && (
        <div>
          <div>
            <img src={props.captchaUrl} alt="" />
          </div>
          <div>
            <Field
              name="captcha"
              component="input"
              type="text"
              placeholder="Captcha"
            />
          </div>
        </div>
      )}

      {props.error && <div className={s.commonError}>{props.error}</div>}
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { logInUser })(LoginContainer);
