import React from "react";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getProfileData,
  getUserStatus,
  setUserStatus,
  setUserPhoto,
  setProfileInfo
} from "../../../Redux/profile-reducer";
import { withAuthRedirect } from "../../../Hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileInfoContainer extends React.Component {
  refreshUserInfo = () => {
    let userId = this.props.match.params.userId;
      if (!userId) {
        userId = this.props.authUserId;
      }
      this.props.getProfileData(userId);
      this.props.getUserStatus(userId);
  
  }
  componentDidMount() {
    this.refreshUserInfo();
      }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshUserInfo();
    } 
  }

  onPhotoSelectedChange = (e) => {
    if (e.target.files.length) {
      this.props.setUserPhoto(e.target.files[0]);
    }
  }

  render() {
    return (
      <>
        <ProfileInfo
          {...this.props}
          status={this.props.status}
          profile={this.props.profile}
          setUserStatus={this.props.setUserStatus}
          isOwner={!this.props.match.params.userId}
          onPhotoSelectedChange={this.onPhotoSelectedChange}
          setProfileInfo={this.props.setProfileInfo}
          isProfileInfoUpdating={this.props.isProfileInfoUpdating}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authUserId: state.auth.id,
  isAuth: state.auth.isAuth,
  isProfileInfoUpdating: state.profilePage.isProfileInfoUpdating
});

export default compose(
  connect(mapStateToProps, { getProfileData, getUserStatus, setUserStatus, setUserPhoto, setProfileInfo }),
  withRouter,
  withAuthRedirect
)(ProfileInfoContainer);
