import React from "react";
import { Book } from ".";

const BookSingleContainer = ({ book }) => {
  return (
    <div className="homeContainer">
      <div className="sections">
        <Book book={book} />
        <div className="singleBookInfo">
          <div className="singleBookAbout">
            <h5>About the Book</h5>
            {book.about}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSingleContainer;
