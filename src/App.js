import React, { Suspense } from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import { Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login.jsx";
import { connect } from "react-redux";
import { initializeApp } from "./Redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/redux-store";
import WithSuspense from "./Hoc/withSuspense";
const DialogsAreaContainer = React.lazy(() => import("./components/DialogsArea/DialogsArea"));
const News = React.lazy(() => import("./components/News/News"));
const Music = React.lazy(() => import("./components/Music/Music"));
const Settings = React.lazy(() => import("./components/Settings/Settings"));
class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.authSucced) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Sidebar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={WithSuspense(DialogsAreaContainer)} />
          <Route path="/profile/:userId?" render={() => <Profile />} />
            <Route path="/news" render={WithSuspense(News)} />
            <Route path="/music" render={WithSuspense(Music)} />
            <Route path="/settings" render={WithSuspense(Settings)} />
          <Route path="/users" render={() => <UsersContainer />}></Route>
          <Route path="/login" render={() => <Login />}></Route>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  authSucced: state.app.authSucced,
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const MainApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
};

export default MainApp;


