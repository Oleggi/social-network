import React, { Component } from "react";
import s from "./Background.module.css";

class Background extends Component {
  render() {
    return (
<div className={s.img}>
    <img src="https://cdn.trendhunterstatic.com/thumbs/cool-backgrounds.jpeg" alt=""/>
</div>
    );
  }
}

export default Background;
