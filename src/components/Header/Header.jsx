import React from "react";
import s from "./Header.module.css";
import LogoutContainer from "../Logout/LogoutContainer";

const Header= (props) => {
    return (
      <header className={s.header}>
        LOGO
        <div>
         <LogoutContainer />
        </div>
      </header>
    );
  };


export default Header;
