import React, { useState, useContext, useRef } from "react";
import { Context } from "../context/Context";
import axios from "axios";

const Password = () => {
  const [error, setError] = useState(false);
  const [errorData, setErrorData] = useState("");

  const { user, dispatch, isFetching } = useContext(Context);
  const currentPasswordRef = useRef();
  const newPasswordRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    try {
      const res = await axios.put("/users/password/" + user._id, {
        currentPassword: currentPasswordRef.current.value,
        newPassword: newPasswordRef.current.value,
      });
      currentPasswordRef.current.value = "";
      newPasswordRef.current.value = "";
      alert("Password Reset Successfull.");
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
      setError(true);
      setErrorData(err.response.data);
    }
  };
  return (
    <div className="settingsAddressContainer">
      <form onSubmit={handleSubmit}>
        <div className="settingsAddressSubContainer">
          <label htmlFor="currentPassword">Current Password</label>
          <input
            type="password"
            id="currentPassword"
            required
            ref={currentPasswordRef}
          />
        </div>
        <div className="settingsAddressSubContainer">
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            id="newPassword"
            ref={newPasswordRef}
            required
          />
        </div>
        <div className="settingsAddressSubContainer">
          <button type="Submit" disabled={isFetching}>
            Reset Password
          </button>
        </div>
        {error && (
          <span style={{ color: "red", marginTop: "10px" }}>{errorData}</span>
        )}
      </form>
    </div>
  );
};

export default Password;
