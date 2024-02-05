import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./Pages/Homepage";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Blog from "./Pages/Blog";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
