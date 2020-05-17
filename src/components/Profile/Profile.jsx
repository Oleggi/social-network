import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Background from "./Background/Background";
import state from "../../Redux/State";



const Profile = (props) => {
      return (
      <div className={s.content}>
        <Background />
        <ProfileAvatar />
        <ProfileInfo />
        <MyPosts state={props.state.postsData}/>
      </div>
    );
}

export default Profile;