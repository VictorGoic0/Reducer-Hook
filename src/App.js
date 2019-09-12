import React, { Component } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { connect } from "react-redux";
import { clearCompleted } from "./actions";

class App extends Component {
  clearCompleted = () => {
    this.props.clearCompleted();
  };

  render() {
    return (
      <div className="container">
        <h1>ToDo List</h1>
        <TodoList />
        <TodoForm />
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default connect(
  null,
  { clearCompleted }
)(App);
