import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";

const TodoList = props => {
  return props.todos.map(todo => <Todo todo={todo} key={todo.id} />);
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  {}
)(TodoList);
