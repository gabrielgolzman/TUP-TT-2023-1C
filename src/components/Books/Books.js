import "./Books.css";

import BookItem from "../BookItem/BookItem";

const Books = ({ books }) => {
  return (
    <div className="books">
      <BookItem
        bookTitle={books[0].title}
        bookAuthor={books[0].author}
        bookDateRead={books[0].dateRead}
        bookPageCount={books[0].pageCount}
      />
      <BookItem
        bookTitle={books[1].title}
        bookAuthor={books[1].author}
        bookDateRead={books[1].dateRead}
        bookPageCount={books[1].pageCount}
      />
      <BookItem
        bookTitle={books[2].title}
        bookAuthor={books[2].author}
        bookDateRead={books[2].dateRead}
        bookPageCount={books[2].pageCount}
      />
      <BookItem
        bookTitle={books[3].title}
        bookAuthor={books[3].author}
        bookDateRead={books[3].dateRead}
        bookPageCount={books[3].pageCount}
      />
    </div>
  );
};

export default Books;
