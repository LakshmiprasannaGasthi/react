import React, { useState } from "react";
import LogoSection from "../components/LogoSection";
import UserIcon from "../components/UserIcon";
import LoginForm from "../components/LoginForm";
import OtpInput from "../components/OtpInput";
import "../styles/LoginPage.css";

const LoginPage = ({ setIsLoggedIn }) => {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const countries = [
    { code: "+91", name: "India", flag: "in.png" },
    { code: "+1", name: "USA", flag: "us.png" },
    { code: "+44", name: "UK", flag: "uk.png" },
    { code: "+61", name: "Australia", flag: "au.png" },
    // Add more countries as needed
  ];

  const handleSendOtp = () => {
    // Validate phone number
    setStep(2);
  };

  const handleLogin = () => {
    if (otp === "1234") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid OTP!");
    }
  };

  return (
    <div className="login-container flex flex-col md:flex-row">
      <LogoSection />
      <div className="login-right flex-1">
        {!isLoginVisible && <UserIcon onClick={() => setIsLoginVisible(true)} />}
        {isLoginVisible && (
          <>
            {step === 1 ? (
              <LoginForm
                countries={countries}
                countryCode={countryCode}
                setCountryCode={setCountryCode}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                handleSendOtp={handleSendOtp}
              />
            ) : (
              <OtpInput
                otp={otp}
                setOtp={setOtp}
                handleLogin={handleLogin}
                resetStep={() => setStep(1)}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;


