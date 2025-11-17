// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cursor from "./components/Cursor";
import Menu from "./components/Menu";
import CustomScrollbar from "./components/CustomScrollbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <CustomScrollbar>
        <Menu />
        <Cursor />

        <div className="w-full min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </CustomScrollbar>
    </Router>
  );
}

export default App;
