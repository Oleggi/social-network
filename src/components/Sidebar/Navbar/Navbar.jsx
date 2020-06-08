import React, { Component } from "react";
import s from "../Sidebar.module.css";
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
        <nav className={s.nav}>
        <div className={s.item} >
          <NavLink activeClassName={s.active} to="/profile">Profile</NavLink>
        </div>
        <div className={s.item} >
          <NavLink activeClassName={s.active} to="/dialogs">Messages</NavLink>
        </div>
        <div className={s.item} >
          <NavLink activeClassName={s.active} to="/news">News</NavLink>
        </div>
        <div className={s.item} >
          <NavLink activeClassName={s.active} to="/music">Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink activeClassName={s.active} to="/users">Users</NavLink>
        </div>
        <div className={s.item} >
          <NavLink activeClassName={s.active} to="/settings">Settings</NavLink>
        </div>
      </nav>
    );
  }
}

export default Navbar;
