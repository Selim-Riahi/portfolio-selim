import React from "react";
import styles from "./Skills.module.css";
import Title from "../components/Title";
import { intro } from "../data/home";
import Section from "../components/Section";
import {
  skills__info,
  skills,
  technischeSkills,
  progSkills,
} from "../data/skills";
import Card from "../components/Card";
import Bubles from "./../components/Bubles";
import Paragraph from "./../components/Paragraph";
const Skills = () => {
  return (
    <div className={styles.section}>
      <br />
      <Section
        msg={`< ALLGEMEINE`}
        submsg={` FÄHIGKEITEN />`}
        text={skills__info}
      />
      <br />
      <br />
      <Section
        msg={`ZUSAMMENFASSUNG 
`}
        submsg={`DER QUALIFIKATIONEN`}
      />
      <br />
      <div className="cardsWrapper">
        {skills.map((skill, i) => (
          <Card content={skill.content} key={i} />
        ))}
      </div>
      <div className={styles.technischeFaehigkeiten}>
        <Section msg={`< TECHNISCHE`} submsg={` FÄHIGKEITEN />`} />
        <Paragraph
          MarginLeft={"-3.5rem"}
          Width={"400px"}
          text={technischeSkills}
        />
        <div className="cardsWrapperSkills">
          {progSkills.map((skill, i) => (
            <Card content={skill} key={i} />
          ))}
        </div>
      </div>
      <Bubles className={"containerBottomLeft-skills"} />

      <Bubles className={"containerBottomRight-skills"} />
      <Bubles className={"containerTopRight"} />

      <Bubles className={"containerTopLeft"} />
    </div>
  );
};

export default Skills;
