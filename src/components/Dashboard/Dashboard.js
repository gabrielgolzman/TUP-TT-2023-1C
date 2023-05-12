import React, { useState } from "react";

import NewBook from "../NewBook/NewBook";
import BooksFilter from "../BookFilter/BookFilter";
import Books from "../Books/Books";

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

const Dashboard = () => {
  const [books, setBooks] = useState(BOOKS);
  const [filterYear, setFilterYear] = useState("2023");

  const addBookHandler = (book) => {
    setBooks([book, ...books]);
  };

  const filterYearChanged = (year) => {
    setFilterYear(year);
  };

  return (
    <>
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
