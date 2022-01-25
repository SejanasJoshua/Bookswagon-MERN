import React from "react";

const Addresses = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="settingsAddressContainer">
      <form onSubmit={handleSubmit}>
        <div className="settingsAddressSubContainer">
          <label htmlFor="settingsAddress1">Address Line 1</label>
          <input type="text" id="settingsAddress1" />
        </div>
        <div className="settingsAddressSubContainer">
          <label htmlFor="settingsAddress2">Address Line 2</label>
          <input type="text" id="settingsAddress2" />
        </div>
        <div className="settingsAddressSubContainer">
          <label htmlFor="settingsStreetAddress">Street Address</label>
          <input type="text" id="settingsStreetAddress" />
        </div>
        <div className="settingsAddressSubContainer">
          <label htmlFor="settingsCity">City</label>
          <input type="text" id="settingsCity" />
        </div>
        <div className="settingsAddressSubContainer">
          <label htmlFor="settingsState">State</label>
          <input type="text" id="settingsState" />
        </div>
        <div className="settingsAddressSubContainer">
          <label htmlFor="settingsPin">Pin Code</label>
          <input type="text" id="settingsPin" />
        </div>
        <div className="settingsAddressSubContainer">
          <label htmlFor="settingsLandmark">Landmark</label>
          <input type="text" id="settingsLandmark" />
        </div>
        <div className="settingsAddressSubContainer">
          <button type="Submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default Addresses;
