import "./Books.css";

import BookItem from "../BookItem/BookItem";
import { memo } from "react";

const Books = memo(({ books, filterYear }) => {
  console.log("In Books");
  if (books.length === 0) {
    return <></>;
  }

  const booksMapped = books
    .filter((book) => book.dateRead.getFullYear().toString() === filterYear)
    .map((book) => (
      <BookItem
        key={book.id}
        bookTitle={book.title}
        bookAuthor={book.author}
        bookDateRead={book.dateRead}
        bookPageCount={book.pageCount}
      />
    ));

  return (
    <div className="books">
      {booksMapped.length === 0 ? (
        <p>No hay libros disponibles</p>
      ) : (
        booksMapped
      )}
    </div>
  );
});

export default Books;
