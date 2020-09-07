import React from "react";
import Friends from "./Friends";
import { connect } from "react-redux";

const FriendsContainer = (props) => {
  return (
    <div>
      <Friends friends={props.friends}/>
    </div>
  )
}

let mapStateToProps = (state) => {
  return {
    friends: state.sidebar.friends,
  };
};


export default connect(mapStateToProps, null)(FriendsContainer);

