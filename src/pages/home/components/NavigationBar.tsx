import { HashRouter, Route, Routes } from "react-router-dom";
import About from "../../about/About";
import Contact from "../../contact/Contact";
import Home from "../Home";
import "./NavigationBar.css";
import Projects from "../../projects/Projects";

function NavigationBar() {
  return (
    <HashRouter>
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <a className="navText" href="/Website">
              Home
            </a>
          </li>
          <li>
            <a className="navText" href="/Website/#/projects">
              Projects
            </a>
          </li>
          <li>
            <a className="navText" href="/Website/#/about">
              About
            </a>
          </li>
          <li>
            <a className="navText" href="/Website/#/contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default NavigationBar;
