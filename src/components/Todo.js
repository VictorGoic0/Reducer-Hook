import React from "react";

const Todo = ({ todo, dispatch }) => {
  const toggleTodo = id => {
    const action = {
      type: "TOGGLE_TODO",
      payload: id
    };
    dispatch(action);
  };

  return (
    <div
      onClick={() => toggleTodo(todo.id)}
      className={todo.completed ? `cleared` : ``}
    >
      <li>{todo.task}</li>
    </div>
  );
};

export default Todo;
