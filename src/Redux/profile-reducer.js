const ADD_POST = "ADD_POST";
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";

let initialState = {
    inputData: "",
    postsData: [
      { id: 1, likesCount: 5, content: "I'm just happy!" },
      { id: 2, likesCount: 4, content: "Going to Italy." },
      { id: 3, likesCount: 22, content: "I get a new job today!" },
    ],
  };


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        likesCount: 0,
        content: state.inputData,
      };

      if (state.inputData.length !== 0) {
        state.postsData.push(newPost);
        state.inputData = "";
      }
      break;
    case UPDATE_POST_TEXT:
      state.inputData = action.text;
      break;
    default:
      return state;
  }
  return state;
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updatePostTextActionCreator = (text) => ({
  type: UPDATE_POST_TEXT,
  text: text,
});


export default profileReducer;