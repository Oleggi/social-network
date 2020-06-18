const ADD_POST = "ADD_POST";
const UPDATE_BODY_TEXT = "UPDATE_BODY_TEXT";
const UPDATE_TITLE_TEXT = "UPDATE_TITLE_TEXT";
const SET_POSTS = "SET_POSTS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const CHECK_IS_FETCHING = "CHECK_IS_FETCHING"; 

let initialState = {
  inputDataTile: "",
  inputDataBody: "",
  totalPostsCount: 100,
  pageSize: 20,
  currentPage: 1,
  posts: [
    
  ],
  isFetching: false,
};


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 200,
        title: state.inputDataTitle,
        body: state.inputDataBody,
      };

        if (state.inputDataBody.length !== 0) {
          return { ...state,
              inputDataTitle: "", 
              inputDataBody: "", 
              posts: [...state.posts, newPost] 
            } 
        } 
        return state;

    case UPDATE_BODY_TEXT:
      return { ...state, 
        inputDataBody: action.text  
      }; 
      case UPDATE_TITLE_TEXT:
        return { ...state, 
          inputDataTitle: action.text  
        };   
    case SET_POSTS:
      return {
        ...state,
        posts: [...state.posts, ...action.posts]
      }
    case SET_CURRENT_PAGE:
      return {
        ...state, 
        currentPage: action.page
      }
     case CHECK_IS_FETCHING:
       return {
         ...state,
         isFetching: action.isFetching
       } 
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });

export const updateBodyText = (text) => ({
  type: UPDATE_BODY_TEXT,
  text: text,
});

export const updateTitleText = (text) => ({
  type: UPDATE_TITLE_TEXT,
  text: text,
});

export const setPosts = (posts) => {
 return{
    type: SET_POSTS,
    posts: posts
 }
}

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    page: page
  }
}

export const checkIsFetching = (isFetching) => {
  return {
    type: CHECK_IS_FETCHING,
    isFetching
  }
}

export default profileReducer;
