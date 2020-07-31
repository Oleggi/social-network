import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux"; 
import { logOutUser } from "../../Redux/auth-reducer";


class HeaderContainer extends Component {
  render() {
    return <Header login={this.props.login} logOutUser={this.props.logOutUser} isAuth={this.props.isAuth}/>;
  }
}
const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
});


export default connect(mapStateToProps, { logOutUser })(HeaderContainer);
