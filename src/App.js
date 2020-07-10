import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import DialogsArea from "./components/DialogsArea/DialogsArea";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Sidebar />

      <div className="app-wrapper-content">
        <Route
          path="/dialogs"
          render={() => <DialogsArea />}
        />
        <Route path="/profile/:userId?" render={() => <Profile />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
        <Route path="/users" render={() => <UsersContainer />}></Route>
      </div>
    </div>
  );
};

export default App;
