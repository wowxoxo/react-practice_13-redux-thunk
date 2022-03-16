import React from "react";
import { useSelector } from "react-redux";

import { TodoList } from "./TodoList";

export const TodoListContainer = () => {
  const doneItems = useSelector(state => state.todos.filter(todo => todo.done))
  const todoItems = useSelector(state => state.todos.filter(todo => !todo.done))

  return <TodoList doneItems={doneItems} todoItems={todoItems} />;
};
