import React, { useState } from "react";
import Title from "./Title";
import { languages } from "../data/blog";
import Paragraph from "./Paragraph";
import Button from "./Button";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const handleSumbit = (e) => {
    e.preventDefault();
    console.log("hi");
  };
  return (
    <form className="formContainer">
      <div className="myContact">
        <Title msg={" Find "} submsg={" Me "} />
        <div className="myContact__icons">
          <a href="https://facebook.com">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://linkedin.com">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://instagram.com">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="yourContact">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="your-email@mail.com" id="email" />
        <div className="p">
          <Paragraph text={"Pick a Language "} />
          <select name="" id="">
            {languages.map((language, i) => {
              return (
                <option value={language.name} key={i}>
                  {language.name}
                </option>
              );
            })}
          </select>
        </div>

        <Button text={"S U B M I T"} handleClick={handleSumbit} type="submit" />
      </div>
    </form>
  );
};

export default ContactForm;
