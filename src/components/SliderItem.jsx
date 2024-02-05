import React from "react";
import styles from "./SliderItem.module.css";

import { Paper, Button } from "@mui/material";
import Title from "./Title";
import Paragraph from "./Paragraph";

const SliderItem = ({ title, subTitle, imgSrc, alt, text }) => {
  return (
    <div className={styles.sliderItemContainer}>
      <Title msg={title} submsg={subTitle} />
      <img
        style={{ width: "35rem", height: "35rem" }}
        src={imgSrc}
        alt={`${title} ${subTitle}`}
      />
      <Paragraph text={text} />
    </div>
  );
};

export default SliderItem;
