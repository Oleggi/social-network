import React from "react";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfoСontainer from "./ProfileInfo/ProfileInfoContainer";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfoСontainer />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
