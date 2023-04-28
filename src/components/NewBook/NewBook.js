import "./NewBook.css";

import BookForm from "../BookForm/BookForm";

const NewBook = ({onBookAdded}) => {

  const onBookAddedHandler = (book) => {
    console.log(book);
    console.log("In new Book");
    onBookAdded(book);
  }
  return (
    <div className="new-book">
      <BookForm onBookAdded={onBookAddedHandler} />
    </div>
  );
};

export default NewBook;
