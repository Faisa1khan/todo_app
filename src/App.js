import React, { useReducer, useEffect } from "react";
import ReactDom from "react-dom";
import Home from "./home";
import { Router, Link } from "@reach/router";
import Buckets from "./components/buckets";
import { reducer } from "./reducer";
import { intialValue } from "./intialState";
import { TodoContext } from "./TodoContext";

const App = () => {
  const [todos, dispatch] = useReducer(reducer, intialValue("todos"));
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bucket">Bucket</Link>
            </li>
          </ul>
        </nav>
      </header>
      <TodoContext.Provider value={{ todos, dispatch }}>
        <Router>
          <Home path="/" props={{ todos, dispatch }} />
          <Buckets path="/bucket" props={{ todos, dispatch }} />
        </Router>
      </TodoContext.Provider>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
