import React from "react";
import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  updatePostTextActionCreator,
} from "../../../Redux/profile-reducer";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let addPost = () => {
          let addPost = addPostActionCreator();
          store.dispatch(addPost);
        };

        let onPostChange = (text) => {
          store.dispatch(updatePostTextActionCreator(text));
        };
        return(<MyPosts
          postsData={state.profilePage.postsData}
          inputData={state.profilePage.inputData}
          addPost={addPost}
          onPostChange={onPostChange}
        />)
        
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
