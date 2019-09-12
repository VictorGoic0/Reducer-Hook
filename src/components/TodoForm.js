import React from "react";

const TodoForm = ({ addTodo, handleChanges, newTodo }) => {
  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        onChange={handleChanges}
        name="task"
        value={newTodo}
        placeholder="...Todo"
        required
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
