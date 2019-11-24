import React, { useReducer, useEffect } from "react";
import ReactDom from "react-dom";
import Home from "./home";
import { Router, Link } from "@reach/router";
import Buckets from "./components/buckets";
import { reducer } from "./reducer";
import { intialValue } from "./intialState";

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
              <Link to="/about">Bucket</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Router>
        <Home path="/" props={{ todos, dispatch }} />
        <Buckets path="/about" props={{ todos, dispatch }} />
      </Router>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
