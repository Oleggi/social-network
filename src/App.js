import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import DialogsArea from "./components/DialogsArea/DialogsArea";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
// import state from "./Redux/State";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />

      <div className="app-wrapper-content">
        <Route
          path="/dialogs"
          render={() => <DialogsArea />}
        />
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
};

export default App;
