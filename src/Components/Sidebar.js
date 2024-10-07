import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  function gitLoader() {
    const url = "https://github.com/ISTE-HIT";
    window.open(url, "_blank");
  }
  function linkLoader() {
    const url = "https://www.linkedin.com/company/iste-hit-sc/";
    window.open(url, "_blank");
  }
  function instaLoader() {
    const url = "https://www.instagram.com/iste.hit.sc/";
    window.open(url, "_blank");
  }
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
        <button className="links" onClick={gitLoader}>
          Github
        </button>
        <button className="links" onClick={linkLoader}>
          LinkedIn
        </button>
        <button className="links" onClick={instaLoader}>
          Instagram
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
