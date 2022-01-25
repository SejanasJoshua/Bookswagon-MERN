import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div>
      <div className="specialBooksAdmin">
        <Link className="link" to="/add-books-admin">
          Add New Books
        </Link>
        <Link className="link" to="/remove-books-admin">
          Remove books
        </Link>
        <Link className="link" to="/new-arrivals-admin">
          Add/Remove New Arrivals
        </Link>
        <Link className="link" to="/pre-orders-admin">
          Add/Remove Pre-Order
        </Link>
        <Link className="link" to="/best-sellers-admin">
          Add/Remove Best Sellers
        </Link>
        <Link className="link" to="/award-winners-admin">
          Add/Remove Award Winners
        </Link>
        <Link className="link" to="/text-books-admin">
          Add/Remove Text Books
        </Link>
        <Link className="link" to="/featured-authors-admin">
          Add/Remove Featured Authors
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
