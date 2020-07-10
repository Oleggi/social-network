import React from "react";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import { connect } from "react-redux";
import { setProfile } from "../../../Redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { profileAPI } from "../../API/api.js";

class ProfileInfoContainer extends React.Component {
  componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
          userId = 8695;
      }
      profileAPI.getProfile(userId).then(data => {
      this.props.setProfile(data);
    });
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

const withUserUrlContainer = withRouter(ProfileInfoContainer);

export default connect(mapStateToProps, { setProfile })(
    withUserUrlContainer
);


