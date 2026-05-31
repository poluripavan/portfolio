import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import Project1 from "./pages/projects/Project1";
import Project2 from "./pages/projects/Project2";
import Project3 from "./pages/projects/Project3";
import Project4 from "./pages/projects/Project4";

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        {/* project pages */}
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/project4" element={<Project4 />} />
      </Routes>
    </div>
  );
}