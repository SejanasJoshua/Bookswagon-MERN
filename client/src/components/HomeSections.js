import { Card } from "react-bootstrap";
import "./HomeSection.css";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";

const HomeSections = ({ title, books }) => {
  return (
    <section className="homeSection">
      <h3>{title}</h3>
      <div className="cards">
        {books.slice(0, 3).map((book) => (
          <Cards title={title} book={book} />
        ))}
      </div>
    </section>
  );
};

const Cards = ({ book }) => {
  const PF = "http://localhost:5000/images/";

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={PF + book.photo} className="cardImage" />
        <Card.Body>
          <div className="cardInfo">
            <Card.Title className="cardTitle">
              <Link to={`/singlebook/${book._id}`} className="link">
                {book.title}
              </Link>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {`Author: ${book.author}`}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted card-price">
              <CurrencyFormat
                decimalScale={2}
                value={book.price}
                displayType={"text"}
                thousandSeparator={true}
                thousandSpacing={"2s"}
                prefix={"₹"}
              />
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              {book.publisher}
            </Card.Subtitle>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default HomeSections;
