import React from "react";
import "./Title.css";
const Title = ({ msg, submsg }) => {
  return (
    <>
      {submsg ? (
        <h3 className="title">
          {msg}
          <span className="subtitle">{submsg}</span>
        </h3>
      ) : (
        <h3 className="title">{msg}</h3>
      )}
    </>
  );
};

export default Title;
