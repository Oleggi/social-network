import React from "react";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Background from "./Background/Background";


const Profile = (props) => {
      return (
      <div className={s.content}>
        <Background />
        <ProfileAvatar />
        <ProfileInfo />
        <MyPostsContainer />
      </div>
    );
}

export default Profile;