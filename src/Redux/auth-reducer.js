import { authAPI, secureAPI } from "../components/API/api";
import { stopSubmit } from "redux-form";
const SET_AUTH_DATA = "social-network/auth/SET_AUTH_DATA";
const SET_LOGIN_DATA = "social-network/auth/SET_LOGIN_DATA";
const GET_CAPTCHA_URL_SUCCESS = "social-network/GET_CAPTCHA_URL_SUCCESS";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captcha: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        ...action.payload,
      };
      case GET_CAPTCHA_URL_SUCCESS:
        return {
          ...state,
          ...action.payload,
        };
    default:
      return state;
  }

};

export const setAuthUserData = (id, email, login, isAuth) => {
  return {
    type: SET_AUTH_DATA,
    payload: { id, email, login, isAuth },
  };
};

export const setLoginUserData = (userId) => {
  return {
    type: SET_LOGIN_DATA,
    userId,
  };
};

const getCaptchaUrlSuccess = (captcha) => {
  return {
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: { captcha }
  }
}

export const setAuthMeData = () => async (dispatch, isAuth) => {
  const data = await authAPI.getAuthUserData();
  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const logInUser = (email, password, rememberMe, captcha) => async (
  dispatch
) => {
  const response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
      dispatch(setAuthMeData());
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptcha());
      }
      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Something went wrong";
      dispatch(stopSubmit("login", { _error: message }));
    }
};

export const logOutUser = () => async (dispatch) => {
  const response = await authAPI.logout();
    if (response.resultCode === 0) {
      setAuthMeData(null, null, null, false);
    }
};

export const getCaptcha = () => async (dispatch) => {
  const response = await secureAPI.getCaptchaUrl();
    dispatch(getCaptchaUrlSuccess(response.data));
};


export default authReducer;
