import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      <h2 className="logo">Fareshta Foladi</h2>

      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      <button onClick={toggleTheme} className="theme-btn">
        {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>
    </nav>
  );
}

export default Navbar;