import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(ReduxThunk));

window.store = store;

export default store;