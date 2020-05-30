import React from "react";
import Friends from "./Friends";
import StoreContext from "../../../StoreContext";

const FriendsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        return <Friends friends={state.sidebar.friends} />;
      }}
    </StoreContext.Consumer>
  );
};

export default FriendsContainer;
