import React, { useState, useEffect, useContext } from "react";
import "./bucket.css";
import Bucket from "./bucket";
import { intialValue } from "../intialState";
import { TodoContext } from "../TodoContext";

const Buckets = () => {
  const [input, setInput] = useState("");
  const { todos } = useContext(TodoContext);
  const intialState = todos.filter(arr => arr.bucket);

  const [bucket, setBucket] = useState(intialValue("bucket"));

  useEffect(() => {
    window.localStorage.setItem("bucket", JSON.stringify(bucket));
  }, [bucket]);

  const addBucket = e => {
    e.preventDefault();
    if (!input) return;
    setBucket(list => [...list, { id: input }]);
    setInput("");
  };

  return (
    <>
      <h1>Bucket</h1>
      <form className="bucket-list-header" onSubmit={addBucket}>
        <input
          type="text"
          className="input"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button className="add-bucket button">Add Bucket</button>
      </form>
      <ul className="bucket-list">
        {bucket.map((name, id) => (
          <li key={id} className="bucket-item">
            <Bucket name={name.id} state={{ bucket, setBucket }} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Buckets;
