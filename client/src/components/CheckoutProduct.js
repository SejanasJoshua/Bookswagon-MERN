import React from "react";
import { useStateValue } from "../context/CartProvider";
import "./CheckoutProduct.css";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

const CheckoutProduct = ({ id, title, author, publisher, price, photo }) => {
  const [{ basket }, dispatch] = useStateValue();
  const PF = "http://localhost:5000/images/";
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <>
      <div className="checkout_product">
        <img className="checkout_product_image" src={PF + photo} alt={title} />
        <div className="checkout_product_info">
          <p className="checkout_product_title">
            <Link to={`/singlebook/${id}`} className="link">
              <h3>{title}</h3>
            </Link>
          </p>
          <p className="checkout_product_author">Author:&nbsp;{author}</p>
          <p className="checkout_product_publisher">
            Publisher:&nbsp;{publisher}
          </p>
          <p className="checkout_product_price">
            <CurrencyFormat
              decimalScale={2}
              value={price}
              displayType={"text"}
              thousandSeparator={true}
              thousandSpacing={"2s"}
              prefix={"₹"}
            />
            {/* <small>₹</small>
            <strong>{price}</strong> */}
          </p>
          <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
      </div>
    </>
  );
};

export default CheckoutProduct;
