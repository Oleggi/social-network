import React  from 'react';
import { NavLink } from "react-router-dom";
import s from "../Header/Header.module.css";

const Logout = ({ isAuth, login, logOutUser }) => { 

    return (
      <div>
          {isAuth ? (
          <div className={s.login}>{login} | <button onClick={logOutUser}>Sign Out</button></div>
             
          ) : (
            <NavLink to={"/login"}>
              <div className={s.login}>Sign In</div>
            </NavLink>
          )}
      </div>
  )
}

export default Logout;


