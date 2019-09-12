import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [newTodo, setNewTodo] = useState("");
  const handleChanges = e => {
    setNewTodo(e.target.value);
  };
  const addTodo = () => {
    const todo = {
      task: newTodo,
      id: Date.now(),
      completed: false
    };
  };
  return (
    <div className="container">
      <h1>ToDo List</h1>
      <TodoList />
      <TodoForm
        newTodo={newTodo}
        handleChanges={handleChanges}
        addTodo={addTodo}
      />
    </div>
  );
};

export default App;
