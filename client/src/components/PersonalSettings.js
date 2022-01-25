import React, { useState, useContext, useRef } from "react";
import { Context } from "../context/Context";
import axios from "axios";

const PersonalSettings = () => {
  const [error, setError] = useState(false);
  const [errorData, setErrorData] = useState("");

  const { user, dispatch, isFetching } = useContext(Context);
  const newNameRef = useRef();
  const newEmailRef = useRef();
  const currentPasswordRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    setError(false);
    setErrorData("");
    try {
      const res = await axios.put("/users/" + user._id, {
        newName: newNameRef.current.value,
        newEmail: newEmailRef.current.value,
        currentPassword: currentPasswordRef.current.value,
      });
      alert("Update Successfull.");
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
          <label htmlFor="newFullName">Full Name</label>
          <input
            type="text"
            id="newFullName"
            placeholder={user.fullName}
            required
            ref={newNameRef}
          />
        </div>
        <div className="settingsAddressSubContainer">
          <label htmlFor="newEmail">Email</label>
          <input
            type="text"
            id="newEmail"
            placeholder={user.email}
            required
            ref={newEmailRef}
          />
        </div>
        <div className="settingsAddressSubContainer">
          <button type="Submit" disabled={isFetching}>
            Update Settings
          </button>
        </div>
        {error && (
          <span style={{ color: "red", marginTop: "10px" }}>{errorData}</span>
        )}
      </form>
    </div>
  );
};

export default PersonalSettings;
