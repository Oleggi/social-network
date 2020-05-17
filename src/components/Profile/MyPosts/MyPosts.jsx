import React from "react";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {

  let newPost = props.state.map((p, i) => {
    return <Post key={i} likes={p.likesCount} content={p.content} />;
  });

  return (
    <div className={s.myPosts_wrapper}>
      <div>
        <NewPost />
      </div>
      <h3>My posts:</h3>
      <div>{newPost}</div>
    </div>
  );
};

export default MyPosts;
