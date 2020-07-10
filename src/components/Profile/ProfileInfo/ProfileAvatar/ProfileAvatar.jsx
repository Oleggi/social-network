import React, { Component } from "react";
import s from "./ProfileAvatar.module.css";

class ProfileAvatar extends Component {
  render() {
    let avatar = this.props.profileAvatar;
    return (
<div className={s.avatar}>
  {avatar? <img src={avatar} alt=""/> : <img src="https://norvuz.ru/upload/iblock/8e8/8e80a39e40d8ddf5fd86a4b0064c1e2c.png" alt=""/>}
    
</div>
    );
  }
}

export default ProfileAvatar;
