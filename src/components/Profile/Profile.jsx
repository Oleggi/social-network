import React, { Component } from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Avatar from "./Avatar/Avatar";
import Description from "./Description/Description";
import Background from "./Background/Background";

class Profile extends Component {
  render() {
    return (
      <div className={s.content}>
        <Background />
        <Avatar />
        <Description />
        <MyPosts />
      </div>
    );
  }
}

export default Profile;
