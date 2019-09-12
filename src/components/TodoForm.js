import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class TodoForm extends Component {
  state = {
    task: ""
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.task);
    this.setState({ task: "" });
  };

  handleChanges = e => {
    console.log(this.state);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.addTodo}>
        <input
          type="text"
          onChange={this.handleChanges}
          name="task"
          value={this.state.task}
          placeholder="...Todo"
          required
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(TodoForm);
