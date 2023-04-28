import "./Books.css";

import BookItem from "../BookItem/BookItem";

const Books = ({ books }) => {
  console.log(books);
  const booksMapped = books.map((book) => (
    <BookItem
      key={book.id}
      bookTitle={book.title}
      bookAuthor={book.author}
      bookDateRead={book.dateRead}
      bookPageCount={book.pageCount}
    />
  ));

  return <div className="books">{booksMapped}</div>;
};

export default Books;
