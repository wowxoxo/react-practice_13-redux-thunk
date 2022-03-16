import React, { useEffect, useState } from "react";
import { todoList } from "../../api/todos";

import { TodoList } from "./TodoList";

export const TodoListContainer = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setState(todoList);
    }, 1000);
  }, []);

  const doneItems = () => {
    return state.filter((item) => item.done);
  };

  const todoItems = () => {
    return state.filter((item) => !item.done);
  };

  return <TodoList doneItems={doneItems()} todoItems={todoItems()} />;
};
