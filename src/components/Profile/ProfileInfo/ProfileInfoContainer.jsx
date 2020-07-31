import React from "react";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getProfileData,
  getUserStatus,
  setUserStatus,
} from "../../../Redux/profile-reducer";
import { withAuthRedirect } from "../../../Hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileInfoContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authUserId;
    }
    this.props.getProfileData(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <>
        <ProfileInfo
          {...this.props}
          status={this.props.status}
          profile={this.props.profile}
          setUserStatus={this.props.setUserStatus}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authUserId: state.auth.id,
  isAuth: state.auth.isAuth
});

export default compose(
  connect(mapStateToProps, { getProfileData, getUserStatus, setUserStatus }),
  withRouter,
  withAuthRedirect
)(ProfileInfoContainer);
