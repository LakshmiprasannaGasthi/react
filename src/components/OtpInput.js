import React from "react";

const OtpInput = ({ otp, setOtp, handleLogin, resetStep }) => (
  <div className="otp-form">
    <h2>Verify and login</h2>
    <p>Enter the OTP sent to your mobile</p>
    <input
      type="text"
      placeholder="Enter 4-digit OTP"
      maxLength={4}
      value={otp}
      onChange={(e) => {
        if (/^\d*$/.test(e.target.value)) {
          setOtp(e.target.value);
        }
      }}
    />
    <div className="otp-buttons">
      <button onClick={handleLogin}>Log In</button>
      <button onClick={resetStep}>Reset</button>
    </div>
  </div>
);

export default OtpInput;
