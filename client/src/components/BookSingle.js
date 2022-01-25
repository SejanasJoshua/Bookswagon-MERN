import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { Sidebar } from ".";
import BookSingleContainer from "./BookSingleContainer";

const BookSingle = ({ categories }) => {
  const [book, setBook] = useState([]);
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get("/book/" + path);
      setBook(res.data);
      console.log(res.data);
      console.log(path);
    };
    fetchBooks();
  }, [path]);
  return (
    <div>
      <div className="homeBody">
        <div className="sidebar">
          <Sidebar categories={categories} />
        </div>
        <BookSingleContainer book={book} />
      </div>
    </div>
  );
};

export default BookSingle;
