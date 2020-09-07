let avatar = "https://www.c7creative.com/wp-content/uploads/2015/05/Lee_C7_Avatar-01.png";

let initialState = {
  friends: [
    {
      id: 1,
      name: "Kiril",
      photo:
        avatar,
    },
    {
      id: 2,
      name: "John",
      photo: avatar,
    },
    {
      id: 3,
      name: "Smith",
      photo: avatar,
    },
    {
      id: 4,
      name: "Vasil",
      photo: avatar,
    },
    {
      id: 5,
      name: "Peter",
      photo: avatar,
    },
    {
      id: 6,
      name: "Karl",
      photo: avatar,
    },
    {
      id: 7,
      name: "Elon",
      photo: avatar,
    },
    {
      id: 8,
      name: "Fibby",
      photo: avatar,
    },
    {
      id: 9,
      name: "Tom",
      photo: avatar,
    },
  ]
}

const sidebarReducer = (state = initialState, action) => {
        return state;
};

export default sidebarReducer;
