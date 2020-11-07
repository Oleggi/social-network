import React from "react";
import s from "./Header.module.css";
import LogoutContainer from "../Logout/LogoutContainer";
import logoImg from "../../assets/images/logo.png"

const Header= () => {
    return (
      <header className={s.header}>
        <img src={logoImg} alt="logo"/>
        <div>
         <LogoutContainer />
        </div>
      </header>
    );
  };


export default Header;
