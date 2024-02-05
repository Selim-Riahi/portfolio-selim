import React from "react";
import "./Card.css";

const Card = ({ content }) => {
  return (
    <div className="card">
      <span></span>
      <div className="content">{content}</div>
    </div>
  );
};

export default Card;
