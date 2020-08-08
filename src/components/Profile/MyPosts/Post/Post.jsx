import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  let removePost = (id) => {
    props.deletePost(props.id)
  }
  return (
    <div className={s.item}>
      <div>
        <img
          className={s.avatar}
          src="https://cdn0.iconfinder.com/data/icons/sexy-portrait-girl-avatar-cute-beautiful-young-gir/283/female-138-512.png"
          alt=""
        />
      </div>
      <div className={s.body}>{props.body}</div>
  <div>Like {props.likes}</div>
      <button onClick={removePost}>delete</button>
    </div>
  );
};

export default Post;
