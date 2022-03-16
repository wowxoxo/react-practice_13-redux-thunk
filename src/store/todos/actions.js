import { uniqId } from "../../utils/id";

// TODO: Should we add TODO postfix ?
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const CHANGE_TODO_TEXT = "CHANGE_TODO_TEXT";
export const CHANGE_TODO_DONE = "CHANGE_TODO_DONE";
export const CHANGE_TODO = "CHANGE_TODO";

// action
// { type: 'SOME', payload: id }

// action creator
export const changeTodoText = (item, value) => {
  return { type: CHANGE_TODO_TEXT, payload: { id: item.id, text: value } };
};

export const changeTodoDone = (item, value) => {
  return { type: CHANGE_TODO_DONE, payload: { id: item.id, done: value } };
};

export const removeTodo = (item) => {
  return { type: REMOVE_TODO, payload: { id: item.id } };
};

export const addTodo = (text) => {
  return { type: ADD_TODO, payload: { id: uniqId(), text, done: false } };
};
