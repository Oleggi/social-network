import React, { Component } from "react";
import s from "./ProfileAvatar.module.css";

class ProfileAvatar extends Component {
  render() {
    let avatar = this.props.profileAvatar;
    return (
<div className={s.avatar}>
  {avatar? <img src={avatar} alt=""/> : <img src="https://images.squarespace-cdn.com/content/v1/5a7a17897131a579be261747/1530282889879-NMIJEPETRKHL6RWHZGH0/ke17ZwdGBToddI8pDm48kHhlTY0to_qtyxq77jLiHTtZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7T-j82ScS_xjTqFYGqFrT72qZ_E0ELtHpOZiWcSG1QwIMeEVreGuQ8F95X5MZTW1Jw/avatar-placeholder.png
  " alt=""/>}
    
</div>
    );
  }
}

export default ProfileAvatar;
