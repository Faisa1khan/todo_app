import React, { useState } from "react";
import "./form.css";
const Form = ({ value }) => {
  const { dispatch } = value;
  const [input, setInput] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!input) return;
    dispatch({ type: "ADD_TODO", input: input });
    setInput("");
  };

  return (
    <React.Fragment>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="inputField" className="label">
          Add a todo
          <input
            type="text"
            className="input"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </label>
        <button className="button">Save Todo</button>
      </form>
    </React.Fragment>
  );
};

export default Form;
