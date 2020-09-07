import React from "react";
import { Contact } from "./ProfileInfo";

const ProfileInfoData = ({profile, isOwner, toEditMode}) => {
    return (
        <div>
            <h2>{profile.fullName}</h2>
            <div><b>About me:  </b>{profile.aboutMe}</div>
            <div><b>Looking for a job: </b>{profile.lookingForAJob? "yes" : "no"}</div>
            {profile.lookingForAJob && <div><b>My professional skills: </b>{profile.lookingForAJobDescription}</div>}
            <div>{Object.keys(profile.contacts).map(key => {
                return <Contact key={key} title={key} description={profile.contacts[key]} />
            })}</div>
            {isOwner && <button onClick={toEditMode}>Edit</button>}
        </div>
    )
}

export default ProfileInfoData;