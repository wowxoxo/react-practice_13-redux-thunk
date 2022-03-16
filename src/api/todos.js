import { uniqId } from "../utils/id";

// class Todo {
//   constructor(text, done) {

//   }
// }

export const todoList = [
  {
    id: uniqId(),
    text: "Learn JS",
    done: true
  },
  {
    id: uniqId(),
    text: "Learn React",
    done: true
  },
  {
    id: uniqId(),
    text: "Learn Redux",
    done: true
  },
  {
    id: uniqId(),
    text: "Learn pure functions",
    done: false
  },
  {
    id: uniqId(),
    text: "Create todo app",
    done: false
  }
];
