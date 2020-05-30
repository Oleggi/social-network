import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./Redux/redux-store";
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import StoreContext from "./StoreContext";

let rerenderDom = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <StoreContext.Provider value={store}>
          <App />
        </StoreContext.Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderDom(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderDom(state);
});
