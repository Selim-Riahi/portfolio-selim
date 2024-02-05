import React from "react";
import "./Button.css";
const Button = ({ text, handleClick }) => {
  return (
    <button className="ui-btn" onClick={handleClick}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
