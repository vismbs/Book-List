import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ bookName, onDelete, id, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleClick = () => {
    onDelete(id);
  };

  const handleEditClick = () => {
    !showEdit ? setShowEdit(true) : setShowEdit(false);
  };
  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${id}/300/200`}></img>
      {!showEdit ? (
        bookName
      ) : (
        <BookEdit
          bookTitle={bookName}
          onUpdate={onUpdate}
          id={id}
          onClick={handleEditClick}
        />
      )}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
