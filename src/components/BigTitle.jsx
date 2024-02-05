import React from "react";
import "./Bigtitle.css";
const BigTitle = ({ href, src }) => {
  return (
    <div className="bigTitle">
      <a href={href} target="_blank">
        <img src={src} alt={""} />
      </a>
    </div>
  );
};

export default BigTitle;
