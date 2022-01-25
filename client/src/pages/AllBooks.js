import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Sidebar, Books } from "../components";
import axios from "axios";

const AllBooks = ({ categories }) => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(false);
  const { search } = useLocation();

  useEffect(() => {
    const fetchBooks = async () => {
      setError(false);
      const res = await axios.get("/book" + search);
      setBooks(res.data);
      if (res.data.length == 0) setError(true);
    };
    fetchBooks();
  }, [search]);
  useEffect(() => {
    document.title = "BooksWagon : All Books";
  }, []);
  return (
    <div>
      <div className="homeBody">
        <div className="sidebar">
          <Sidebar categories={categories} />
        </div>
        <div className="homeContainer">
          <div className="sections">
            <Books books={books} />
            {error && (
              <h2 style={{ marginTop: "10px" }}>
                No Books Found! Try Again with Different Preferences
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
