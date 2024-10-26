import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import Search from "./Search.js";

const Header = ({ onSubmit }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility

  // Storing in local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "enabled") {
      document.body.classList.add("dark-mode");
      setIsDarkMode(true);
    }
  }, []);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const bodyClass = document.body.classList;
    if (isDarkMode) {
      bodyClass.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    } else {
      bodyClass.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    }
    setIsDarkMode(!isDarkMode);
  };

  // Function to load website
  function loadWebsite() {
    const url = "https://hitiste.vercel.app/";
    window.open(url, "_blank");
  }

  // Function to join membership
  function joinLoader() {
    const url = "https://hitiste.vercel.app/join-membership";
    window.open(url, "_blank");
  }

  // Function to toggle the hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="logo">
        <a href="https://hitiste.vercel.app/"><img src="/iste.png" alt="ISTE Logo" className="imageLogo" /></a>
      </div>

      <div className={`nav ${isMenuOpen ? "open" : ""}`}>
        {/* Adding 'open' class to display the menu on small screens */}
        <div className="txt" onClick={joinLoader}>Join</div>
        <div className="txt">About</div>
        <div className="txt" onClick={loadWebsite}>Website</div>
      </div>

      <Search onSubmit={onSubmit} />

      <div className="toggle" onClick={toggleDarkMode}>
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </div>
    </header>
  );
};

ReactDOM.render(<Header />, document.getElementById("root"));

export default Header;
