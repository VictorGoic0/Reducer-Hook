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
  return (
    <div className="container">
      <h1>ToDo List</h1>
      <TodoList todos={todos} dispatch={dispatch} />
      <TodoForm
        newTodo={newTodo}
        handleChanges={handleChanges}
        addTodo={addTodo}
      />
    </div>
  );
};

export default App;
