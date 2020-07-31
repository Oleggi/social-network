import { setAuthMeData } from "./auth-reducer";
const AUTH_SUCCESS = "SET_LOGIN_DATA";

let initialState = {
authSucced: false
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        authSucced: true,
      };
    default:
      return state;
  }
};


export const authProcessSuccess = () => {
  return {
    type: AUTH_SUCCESS,
  };
};


export const initializeApp = () => (dispatch) => {
 let promise = dispatch(setAuthMeData())
    promise.then(() => {
        dispatch(authProcessSuccess());
    })
    };

export default appReducer;
