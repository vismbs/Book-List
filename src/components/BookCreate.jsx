import { useState } from "react";
import "../App.css";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");
  const handleChange = (eV) => {
    setTitle(eV.target.value);
  };

  const handleSubmit = (eV) => {
    eV.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <input className="input" onChange={handleChange} value={title} />
        <button className="button">Create!!</button>
      </form>
    </div>
  );
}

export default BookCreate;
