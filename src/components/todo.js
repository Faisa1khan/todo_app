import React from "react";

const Todo = ({ todo, setTodos }) => {
  console.log(todo);
  return (
    <React.Fragment>
      <p>{todo.text}</p>
    </React.Fragment>
  );
};

export default Todo;
