import React from "react";

const InputField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  required = false,
  options = [],
}) => (
  <label>
    {label}:
    {type === "select" ? (
      <select name={name} value={value} onChange={onChange} required={required}>
        <option value="">Select {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    ) : type === "textarea" ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      ></textarea>
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    )}
  </label>
);

export default InputField;
