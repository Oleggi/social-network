import React from "react";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getProfileAPI } from "../../../Redux/profile-reducer";
import { withAuthRedirect } from "../../../Hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileInfoContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
        userId = 8695;
    }
      this.props.getProfileAPI(userId);
  }
  
  render() {
    return (
      <>
        <ProfileInfo {...this.props} profile={this.props.profile} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default compose
(
  connect(mapStateToProps, { getProfileAPI }), 
  withRouter,
  withAuthRedirect
  )
(ProfileInfoContainer);

 





