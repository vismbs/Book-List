import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);
  const deleteBookByID = (bookID) => {
    const updatedBooks = books.filter((book) => book.id !== bookID);
    setBooks(updatedBooks);
  };
  const updateBookByID = (bookID, upTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === bookID) {
        return {
          ...book,
          title: upTitle,
        };
      } else {
        return book;
      }
    });
    setBooks(updatedBooks);
  };
  const createBook = (newBook) => {
    const newBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 9999),
        title: newBook,
      },
    ];
    setBooks(newBooks);
  };
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookCreate onCreate={createBook} />
      <BookList
        bookArr={books}
        onDelete={deleteBookByID}
        onUpdate={updateBookByID}
      />
    </div>
  );
}

export default App;
