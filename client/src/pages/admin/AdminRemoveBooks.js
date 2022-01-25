import React, { useEffect, useState } from "react";
import { AdminSidebar } from "../../components";
import "../../components/Admin.css";
import axios from "axios";
import { Card } from "../../assets";

import "./AdminAddBooks.css";

const AdminRemoveBooks = () => {
  const [books, setBooks] = useState([]);
  const PF = "http://localhost:5000/images/";

  useEffect(() => {
    fetchBooks();
    return () => {};
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await axios.get("/book/");
      setBooks(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/book/?id=${id}`);

      const res = await axios.get("/book/");
      setBooks(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div className="outerContainerAdmin">
        <div className="containerAdmin">
          <div className="titleAdmin">
            <h2>Delete Books</h2>
          </div>
          <div className="innerGridAdmin">
            <AdminSidebar />
            <div className="innerContainerAdmin">
              {books.map((curElem, index) => (
                <div className="containerAdminItems" key={index}>
                  <div className="itemImageAdmin">
                    <img
                      src={PF + curElem.photo}
                      alt={curElem.title}
                      width="300"
                      height="200"
                    />
                  </div>
                  <div className="itemDetailsAdmin">
                    <div className="itemDetailsAdminTitle">
                      <h5>{curElem.title}</h5>
                    </div>
                    <div className="itemDetailsAdminPublisher">
                      <p className="adminItemPara">
                        Publisher:&nbsp;
                        {curElem.publisher}
                      </p>
                    </div>
                    <div className="itemDetailsAdminPrice">
                      {`Price: ${curElem.price} Rs.`}
                    </div>
                    <div className="itemDetailsAdminButton">
                      <button onClick={() => handleDelete(curElem._id)}>
                        Delete Book
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRemoveBooks;
