import axios from "axios";
import { useContext, useRef, useState } from "react";
import { Context } from "../context/Context";

const ExistingCustomer = () => {
  const [error, setError] = useState(false);
  const [errorData, setErrorData] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setErrorData("");
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      alert("Login Successfull.");
      emailRef.current.value = "";
      passwordRef.current.value = "";
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setError(true);
      setErrorData(err.response.data);
    }
  };
  return (
    <div>
      <h5 className="titleLogin">Existing Customer</h5>
      <div className="subTitleLogin">
        If you already have an account, please sign in for faster checkout.
      </div>
      <form className="loginForm" onSubmit={handleSubmit}>
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
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
        {error && (
          <span style={{ color: "red", marginTop: "10px" }}>{errorData}</span>
        )}
      </form>
    </div>
  );
};

export default ExistingCustomer;
