const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT";

let avatarSample =
  "https://www.c7creative.com/wp-content/uploads/2015/05/Lee_C7_Avatar-01.png";

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Kiril",
      message: "How're you?",
      photo: avatarSample,
    },
    {
      id: 2,
      name: "John",
      message: "Hello!",
      photo: avatarSample,
    },
    {
      id: 3,
      name: "Smith",
      message: "Long time no see!",
      photo: avatarSample,
    },
    {
      id: 4,
      name: "Vasil",
      message: "Long time no see!",
      photo: avatarSample,
    },
    {
      id: 5,
      name: "Peter",
      message: "Long time no see!",
      photo: avatarSample,
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 7,
        status: "sent",
        message: state.inputDataMessages,
      };

      if (state.inputDataMessages.length !== 0) {
          return {
          ...state,
          inputDataMessages: "",
          messages: [...state.messages, newMessage],
        }
      };
      return state;

    case UPDATE_MESSAGE_TEXT:
      return { ...state, inputDataMessages: action.message };
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageTextActionCreator = (message) => ({
  type: UPDATE_MESSAGE_TEXT,
  message: message,
});

export default dialogsReducer;
