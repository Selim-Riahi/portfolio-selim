import React from "react";
import styles from "./Blog.module.css";
import Section from "../components/Section";
import { intro } from "../data/home";
import CarouselFadeExample from "../components/Slide";
import { Splide } from "@splidejs/react-splide";
import Slide from "../components/Slide";
import Slider from "../components/Slide";
import SliderItem from "../components/SliderItem";
import Paragraph from "../components/Paragraph";

const Blog = () => {
  return (
    <div className={styles.section}>
      <Section
        msg={`< NEW INTERESTING `}
        submsg={`TECHNOLOGIES />`}
        text={intro}
      />
      <div className="sliderContainer">
        <Slide />
      </div>
    </div>
  );
};
export default Blog;
