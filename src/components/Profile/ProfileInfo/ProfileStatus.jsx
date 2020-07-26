import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        statusData: this.props.status
    }

    editModeOn = () => {
        this.setState ({
            editMode: true
        })
    }

    editModeOff = () => {
        this.setState ({
            editMode: false
        });
        this.props.setUserStatus(this.state.statusData);
    }

    onStatusChange = (e) => {
        this.setState ({
            statusData: e.currentTarget.value
        })
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState ({
                statusData: this.props.status
            })
        }
    }

    render () {
        if (this.props.userId !== 8695) {
            return <span className={s.status}>{this.props.status || "-------"}</span>
        }
        return (
            <div>
                {
                !this.state.editMode &&
                <span onDoubleClick={this.editModeOn} className={s.status}>{this.props.status || "-------"}</span>
                }
              {
              this.state.editMode &&
              <div>
              <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.editModeOff} type="text" value={this.state.statusData}/>
              <button>Save</button>
              </div>
              }
              
            </div>
          );
    }
  }

export default ProfileStatus;
