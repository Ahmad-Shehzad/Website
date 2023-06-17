import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./NavigationBar.css";
import Home from "../Home";
import About from "../../about/About";
import Contact from "../../contact/Contact";

function NavigationBar() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <a className="navText" href="/Website">
              Home
            </a>
          </li>
          <li>
            <a className="navText" href="/Website/about">
              About
            </a>
          </li>
          <li>
            <a className="navText" href="/Website/contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/Website" element={<Home />} />
        <Route path="/Website/about" element={<About />} />
        <Route path="/Website/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default NavigationBar;
