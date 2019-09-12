import React, { useState, useReducer } from "react";
import { reducer, initialState } from "./reducer";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewTodo] = useState("");
  const { todos } = state;
  const handleChanges = e => {
    setNewTodo(e.target.value);
  };
  const addTodo = e => {
    e.preventDefault();
    const action = {
      type: "ADD_TODO",
      payload: newTodo
    };
    dispatch(action);
    setNewTodo("");
  };
  const clearCompleted = () => {
    const action = {
      type: "CLEAR_TODOS"
    };
    dispatch(action);
  };
  return (
    <div className="container">
      <h1>ToDo List</h1>
      <TodoList todos={todos} dispatch={dispatch} />
      <TodoForm
        newTodo={newTodo}
        handleChanges={handleChanges}
        addTodo={addTodo}
      />
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default App;
