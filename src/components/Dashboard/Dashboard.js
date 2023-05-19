import React, { useEffect, useState } from "react";

import NewBook from "../NewBook/NewBook";
import BooksFilter from "../BookFilter/BookFilter";
import Books from "../Books/Books";
import { useNavigate } from "react-router";
import { Button, Col, Row } from "react-bootstrap";

const BOOKS = [
  {
    id: 1,
    title: "100 años de soledad",
    author: "Gabriel García Marquez",
    dateRead: new Date(2021, 8, 12),
    pageCount: 410,
  },
  {
    id: 2,
    title: "Todos los fuegos el fuego",
    author: "Julio Cortazar",
    dateRead: new Date(2020, 6, 11),
    pageCount: 197,
  },
  {
    id: 3,
    title: "Asesinato en el Orient Express",
    author: "Agatha Christie",
    dateRead: new Date(2021, 5, 9),
    pageCount: 256,
  },
  {
    id: 4,
    title: "Las dos torres",
    author: "J.R.R Tolkien",
    dateRead: new Date(2020, 3, 22),
    pageCount: 352,
  },
];

const Dashboard = ({ onLogout }) => {
  const [books, setBooks] = useState([]);
  const [filterYear, setFilterYear] = useState("2023");
  console.log("In Dashboard!");

  useEffect(() => {
    console.log("useEffect on mount");
    debugger;
    // const bookStoraged = JSON.parse(localStorage.getItem("books"));

    // if (bookStoraged) {
    //   setBooks(
    //     bookStoraged.map((book) => ({
    //       ...book,
    //       dateRead: new Date(book.dateRead),
    //     }))
    //   );
    // } else {
    //   localStorage.setItem("books", JSON.stringify(BOOKS));
    // }

    fetch("https://63a44a012a73744b0072f847.mockapi.io/api/books/Books", {
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((bookData) => {
        const booksMapped = bookData.map((book) => ({
          ...book,
          dateRead: new Date(book.dateRead),
        }));
        setBooks(booksMapped);
      })
      .catch((error) => console.log(error));
  }, []);

  const navigation = useNavigate();

  const addBookHandler = (book) => {
    const newBooksArray = [book, ...books];
    setBooks(newBooksArray);
    localStorage.setItem("books", JSON.stringify(newBooksArray));
  };

  const filterYearChanged = (year) => {
    setFilterYear(year);
  };

  const onLogoutHandler = () => {
    onLogout();
    navigation("/login");
  };

  return (
    <>
      <Row className="me-2 my-4">
        <Col />
        <Col md={3} className="d-flex justify-content-end">
          <Button variant="primary" onClick={onLogoutHandler}>
            Cerrar sesión
          </Button>
        </Col>
      </Row>
      <NewBook onBookAdded={addBookHandler} />
      <BooksFilter
        filterYear={filterYear}
        onFilterYearChange={filterYearChanged}
      />
      <Books filterYear={filterYear} books={books} />
    </>
  );
};

export default Dashboard;
