import React, { useState, useReducer } from "react";
import "./global.css";
import Todo from "./components/todo";
import Form from "./components/form";

const Alltodos = localStorage.setItem("todos", []);

function App() {
  // const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
      case "add":
        return [...state, { id: Date.now(), text: input, completed: false }];
    }
  };

  // const addTodo = () => {
  //   if (!input) return;
  //   setTodos(pre => [
  //     ...pre,
  //     { id: Date.now(), text: input, completed: false }
  //   ]);
  // };

  const [todos, dispatch] = useReducer(reducer, []);
  console.log(todos);

  return (
    <main>
      <h1 className="heading">A todo app</h1>
      <Form value={{ todos, dispatch, input, setInput }} />
      {todos.map(todo => {
        return <Todo todo={todo} key={todo.id} />;
      })}

      {/* <button>Click me</button> */}
    </main>
  );
}

export default App;
