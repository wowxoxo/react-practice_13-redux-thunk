import { store } from "..";
import { todoList } from "../../api/todos";
import {
  ADD_TODO,
  REMOVE_TODO,
  CHANGE_TODO_TEXT,
  CHANGE_TODO,
  CHANGE_TODO_DONE
} from "./actions";

export const todoReducer = (state = todoList, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodo = action.payload;
      return [...state, newTodo];
    }
    case CHANGE_TODO_TEXT: {
      const { id, text } = action.payload;
      // const todoIdx = state.findIndex((item) => item.id === id)
      // if (todoIdx !== -1) {
      //   const foundedTodo = state[todoIdx]
      //   let updatedTodo = {...foundedTodo }
      //   updatedTodo.text = text
      //   const updatedTodos = [...state]
      //   updatedTodos[todoIdx] = updatedTodo
      //   return updatedTodos
      // } else {
      //   return state
      // }
      return [
        ...state.map((todo) => {
          if (todo.id === id) {
            return { ...todo, text };
          } else {
            return todo;
          }
        })
      ];
    }

    case CHANGE_TODO_DONE: {
      const { id, done } = action.payload;
      return [
        ...state.map((todo) => {
          if (todo.id === id) {
            return { ...todo, done };
          } else {
            return todo;
          }
        })
      ];
    }

    case CHANGE_TODO: {
      const { id, text, done } = action.payload;
      return [
        ...state.map((todo) => {
          if (todo.id === id) {
            return { ...todo, text, done };
          } else {
            return todo;
          }
        })
      ];
    }

    case REMOVE_TODO: {
      const { id } = action.payload;
      return [...state.filter((todo) => todo.id !== id)];
    }

    default:
      return state;
  }
};
