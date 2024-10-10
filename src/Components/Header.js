import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import Search from "./Search.js";

const Header = ({ onSubmit }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Storing in local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "enabled") {
      document.body.classList.add("dark-mode");
      setIsDarkMode(true);
    }
  }, []);

  //Function to toggle dark mode 
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

  return (
    <header>
      <div className="logo">
        <img src="/iste.png" alt="ISTE Logo" className="imageLogo" />
      </div>
      <div className="nav">
        <div className="txt" onClick={joinLoader}>Join</div>
        <div className="txt">About</div>
        <div className="txt" onClick={loadWebsite}>Website</div>
      </div>
      <Search onSubmit={onSubmit} />
      <div className="toggle" onClick={toggleDarkMode}>
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
      </div>
    </header>
  );
};

ReactDOM.render(<Header />, document.getElementById("root"));

export default Header;
