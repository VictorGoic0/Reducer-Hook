import React, { useReducer } from "react";
import { reducer, initialState } from "../reducer";
import Todo from "./Todo";

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { todos } = state;
  return todos.map(todo => <Todo todo={todo} key={todo.id} />);
};

export default TodoList;
