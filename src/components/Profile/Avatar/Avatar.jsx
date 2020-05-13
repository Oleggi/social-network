import React, { Component } from "react";
import s from "./Avatar.module.css";

class Avatar extends Component {
  render() {
    return (
<div className={s.avatar}>
    <img src="https://i1.sndcdn.com/avatars-000539931711-vsx1ty-t500x500.jpg" alt=""/>
</div>
    );
  }
}

export default Avatar;
