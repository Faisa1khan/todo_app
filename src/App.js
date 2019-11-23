import React, { useReducer, useEffect } from "react";
import "./global.css";
import Todo from "./components/todo";
import Form from "./components/form";

// // const Alltodos = localStorage.setItem("todos", []);
// const getStateFromLocaleStorage = () => {
//   const storage = localStorage.getItem("counterState");
//   if (storage) return JSON.parse(storage);
//   return { count: 0 };
// };

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [
          ...state,
          { id: Date.now(), text: action.input, completed: false }
        ];
      case "REMOVE_TODO":
        return [...state.filter(todo => todo.id !== action.id)];

      case "TOGGLE_TODO":
        return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        );
      case "EDIT_TODO":
        return state.map(todo =>
          todo.id === action.id ? { ...todo, text: action.value } : todo
        );
      default:
        return state;
    }
  };

  const intialValue = JSON.parse(window.localStorage.getItem("todos")) || [];

  const [todos, dispatch] = useReducer(reducer, intialValue);
  console.log(todos);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <main>
      <h1 className="heading">A todo app</h1>
      <Form value={{ todos, dispatch }} />
      {todos ? (
        <ul className="todos">
          {todos.map(todo => {
            return (
              <li key={todo.id} className="todo">
                <Todo value={{ todo, todos, dispatch }} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="loading">loading todos...</p>
      )}
    </main>
  );
}

export default App;
