import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <div>
        <img
          className={s.avatar}
          src="https://cdn0.iconfinder.com/data/icons/sexy-portrait-girl-avatar-cute-beautiful-young-gir/283/female-138-512.png"
          alt=""
        />
        <span className={s.title}>{props.title}</span>
      </div>

      <div className={s.body}>{props.body}</div>
      <div>Like 0</div>
      <button>delete</button>
    </div>
  );
};

export default Post;
