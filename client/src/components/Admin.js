import React, { useEffect, useState } from "react";
import { AdminSidebar } from ".";
import "./Admin.css";
import axios from "axios";
import { Card } from "../assets";
import CurrencyFormat from "react-currency-format";

const Admin = ({ title, type }) => {
  const [books, setBooks] = useState([]);
  const [notBooks, setNotBooks] = useState([]);
  const PF = "http://localhost:5000/images/";

  useEffect(() => {
    fetchBooks();
    return () => {};
  }, [type]);

  const fetchBooks = async () => {
    try {
      const res = await axios.get(`/special/?special=${type}`);
      setBooks(res.data);

      const nres = await axios.get(`/special/?nin=1&special=${type}`);
      setNotBooks(nres.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleRemove = async (id) => {
    try {
      await axios.put("/book/pop/", {
        id: id,
        special: type,
      });
      const response = await axios.get(`/special/?special=${type}`);
      setBooks(response.data);

      const nres = await axios.get(`/special/?nin=1&special=${type}`);
      setNotBooks(nres.data);
    } catch (e) {
      console.log(e);
    }
  };
  const handleAdd = async (id) => {
    try {
      await axios.put("/book/add/", {
        id: id,
        special: type,
      });
      const response = await axios.get(`/special/?special=${type}`);
      setBooks(response.data);

      const nres = await axios.get(`/special/?nin=1&special=${type}`);
      setNotBooks(nres.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className="outerContainerAdmin">
        <div className="containerAdmin">
          <div className="titleAdmin">
            <h2>{title}</h2>
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
                      <CurrencyFormat
                        decimalScale={2}
                        value={curElem.price}
                        displayType={"text"}
                        thousandSeparator={true}
                        thousandSpacing={"2s"}
                        prefix={"₹"}
                      />
                    </div>
                    <div className="itemDetailsAdminButton">
                      <button onClick={() => handleRemove(curElem._id)}>
                        Remove From {title}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {/* </div>
            <div className="innerContainerAdmin"> */}
              {notBooks.map((curElem, index) => (
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
                      <CurrencyFormat
                        decimalScale={2}
                        value={curElem.price}
                        displayType={"text"}
                        thousandSeparator={true}
                        thousandSpacing={"2s"}
                        prefix={"₹"}
                      />
                    </div>
                    <div className="itemDetailsAdminButton">
                      <button onClick={() => handleAdd(curElem._id)}>
                        Add to {title}
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

export default Admin;
