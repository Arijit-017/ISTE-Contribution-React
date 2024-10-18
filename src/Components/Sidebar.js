import React, { useEffect, useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode preference from localStorage on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "enabled") {
      document.body.classList.add("dark-mode");
      setIsDarkMode(true);
    }
  }, []);

  // Function to toggle between dark and light mode
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

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="Sidebar">
      <div className="image">
        <img
          src="/IMG_20240901_203645.jpg"
          alt="ISTE Logo"
          className="imageMain"
        />
        <p>
          Indian Society for Technical Education Haldia Institute of Technology
          Student Chapter
        </p>
      </div>
      <div className="about">
        <h3 className="aboutHead">About ISTE</h3>
        <p className="aboutBody">
          The ISTE Student Chapter at Haldia Institute of Technology is your
          gateway to innovation in educational technology. As part of the Indian
          Society for Technical Education (ISTE), we empower students with the
          tools and knowledge needed to excel in the digital age. Our platform
          encourages engagement in research, workshops, and collaborative
          projects that advance technology and education.
        </p>
      </div>
      <div className="social">
        <button className="links" onClick={() => openLink("https://github.com/ISTE-HIT")}>
          Github
        </button>
        <button className="links" onClick={() => openLink("https://www.linkedin.com/company/iste-hit-sc/")}>
          LinkedIn
        </button>
        <button className="links" onClick={() => openLink("https://www.instagram.com/iste.hit.sc/")}>
          Instagram
        </button>
      </div>
      <div className="toggle-container">
        <label className="toggle-label">
          Dark Mode
          <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
          <span className="toggle-slider"></span>
        </label>
      </div>
    </div>
  );
};

export default Sidebar;
