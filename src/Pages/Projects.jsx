import React from "react";
import styles from "./Projects.module.css";
import Title from "./../components/Title";
import Paragraph from "../components/Paragraph";
import BigTitle from "./../components/BigTitle";
import { projects } from "../data/projects.js";
const Projects = () => {
  return (
    <>
      {projects.map((project, i) => {
        return (
          <div className={styles.container} key={i}>
            <Title msg={project.title} submsg={project.subTitle} />
            <BigTitle href={project.href} src={project.src} />
          </div>
        );
      })}
    </>
  );
};

export default Projects;
