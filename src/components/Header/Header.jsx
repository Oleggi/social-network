import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header= (props) => {
    return (
      <header className={s.header}>
        LOGO
        {props.isAuth ? (
        <div className={s.login}>{props.login} | <button onClick={props.logOutUser}>Exit</button></div>
           
        ) : (
          <NavLink to={"/login"}>
            <div className={s.login}>Sign In</div>
          </NavLink>
        )}
      </header>
    );
  };


export default Header;
