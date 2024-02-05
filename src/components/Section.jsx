import React from "react";
import Title from "./Title";
import Paragraph from "./Paragraph";
import styles from "./Section.module.css";
const Section = ({ msg, submsg, text }) => {
  return (
    <div className={styles.intro}>
      <Title msg={msg} submsg={submsg} />
      <Paragraph text={text} />
    </div>
  );
};

export default Section;
