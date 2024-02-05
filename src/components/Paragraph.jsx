import React from "react";
import styles from "./Paragraph.module.css";
const Paragraph = ({ text, Width, MarginLeft }) => {
  return (
    <p
      className={styles.paragraph}
      style={Width && MarginLeft && { width: Width, marginLeft: MarginLeft }}
    >
      {text}
    </p>
  );
};

export default Paragraph;
