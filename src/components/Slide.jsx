import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import SliderItem from "./SliderItem";
import { data } from "../data/blog.js";
function Slide(props) {
  return (
    <Carousel className="carousel">
      {data.map((item, i) => (
        // <Item key={i} item={item} />
        <SliderItem
          key={i}
          title={item.title}
          subTitle={item.subTitle}
          text={item.text}
          imgSrc={item.imgSrc}
        />
      ))}
    </Carousel>
  );
}

export default Slide;
