import React, { useState, useEffect } from "react";
import s from "./ProfileInfo.module.css";

const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [statusData, setStatusData] = useState(props.status);
  
  let editModeOn = () => {
      setEditMode(true);
  } 

  let editModeOff = () => {
      setEditMode(false);
      props.setUserStatus(statusData);
  }

  let  onStatusChange = (e) => {
        setStatusData(e.currentTarget.value);
}

useEffect(() => {
    setStatusData(props.status)
    },
    [props.status]
)

  return (
    <div>
        {!editMode && <span onDoubleClick={editModeOn} className={s.status}>
            {props.status || "-------"}
          </span>
        }
      
      <div>
          {editMode && <input
          onChange={onStatusChange}
          onBlur={editModeOff}
          autoFocus={true}
          type="text"
          value={statusData}
        />
        }
        <button>Save</button>
      </div>
    </div>
  );
};

export default ProfileStatus;
