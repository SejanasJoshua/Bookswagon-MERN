import React from "react";
import { Card } from "../assets";
import "./style.css";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../context/CartProvider";

const Book = ({ book }) => {
  const [{ basket }, dispatch] = useStateValue();
  let price = parseInt(book.price);
  const PF = "http://localhost:5000/images/";

  const addToCart = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: book._id,
        title: book.title,
        author: book.author,
        publisher: book.publisher,
        price: price,
        photo: book.photo,
      },
    });
  };
  return (
    <div>
      <div className="bookJSOuterContainer">
        <img src={PF + book.photo} alt="" className="bookJSImg" />

        <div className="bookJSInfo">
          <div className="bookTitle">
            <Link to={`/singlebook/${book._id}`} className="link">
              <h3>{book.title}</h3>
            </Link>
          </div>
          <div className="bookAuthor">Author:&nbsp;{book.author}</div>
          <div className="bookPublisher">{book.publisher}</div>
          <div className="bookPrice">
            <CurrencyFormat
              decimalScale={2}
              value={book.price}
              displayType={"text"}
              thousandSeparator={true}
              thousandSpacing={"2s"}
              prefix={"₹"}
            />
          </div>
          <button onClick={addToCart}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
