import React from "react";
import { reduxForm, Field, reset } from "redux-form";
import s from "./Login.module.css";
import { logInUser, getCaptcha } from "../../Redux/auth-reducer";
import { connect } from "react-redux";
import { Input } from "../common/formControllers/FormControls";
import { required, maxLength, minLength } from "../../Utils/formValidators";
import { Redirect } from "react-router-dom";

const maxLength20 = maxLength(20);
const minLength6 = minLength(6);

const LoginContainer = (props) => {
  const onSubmit = (loginData, dispatch) => {
    let { email, password, rememberMe, captcha } = loginData;
    props.logInUser(email, password, rememberMe, captcha);
    dispatch(reset("login"));
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div className={s.login_container}>
      <h2>Sign in</h2>
      <LoginReduxForm onSubmit={onSubmit} props={props} />
    </div>
  );
};

const LoginForm = ({logInUser, getCaptcha, captcha, onSubmit, handleSubmit, error = null}) => {
  return (
        <form onSubmit={handleSubmit}>
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
      {captcha && <Captcha getCaptcha={getCaptcha} captcha={captcha} />}
      <button>Sign In</button>
      
      {error && <div className={s.commonError}>{error}</div>}
    </form>
  );
};

const Captcha = ({ captcha, getCaptcha }) => {
  let onRefreshClickHandler = () => {
    getCaptcha();
  }
  return (
    <div>
      <div>
        <div className={s.captchaImg}><img src={captcha.url} alt="" />
        <div title="Refresh image" onClick={onRefreshClickHandler} className={s.refreshIcon}><img src="https://cdn.iconscout.com/icon/free/png-512/reload-91-475019.png" alt=""/></div></div>
      </div>
      <div>
        <Field
          name="captcha"
          component={Input}
          validate={ required }
          placeholder="Type symbols here"
        />
      </div>
    </div>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captcha: state.auth.captcha,
});

export default connect(mapStateToProps, { logInUser, getCaptcha })(LoginContainer);
