import React from "react";
import { Button } from "react-bootstrap";

const Account = () => {
  return (
    <div className="settingsAccountContainer">
      <Button variant="outline-secondary">My Addresses</Button>
      <Button variant="outline-secondary">Change Password</Button>
      <Button variant="outline-secondary">Personal Settings</Button>
    </div>
  );
};

export default Account;
