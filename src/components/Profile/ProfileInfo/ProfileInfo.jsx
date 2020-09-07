import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import Background from "./Background/Background";
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusForTesting from "./ProfileStatusForTesting";
import ProfileInfoData from "./ProfileInfoData";
import ProfileDataForm from "./ProfileDataForm"

const ProfileInfo = (props) => {
  let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
      return <Preloader />;
    }
    const onSubmit = (formData) => {
      props.setProfileInfo(formData);
      if (props.isProfileInfoUpdating === "success") {
        setEditMode(false);
      } 
        }


    return (
      <>
        <Background />
        <ProfileAvatar profileAvatar={props.profile.photos.large} />
        {props.isOwner && <input onChange={props.onPhotoSelectedChange} type="file"/>} 
        {props.isProfileInfoUpdating === "fetching"  ? <div><Preloader /></div> : 
        <div className={s.info}>
        <ProfileStatusForTesting
          status={props.status}
          setUserStatus={props.setUserStatus}
          userId={props.profile.userId}
        />
        {editMode? <ProfileDataForm editModeOff={() => {setEditMode(false)}} profile={props.profile} initialValues={props.profile} onSubmit={onSubmit}/> : <ProfileInfoData toEditMode={() => {setEditMode(true)}} isOwner={props.isOwner} profile={props.profile}/>} 
        </div>
        }
      </>
    );
  }

export const Contact = ({title, description}) => {
  return (
  <div><b>{title}: </b> {description}</div>
  )
}

export default ProfileInfo;
