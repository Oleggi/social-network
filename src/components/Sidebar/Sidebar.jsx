import React from "react";
import s from "./Sidebar.module.css";
import Navbar from "./Navbar/Navbar";
import Friends from "./Friends/Friends";

const Sidebar = (props) => {
  return ( 
  <div className={s.sidebar_wrappe}>
      <Navbar />
      <Friends />
  </div>
  )
};


export default Sidebar;