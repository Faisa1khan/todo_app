import React, { useState } from "react";
import "./bucket.css";

const Bucket = ({ name, props }) => {
  const { todos, dispatch } = props;

  const initialState = todos.filter(arr => arr.bucket === name);
  console.log(initialState.id);
  const [list, setlist] = useState(initialState);
  const [input, setInput] = useState("");
  console.log(props.todos);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!input) return;
    setlist([...list, input]);
    dispatch({ type: "TODO_WITH_BUCKET", input, name });
    setInput("");
  };

  return (
    <div className="bucket">
      <h3>{name}</h3>
      <form className="bucket-inner" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button>Add more</button>
      </form>
      <ul>
        {list.map(({ text }, id) => (
          <li key={id}>{text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Bucket;
