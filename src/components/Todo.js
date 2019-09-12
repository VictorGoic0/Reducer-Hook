import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";

class Todo extends Component {
  toggleTodo = id => {
    this.props.toggleTodo(id);
  };

  render() {
    return (
      <div
        onClick={() => this.toggleTodo(this.props.todo.id)}
        className={this.props.todo.completed ? `cleared` : ``}
      >
        <li>{this.props.todo.task}</li>
      </div>
    );
  }
}

export default connect(
  null,
  { toggleTodo }
)(Todo);
