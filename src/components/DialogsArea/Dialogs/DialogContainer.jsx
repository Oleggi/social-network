import React from "react";
import Dialogs from "./Dialogs";
import StoreContext from "../../../StoreContext";

const DialogContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        return (
          <div>
            <Dialogs dialogs={state.dialogsPage.dialogs} />
          </div>
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogContainer;
