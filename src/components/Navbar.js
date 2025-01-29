import React from "react";

const Navbar = ({ buttons, onButtonClick }) => (
  <nav className="navbar">
    {buttons.map((button, index) => (
      <button key={index} onClick={() => onButtonClick(button.value)}>
        {button.label}
      </button>
    ))}
  </nav>
);

export default Navbar;
