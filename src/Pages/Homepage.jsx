import React from "react";
import styles from "./Homepage.module.css";
import Title from "../components/Title";
import { intro, abitur } from "../data/home";
import Paragraph from "../components/Paragraph";
import Section from "../components/Section";
import Bubles from "../components/Bubles";

const Homepage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.personal}>
        <Bubles className={"containerBottomLeft"} />
        <Bubles className={"containerTopRight"} />

        <Section
          text={intro}
          submsg={`My Portfolio />`}
          msg={`< Welcome to  `}
        />
        <Section text={abitur} submsg={"ZEUGNIS"} msg={"ABITUR"} />
        <div className={styles.sprache}>
          <Title msg={"SPRA"} submsg={"CHE"} />
          <Paragraph
            MarginLeft={"10rem"}
            Width={"500px"}
            text={` -Englisch

           -Arabisch

           -Französisch

           -Deutsch`}
          />
        </div>
        <div className={styles.sprache}>
          <Title msg={"SPRACHEN"} submsg={"ZERTIFIKAT"} />
          <Paragraph
            MarginLeft={"12.5rem"}
            Width={"500px"}
            text={` - DEUTSCH ECL B1

           - DEUTSCH TELC B2 

           

          `}
          />
        </div>
        <div className={styles.sprache}>
          <Title msg={"KURS"} submsg={"ZERTIFIKATE"} />
          <Paragraph
            MarginLeft={"14rem"}
            Width={"500px"}
            text={` -React Projects Course ( Udemy ) .
            
             

           

          `}
          />
          <Paragraph
            MarginLeft={"14rem"}
            Width={"500px"}
            text={` -React JS React Router & React Redux ( udemy ) .
            
             

           

          `}
          />
        </div>
      </div>
    </section>
  );
};

export default Homepage;
