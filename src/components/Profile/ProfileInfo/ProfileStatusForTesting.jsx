import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatusForTesting extends React.Component {
  state = {
    statusData: this.props.status,
    editMode: false
  }
  
   editModeOn = () => {
     this.setState({
       editMode: true
     })
  } 

   editModeOff = () => {
    this.setState({
      editMode: false
    })
    this.props.setUserStatus(this.state.statusData)
  }

   onStatusChange = (e) => {
        this.setState({
          statusData: e.currentTarget.value
        })
}

render () {
  return (
    <div>
        {!this.state.editMode && <span onDoubleClick={this.editModeOn} className={s.status}>
            {this.props.status || "-------"}
          </span>
        }
      
      <div>
          {this.state.editMode && <input
          onChange={this.onStatusChange}
          onBlur={this.editModeOff}
          autoFocus={true}
          type="text"
          value={this.state.statusData}
        />
        }
        <button>Save</button>
      </div>
    </div>
  );
};
}

  

export default ProfileStatusForTesting;
