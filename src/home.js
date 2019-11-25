import React, { Fragment, useContext } from "react";
import "./global.css";
import Todo from "./components/todo";
import Form from "./components/form";
import { TodoContext } from "./TodoContext";

function Home() {
  const { todos } = useContext(TodoContext);

  return (
    <Fragment>
      <main>
        <h1 className="heading">A todo app</h1>
        <Form />
        {todos ? (
          <ul className="todos">
            {todos.map(todo => {
              return (
                <li key={todo.id} className="todo">
                  <Todo value={{ todo }} />
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="loading">loading todos...</p>
        )}
      </main>
    </Fragment>
  );
}

export default Home;
