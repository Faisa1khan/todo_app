import React, { useState, useRef, useContext } from "react";
import "./todo.css";
import { TodoContext } from "../TodoContext";

const Todo = ({ value }) => {
  const { dispatch } = useContext(TodoContext);
  const { todo } = value;

  const [edit, setEdit] = useState(false);

  const [changeValue, setChangeValue] = useState("");

  const inputEl = useRef();

  const handleDelete = id => {
    dispatch({ type: "REMOVE_TODO", id: id });
  };

  const toggleCompleted = id => {
    dispatch({ type: "TOGGLE_TODO", id: id });
  };

  const handleEdit = async () => {
    setEdit(!edit);
    setChangeValue(todo.text);
  };

  const handleEditSubmit = e => {
    e.preventDefault();
    setEdit(false);
    dispatch({ type: "EDIT_TODO", id: todo.id, value: changeValue });
  };

  return (
    <React.Fragment>
      {edit ? (
        <form onSubmit={handleEditSubmit} className="Edit-form">
          <input
            ref={inputEl}
            type="text"
            value={changeValue}
            className="edit"
            onChange={e => setChangeValue(e.target.value)}
            onKeyDown={e => e.keyCode === 13 && handleEditSubmit(e)}
          />
          <button className="edit-button">
            <span role="img" aria-label="Submit" title="Submit">
              ✔️
            </span>
          </button>
        </form>
      ) : (
        <>
          <label htmlFor={`todo-toggle-${todo.id}`} className="label-todo">
            Mark Completed
          </label>
          <input
            id={`todo-toggle-${todo.id}`}
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleCompleted(todo.id)}
            className="toggle"
          />
          <p
            className={`text ${todo.completed && "text-completed"} `}
            onDoubleClick={handleEdit}
          >
            {todo.text}
          </p>
          <label htmlFor={`todo-delete-${todo.id}`} className="label-todo">
            Delete
          </label>
          <button onClick={() => handleDelete(todo.id)} className="delete">
            <span role="img" aria-label="delete" title="delete this todo">
              ❌
            </span>
          </button>
          <button onClick={handleEdit} className="edit-button">
            <span title="edit" aria-label="edit">
              Edit
            </span>
          </button>
        </>
      )}
    </React.Fragment>
  );
};

export default Todo;
