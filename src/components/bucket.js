import React, { useState, useContext } from "react";
import "./bucket.css";
import Todo from "./todo";
import { TodoContext } from "../TodoContext";

const Bucket = ({ name, state }) => {
  const { todos, dispatch } = useContext(TodoContext);
  const { bucket, setBucket } = state;
  const bucketList = todos.filter(arr => arr.bucket === name);

  const [input, setInput] = useState("");

  const handleRemove = () => {
    setBucket(bucket.filter(b => b.id !== name));
    dispatch({ type: "DELETE_BUCKET", name });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!input) return;
    dispatch({ type: "TODO_WITH_BUCKET", input, name });
    setInput("");
  };

  return (
    <>
      <div className="bucket-header">
        <h3>{name}</h3>
        <button className="delete" onClick={() => handleRemove()}>
          <span role="img" aria-label="delete" title="delete this todo">
            ❌
          </span>
        </button>
      </div>
      <div className="bucket">
        <ul className="todos">
          {bucketList.map((todo, id) => (
            <li key={id} className="todo">
              <Todo value={{ todo, todos, dispatch }} />
            </li>
          ))}
        </ul>
        <form className="bucket-inner" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button className="delete">
            <span role="img" aria-label="delete" title="delete this todo">
              ➕
            </span>
          </button>
        </form>
      </div>
    </>
  );
};

export default Bucket;
