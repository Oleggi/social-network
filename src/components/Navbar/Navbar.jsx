import React, { Component } from "react";
import s from "./Navbar.module.css";

class Navbar extends Component {
  render() {
    return (
      <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
          <a href="#s">Profile</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
          <a href="#s">Messages</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
          <a href="#s">News</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
          <a href="#s">Music</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
          <a href="#s">Settings</a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
