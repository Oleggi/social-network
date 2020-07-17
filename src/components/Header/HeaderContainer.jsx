import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux"; 
import { setAuthMeData } from "../../Redux/auth-reducer"


class HeaderContainer extends Component {
  componentDidMount() {
    this.props.setAuthMeData();
  }
  render() {
    return <Header {...this.props} login={this.props.login} isAuth={this.props.isAuth}/>;
  }
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { setAuthMeData })(HeaderContainer);
