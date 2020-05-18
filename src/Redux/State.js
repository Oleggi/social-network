let state = {
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
      {
        id: 6,
        name: "Emma",
        message: "Long time no see!",
        photo:
          "https://www.c7creative.com/wp-content/uploads/2015/05/Lee_C7_Avatar-01.png",
      },
    ],
    messages:[
        { id: 1, status: "received", message: "Hey, how are you doing?" },
        { id: 1, status: "sent",  message: "I'm great, thanks!" },
        { id: 3, status: "received", message: "what are you doing?" },
        { id: 3, status: "sent", message: "I'm learning React!" },
        { id: 2, status: "received", message: "Let's go out today!" },
        { id: 2, status: "sent", message: "Let me think..." },
      ]
  },
  profilePage: {
    postsData: [
      { id: 1, likesCount: 5, content: "I'm just happy!" },
      { id: 2, likesCount: 4, content: "Going to Italy." },
      { id: 3, likesCount: 22, content: "I get a new job today!" },
    ],
  },
};

export default state;
