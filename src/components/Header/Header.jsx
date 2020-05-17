import React, { Component } from "react";
import s from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <header className={s.header}>
        LOGO
        {/* <img src="../img/logo.png" alt="logo"/> */}
      </header>
    );
  }
}

export default Header;
