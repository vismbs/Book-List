import { useState } from "react";

function BookEdit({ bookTitle, onUpdate, id, onClick }) {
  const [title, setTitle] = useState(bookTitle);
  const handleChange = (eV) => {
    setTitle(eV.target.value);
  };
  const handleSubmit = (eV) => {
    eV.preventDefault();
    onUpdate(id, title);
    onClick();
  };
  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
