import React, { useState } from "react";
import "./form.css";
const Form = ({ value }) => {
  const { state, dispatch, input, setInput } = value;

  return (
    <React.Fragment>
      <form className="form" onSubmit={e => e.preventDefault()}>
        <label htmlFor="inputField" className="label">
          Add a todo
          <input
            type="text"
            className="input"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </label>
        <button className="button" onClick={() => dispatch({ type: "add" })}>
          Save Todo
        </button>
      </form>
    </React.Fragment>
  );
};

export default Form;
