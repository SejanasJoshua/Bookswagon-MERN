import React from "react";
import Book from "./Book";
import "./style.css";

const Books = ({ books }) => {
  return (
    <div className="booksJSContainer">
      {books.map((book) => (
        <Book book={book} />
      ))}
    </div>
  );
};

export default Books;
