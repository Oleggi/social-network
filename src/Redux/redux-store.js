import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import { combineReducers, createStore, applyMiddleware, compose } from "redux"; 
import { reducer as formReducer } from 'redux-form'
import ReduxThunk from 'redux-thunk';
import appReducer from "./app-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(ReduxThunk)
  ));

//For testing in browser console
window.__store__ = store;

export default store;