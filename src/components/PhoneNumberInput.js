import React from "react";

const PhoneNumberInput = ({ phoneNumber, setPhoneNumber }) => (
  <input
    type="text"
    placeholder="Enter phone number"
    value={phoneNumber}
    onChange={(e) => {
      if (/^\d*$/.test(e.target.value)) {
        setPhoneNumber(e.target.value);
      }
    }}
  />
);

export default PhoneNumberInput;
