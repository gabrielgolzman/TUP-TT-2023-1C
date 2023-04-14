import "./BookItem.css";

import DateRead from "../DateRead/DateRead";

const BookItem = ({ bookTitle, bookAuthor, bookDateRead, bookPageCount }) => {
  //   const title = "100 años de soledad";
  //   const author = "Gabriel García Marquez";
  //   const pageCount = 321;
  //   const dateRead = new Date(2023, 12, 7);

  return (
    <div className="book-item-container">
      <h2>{bookTitle}</h2>
      <h3>{bookAuthor}</h3>
      <DateRead bookDateRead={bookDateRead} />
      <p>{bookPageCount} páginas</p>
    </div>
  );
};

export default BookItem;
