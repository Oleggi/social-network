import { profileAPI } from "../components/API/api";
const ADD_POST = "social-network/profile/ADD_POST";
const DELETE_POST = "social-network/profile/DELETE_POST";
const UPDATE_BODY_TEXT = "social-network/profile/UPDATE_BODY_TEXT";
const UPDATE_TITLE_TEXT = "social-network/profile/UPDATE_TITLE_TEXT";
const SET_POSTS = "social-network/profile/SET_POSTS";
const SET_CURRENT_PAGE = "social-network/profile/SET_CURRENT_PAGE";
const CHECK_IS_FETCHING = "social-network/profile/CHECK_IS_FETCHING";
const SET_PROFILE = "social-network/profile/SET_PROFILE";
const GET_STATUS = "social-network/profile/GET_STATUS";

let initialState = {
  totalPostsCount: 20,
  pageSize: 5,
  currentPage: 1,
  profile: null,
  status: "",
  posts: [
    {id: 1,
     body: "Be yourself everyone else is already taken. ― Oscar Wilde",
     likes: 75 
    },
    {id: 2,
      body: `Be who you are and say what you feel, 
             because those who mind don't matter, and those who matter don't mind.― Bernard M. Baruch`,
      likes: 66 
     },
     {id: 3,
      body: `A room without books is like a body without a soul.”
            ― Marcus Tullius Cicero`,
      likes: 102 
     }
  ],
  isFetching: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length + 1,
        body: action.payload,
        likes: 0
      };
        return {
          ...state,
          posts: [...state.posts, newPost],
        };
      case DELETE_POST:
        return {
          ...state,
          posts: [...state.posts.filter(p => p.id !== action.id)],
        };
    case SET_POSTS:
      return {
        ...state,
        posts: [...state.posts, ...action.posts],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    case CHECK_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profileData,
      };
    case GET_STATUS:
      return {
        ...state,
        status: action.statusData,
      };
    default:
      return state;
  }
};

export const addPost = (payload) => ({ type: ADD_POST, payload });

export const deletePost = (id) => ({ type: DELETE_POST, id });

export const updateBodyText = (text) => ({
  type: UPDATE_BODY_TEXT,
  text: text,
});

export const updateTitleText = (text) => ({
  type: UPDATE_TITLE_TEXT,
  text: text,
});

export const setPosts = (posts) => {
  return {
    type: SET_POSTS,
    posts: posts,
  };
};

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    page: page,
  };
};

export const checkIsFetching = (isFetching) => {
  return {
    type: CHECK_IS_FETCHING,
    isFetching,
  };
};

export const setProfile = (profileData) => {
  return {
    type: SET_PROFILE,
    profileData,
  };
};

export const getStatus = (statusData) => {
  return {
    type: GET_STATUS,
    statusData,
  };
};

export const getProfileData = (id) => {
  return async (dispatch) => {
    const data = await profileAPI.getProfile(id);
      dispatch(setProfile(data));
  };
};

export const getUserStatus = (userId) => {
  return async (dispatch) => {
    const data = await profileAPI.getUserStatus(userId);
      dispatch(getStatus(data));
  };
};

export const setUserStatus = (statusData) => {
  return async (dispatch) => {
    const data = await profileAPI.setUserStatus(statusData);
      if (data.resultCode === 0) {
        dispatch(getStatus(statusData));
      }
  };
};

export default profileReducer;
