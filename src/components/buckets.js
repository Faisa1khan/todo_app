import React, { useState, useEffect } from "react";
import "./bucket.css";
import Bucket from "./bucket";
import { intialValue } from "../intialState";

const Buckets = ({ props }) => {
  const [input, setInput] = useState("");
  const [bucket, setBucket] = useState(intialValue("bucket"));

  useEffect(() => {
    window.localStorage.setItem("bucket", JSON.stringify(bucket));
  }, [bucket]);

  console.log(bucket);
  console.log(props);
  let name = "Demo";

  const addBucket = e => {
    e.preventDefault();
    if (!input) return;

    setBucket(list => [...list, input]);
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
          <li key={id}>
            <Bucket name={name} props={props} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Buckets;

// temp Bucket

{
  /* <form className="bucket">
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button>Submit</button>
      </form> */
}
