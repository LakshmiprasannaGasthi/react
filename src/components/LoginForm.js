import React from "react";
import CountrySelector from "./CountrySelector";
import PhoneNumberInput from "./PhoneNumberInput";

const LoginForm = ({
  countries,
  countryCode,
  setCountryCode,
  phoneNumber,
  setPhoneNumber,
  handleSendOtp,
}) => (
  <div className="login-form">
    <h2>Enter your mobile number</h2>
    <p>A 4-digit OTP will be sent on SMS</p>
    <div className="phone-input">
      <CountrySelector
        countries={countries}
        countryCode={countryCode}
        setCountryCode={setCountryCode}
        setPhoneNumber={setPhoneNumber}
      />
      <PhoneNumberInput
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
      />
    </div>
    <button onClick={handleSendOtp}>Next</button>
  </div>
);

export default LoginForm;
