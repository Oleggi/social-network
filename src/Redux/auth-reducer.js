import { authAPI } from "../components/API/api";
import { stopSubmit } from "redux-form";
const SET_AUTH_DATA = "social-network/auth/SET_AUTH_DATA";
const SET_LOGIN_DATA = "social-network/auth/SET_LOGIN_DATA";

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
    if (response.resultCode === 0) {
      dispatch(setAuthMeData());
    } else {
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
export default authReducer;
