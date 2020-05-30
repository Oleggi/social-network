import React from "react";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  let newPost = props.postsData.map((p, i) => {
    return <Post key={i} likes={p.likesCount} content={p.content} />;
  });

  return (
    <div className={s.myPosts_wrapper}>
      <div>
        <NewPost 
          inputData={props.inputData}
          addPost={props.addPost}
          onPostChange={props.onPostChange}
        />
      </div>
      <h3>My posts:</h3>
      <div>{newPost}</div>
    </div>
  );
};

export default MyPosts;
