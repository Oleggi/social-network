//Presentational state, it shows how everything works under the hood

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: "Kiril",
          message: "How're you?",
          photo:
            "https://www.c7creative.com/wp-content/uploads/2015/05/Lee_C7_Avatar-01.png",
        },
        {
          id: 2,
          name: "John",
          message: "Hello!",
          photo: "https://www.pngarts.com/files/3/Avatar-Transparent-Image.png",
        },
        {
          id: 3,
          name: "Smith",
          message: "Long time no see!",
          photo:
            "https://www.c7creative.com/wp-content/uploads/2015/05/Lee_C7_Avatar-01.png",
        },
        {
          id: 4,
          name: "Vasil",
          message: "Long time no see!",
          photo: "https://www.pngarts.com/files/3/Avatar-Transparent-Image.png",
        },
        {
          id: 5,
          name: "Peter",
          message: "Long time no see!",
          photo: "https://www.pngarts.com/files/3/Avatar-Transparent-Image.png",
        },
      ],
      inputDataMessages: "",
      messages: [
        { id: 1, status: "received", message: "Hey, how are you doing?" },
        { id: 2, status: "sent", message: "I'm great, thanks!" },
        { id: 3, status: "received", message: "what are you doing?" },
        { id: 4, status: "sent", message: "I'm learning React!" },
        { id: 5, status: "received", message: "Let's go out today!" },
        { id: 6, status: "sent", message: "Let me think..." },
      ],
    },
    profilePage: {
      inputData: "",
      postsData: [
        { id: 1, likesCount: 5, content: "I'm just happy!" },
        { id: 2, likesCount: 4, content: "Going to Italy." },
        { id: 3, likesCount: 22, content: "I get a new job today!" },
      ],
    },
    sidebar: {
      friends: [
        {
          id: 1,
          name: "Kiril",
          photo:
            "https://www.c7creative.com/wp-content/uploads/2015/05/Lee_C7_Avatar-01.png",
        },
        {
          id: 2,
          name: "John",
          photo: "https://www.pngarts.com/files/3/Avatar-Transparent-Image.png",
        },
        {
          id: 3,
          name: "Smith",
          photo:
            "https://www.c7creative.com/wp-content/uploads/2015/05/Lee_C7_Avatar-01.png",
        },
        {
          id: 4,
          name: "Vasil",
          photo: "https://www.pngarts.com/files/3/Avatar-Transparent-Image.png",
        },
        {
          id: 5,
          name: "Peter",
          photo: "https://www.pngarts.com/files/3/Avatar-Transparent-Image.png",
        },
        {
          id: 6,
          name: "Karl",
          photo:
            "https://www.c7creative.com/wp-content/uploads/2015/05/Lee_C7_Avatar-01.png",
        },
        {
          id: 7,
          name: "Elon",
          photo:
            "https://www.c7creative.com/wp-content/uploads/2015/05/Lee_C7_Avatar-01.png",
        },
        {
          id: 8,
          name: "Fibby",
          photo:
            "https://www.c7creative.com/wp-content/uploads/2015/05/Lee_C7_Avatar-01.png",
        },
        {
          id: 9,
          name: "Tom",
          photo:
            "https://www.c7creative.com/wp-content/uploads/2015/05/Lee_C7_Avatar-01.png",
        },
      ],
    },
  },
  _callSubscriber() {
    console.log("State has changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    dialogsReducer(this._state.dialogsPage, action);
    profileReducer(this._state.profilePage, action);
    sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
    }
  }







window.store = store;

export default store;
