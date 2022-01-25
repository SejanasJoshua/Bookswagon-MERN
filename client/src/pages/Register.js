import "./Login.css";
import React, { useEffect } from "react";
import NewCustomer from "../components/NewCustomer";

const Register = () => {
  useEffect(() => {
    document.title = "BooksWagon : All Books";
  }, []);
  return (
    <div className="outerContainer">
      <div className="innerContainer" style={{ width: "40%" }}>
        <h2>My Account</h2>
        <div className="mainContainerRegister">
          <div className="mainContainerItems">
            <NewCustomer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
