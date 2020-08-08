// import React from "react";
import { addPost, deletePost } from "./profile-reducer";
import profileReducer from "./profile-reducer";

let state = {
  posts: [
    {id: 1,
     body: "Be yourself everyone else is already taken. ― Oscar Wilde",
     likes: 75 
    },
    {id: 2,
      body: `Be who you are and say what you feel, 
             because those who mind don't matter, and those who matter don't mind.― Bernard M. Baruch`,
      likes: 66 
     },
     {id: 3,
      body: `A room without books is like a body without a soul.”
            ― Marcus Tullius Cicero`,
      likes: 102 
     }
  ],
}

it ("length of post should be incremented", () => {
  // 1. Initial test data
  let action = addPost("Hey, I'm testing here");
  // 2. Actios
  let newState = profileReducer(state, action);

  // 3. Checking expectation
  expect(newState.posts.length).toBe(4);  
})


it ("body of new post should be correct", () => {
  // 1. Initial test data
  let action = addPost("Post body");
  // 2. Actios
  let newState = profileReducer(state, action);

  // 3. Checking expectation
  expect(newState.posts[3].body).toBe("Post body");  
})


it ("certain post should be deleted", () => {
  // 1. Initial test data
  let action = deletePost(3);
  // 2. Actios
  let newState = profileReducer(state, action);

  // 3. Checking expectation
  expect(newState.posts.length).toBe(2);  
})

it ("certain post shouldn't be deleted if id is incorrect", () => {
  // 1. Initial test data
  let action = deletePost(5);
  // 2. Actios
  let newState = profileReducer(state, action);

  // 3. Checking expectation
  expect(newState.posts.length).toBe(3);  
})