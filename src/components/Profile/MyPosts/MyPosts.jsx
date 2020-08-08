import React from "react";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  let pagesCount = Math.ceil(props.totalPostsCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={s.myPosts_wrapper}>
      <div>
        <NewPost
          addPost={props.addPost}
        />
      </div>
      <h3>My posts:</h3>
      <div className={s.pages_wrapper}>
        {pages.map((p, i) => {
          return (
            <div
              key={i}
              className={p === props.currentPage ? s.active_page : ""}
              onClick={() => props.onPageChange(p)}
            >
              {p}
            </div>
          );
        })}
      </div>
      <div>
        {props.posts.map((p, i) => {
          return <Post deletePost={props.deletePost} key={p.id} likes={p.likes} body={p.body} />;
        })}
      </div>
    </div>
  );
};

export default MyPosts;
