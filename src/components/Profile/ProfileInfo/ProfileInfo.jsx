import React, { Component } from "react";
import s from "./ProfileInfo.module.css";
import Background from "./Background/Background";
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
import Preloader from "../../common/preloader/Preloader";

class ProfileInfo extends Component {
  render() {
    if (!this.props.profile) {
      return <Preloader />;
    }
    return (
      <>
        <Background />
        <ProfileAvatar profileAvatar={this.props.profile.photos.large} />
        <div className={s.info}>
          <h2>{this.props.profile.fullName}</h2>
          <div>{this.props.profile.aboutMe}</div>
    {this.props.profile.lookingForAJob ?<div>Looking for a job: {this.props.profile.lookingForAJobDescription}</div> : ""}
        </div>
      </>
    );
  }
}

export default ProfileInfo;
