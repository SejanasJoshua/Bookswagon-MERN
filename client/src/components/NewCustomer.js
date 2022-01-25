import React, { useRef, useState } from "react";
import axios from "axios";

const NewCustomer = () => {
  const [error, setError] = useState(false);

  const nameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        fullName: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      alert("Registration Successfull");
      nameRef.current.value = "";
      emailRef.current.value = "";
      passwordRef.current.value = "";
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };
  return (
    <div>
      <h5 className="titleLogin">New Customer</h5>
      <div className="subTitleLogin">
        Create a new account to make future purchases even faster.
      </div>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter Full Name..."
          ref={nameRef}
        />
        <label>Your Email Address:</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your email..."
          ref={emailRef}
        />
        <label>Password:</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />

        <button className="loginButton" type="submit">
          Register
        </button>
        {error && (
          <span style={{ color: "red", marginTop: "10px" }}>
            Something went wrong!
          </span>
        )}
      </form>
    </div>
  );
};

export default NewCustomer;
