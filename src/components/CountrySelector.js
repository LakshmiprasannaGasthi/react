import React from "react";

const CountrySelector = ({ countries, countryCode, setCountryCode, setPhoneNumber }) => (
  <div className="country-box">
    <select
      value={countryCode}
      onChange={(e) => {
        setCountryCode(e.target.value);
        setPhoneNumber(""); // Reset phone number on country change
      }}
    >
      {countries.map((country) => (
        <option key={country.code} value={country.code}>
          {country.code} ({country.name})
        </option>
      ))}
    </select>
  </div>
);

export default CountrySelector;
