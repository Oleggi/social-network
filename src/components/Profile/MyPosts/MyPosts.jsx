import React from "react";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";
import s from "./MyPosts.module.css";
import Paginator from "../../common/Paginator/Paginator";

const MyPosts = (props) => {
  return (
    <div className={s.myPosts_wrapper}>
      <div>
        <NewPost addPost={props.addPost} />
      </div>
      <h3>My posts:</h3>
      <Paginator
        totalCount={props.totalPostsCount}
        pageSize={props.pageSize}
        onPageChange={props.onPageChange}
        currentPage={props.currentPage}
        setCurrentPage={props.setCurrentPage}
      />
      <div>
        {props.posts.map((p, i) => {
          return (
            <Post
              deletePost={props.deletePost}
              key={p.id}
              likes={p.likes}
              body={p.body}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyPosts;
