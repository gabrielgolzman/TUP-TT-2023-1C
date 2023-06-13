import { useEffect, useReducer, useState } from "react";
import { Button } from "react-bootstrap";

import "./BookForm.css";

const initialBookForm = {
  title: "",
  author: "",
  dateRead: "",
  pageCount: "",
  formValid: false,
};

const bookFormReducer = (state, action) => {
  switch (action.type) {
    case "TITLE_UPDATED":
      return {
        ...state,
        title: action.payload,
        formValid:
          action.payload && state.author && state.dateRead && state.pageCount,
      };
    case "AUTHOR_UPDATED":
      return {
        ...state,
        author: action.payload,
        formValid:
          state.title && action.payload && state.dateRead && state.pageCount,
      };
    case "DATE_READ_UPDATED":
      return {
        ...state,
        dateRead: action.payload,
        formValid:
          state.title && state.author && action.payload && state.pageCount,
      };
    case "PAGE_COUNT_UPDATED":
      return {
        ...state,
        pageCount: action.payload,
        formValid:
          state.title && state.author && state.dateRead && action.payload,
      };
    default:
      return state;
  }
};

const BookForm = ({ onBookAdded, onHideForm }) => {
  const [bookForm, dispatch] = useReducer(bookFormReducer, initialBookForm);
  // const [title, setTitle] = useState("");
  // const [author, setAuthor] = useState("");
  // const [dateRead, setDateRead] = useState("");
  // const [pageCount, setPageCount] = useState("");
  // const [formValid, setFormValid] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log("Check form");
  //     setFormValid(title && author && dateRead && pageCount);
  //   }, 500);

  //   return () => {
  //     console.log("Cleanup");
  //     clearTimeout(timer);
  //   };
  // }, [title, author, dateRead, pageCount]);

  const changeTitleHandler = (event) => {
    dispatch({
      type: "TITLE_UPDATED",
      payload: event.target.value,
    });
  };

  const changeAuthorHandler = (event) => {
    dispatch({
      type: "AUTHOR_UPDATED",
      payload: event.target.value,
    });
  };

  const changeDateReadHandler = (event) => {
    dispatch({
      type: "DATE_READ_UPDATED",
      payload: event.target.value,
    });
  };

  const changePageCountHandler = (event) => {
    dispatch({
      type: "PAGE_COUNT_UPDATED",
      payload: event.target.value,
    });
  };

  const addBookHandler = (event) => {
    event.preventDefault();
    const newBook = {
      id: Math.random(),
      title: bookForm.title,
      author: bookForm.author,
      dateRead: new Date(bookForm.dateRead),
      pageCount: bookForm.pageCount,
    };
    onBookAdded(newBook);
  };

  const hideFormHandler = (event) => {
    event.preventDefault();
    onHideForm();
  };

  return (
    <form>
      <div className="new-book-controls">
        <div className="new-book-control">
          <label>Título</label>
          <input
            onChange={changeTitleHandler}
            type="text"
            value={bookForm.title}
            className="input-control"
          />
        </div>
        <div className="new-book-control">
          <label>Autor</label>
          <input
            onChange={changeAuthorHandler}
            type="text"
            className="input-control"
            value={bookForm.author}
          />
        </div>
        <div className="new-book-control">
          <label>Páginas</label>
          <input
            onChange={changePageCountHandler}
            type="number"
            className="input-control"
            value={bookForm.pageCount}
            min="1"
            step="1"
          />
        </div>
        <div className="new-book-control">
          <label>¿Cuándo terminaste de leerlo?</label>
          <input
            onChange={changeDateReadHandler}
            type="date"
            className="input-control"
            min="2019-01-01"
            value={bookForm.dateRead}
            max="2023-12-31"
          />
        </div>
      </div>
      <div className="new-book-actions">
        <button onClick={hideFormHandler}>Cancelar</button>
        <Button disabled={!bookForm.formValid} onClick={addBookHandler}>
          Agregar lectura
        </Button>
      </div>
    </form>
  );
};

export default BookForm;
