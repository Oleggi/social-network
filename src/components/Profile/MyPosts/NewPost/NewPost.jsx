import React, { Component } from "react";
import s from "./NewPost.module.css";

class NewPost extends Component {
  render() {
    return (
      <div>
        <textarea name="" id="" cols="30" rows="5"></textarea>
        <div>
          <button>Add new post</button>
        </div>
      </div>
    );
  }
}

export default NewPost;
