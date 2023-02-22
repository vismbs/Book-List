import BookShow from "./BookShow";

function BookList({ bookArr, onDelete, onUpdate }) {
  return (
    <div className="book-list">
      {bookArr.map((book) => {
        return (
          <BookShow
            onDelete={onDelete}
            bookName={book.title}
            key={book.id}
            id={book.id}
            onUpdate={onUpdate}
          />
        );
      })}
    </div>
  );
}

export default BookList;
