import { HashRouter, Route, Routes } from "react-router-dom";
import Projects from "../../projects/Projects";
import Home from "../Home";
import "./NavigationBar.css";
import MoreInfo from "../../moreInfo/MoreInfo";
import PrivacyPolicy from "../../privacyPolicy/PrivacyPolicy";

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
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/more-info/:id" element={<MoreInfo />} />
        <Route path="/privacy-policy/:id" element={<PrivacyPolicy />} />
      </Routes>
    </HashRouter>
  );
}

export default NavigationBar;
