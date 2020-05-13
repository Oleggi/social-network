import React, { Component } from "react";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

class MyPosts extends Component {
  render() {
    return (
      <div>
        <div>
          <NewPost />
        </div>
        <div>
          <Post likes="25" message="I'm just happy!"/>
          <Post likes="30" message="Heeey, how have you beeen so far, friends?"/>
        </div>
      </div>
    );
  }
}

export default MyPosts;
