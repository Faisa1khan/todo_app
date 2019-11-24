import React, { Fragment } from "react";
import "./global.css";
import Todo from "./components/todo";
import Form from "./components/form";

function Home({ props }) {
  const { todos, dispatch } = props;

  return (
    <Fragment>
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
    </Fragment>
  );
}

export default Home;
