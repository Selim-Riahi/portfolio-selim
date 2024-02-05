import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Navbar = () => {
  const [searchParams, setSearParams] = useSearchParams();
  const home = useSearchParams("home");

  return (
    <ul className="nav">
      <li>
        <NavLink to={"/home"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/skills"}>Skills</NavLink>
      </li>
      <li>
        <NavLink to={"/projects"}>Projects</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
