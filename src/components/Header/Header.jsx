import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      LOGO
      {props.isAuth ? (
        <div className={s.login}>{props.login}</div>
      ) : (
        <NavLink to={"/login"}>
          <div className={s.login}>Login</div>
        </NavLink>
      )}
    </header>
  );
};

export default Header;
