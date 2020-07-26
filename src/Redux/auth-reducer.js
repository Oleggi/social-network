import { authAPI } from "../components/API/api";
const SET_AUTH_DATA = "SET_AUTH_DATA";
const SET_LOGIN_DATA = "SET_LOGIN_DATA";
const DELETE_LOGIN_DATA = "DELETE_LOGIN_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    case SET_LOGIN_DATA:
      return {
        ...state,
        userId: action.userId,
        isAuth: true
      };
      case DELETE_LOGIN_DATA:
      return {
        ...state,
        isAuth: false
      }
    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login) => {
  return {
    type: SET_AUTH_DATA,
    data: { id, email, login },
  };
};

export const setLoginUserData = (userId) => {
  return {
    type: SET_LOGIN_DATA,
    userId
  };
};

export const deleteLoginUserData = (userId) => {
  return {
    type: DELETE_LOGIN_DATA,
  };
};

export const setAuthMeData = () => (dispatch) => {
  authAPI.getAuthUserData().then((data) => {
    if (data.resultCode === 0) {
      let { id, email, login } = data.data;
      dispatch(setAuthUserData(id, email, login));
    }
  });
};

export const logInUser = (email, password, rememberMe, captcha) => (dispatch) => {
  authAPI.login(email, password, rememberMe, captcha).then((response) => {
    if (response.resultCode === 0) {
      dispatch(setLoginUserData(response.data.userId));
    }
  });
};

export const logOutUser = () => (dispatch) => {
  authAPI.logout().then((response) => {
    console.log(response);
    if (response.resultCode === 0) {
      dispatch(deleteLoginUserData());
    }
  });
};

export default authReducer;
