import React, { useEffect } from "react";
import ExistingCustomer from "../components/ExistingCustomer";
import GoogleCustomer from "../components/GoogleCustomer";
import NewCustomer from "../components/NewCustomer";
import "./Login.css";

const Login = () => {
  useEffect(() => {
    document.title = "BooksWagon : Login";
  }, []);

  return (
    <div className="outerContainer">
      <div className="innerContainer">
        <h2>My Account</h2>
        <div className="mainContainer">
          <div className="loginLogin mainContainerItems">
            <ExistingCustomer />
          </div>
          <div className="loginSignup mainContainerItems">
            <NewCustomer />
          </div>
          <div className="loginGoogle mainContainerItems">
            <GoogleCustomer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
