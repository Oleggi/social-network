import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { logOutUser } from "../../Redux/auth-reducer";
import { connect } from "react-redux";

class Header extends React.Component {
  logOut = () => {
    this.props.logOutUser();
  }
  render () {
    return (
      <header className={s.header}>
        LOGO
        {this.props.isAuth ? (
          <NavLink to={"/login"}>
            <div className={s.login} onClick={this.logOut}>Logout</div>
          </NavLink>
        ) : (
          <NavLink to={"/login"}>
            <div className={s.login}>Login</div>
          </NavLink>
        )}
      </header>
    );
  }
 
};

let mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {logOutUser})(Header);
