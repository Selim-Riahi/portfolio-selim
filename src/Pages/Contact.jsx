import React from "react";
import styles from "./Contact.module.css";
import Title from "../components/Title";
import ContactForm from "../components/ContactForm";
const Contact = () => {
  return (
    <div className={styles.section}>
      <Title msg={"CONTACT "} submsg={"ME"} />
      <ContactForm />
    </div>
  );
};

export default Contact;
