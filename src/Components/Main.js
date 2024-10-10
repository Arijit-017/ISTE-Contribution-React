import React, { useState, useEffect } from "react";
import "./Main.css";
import Card from "./Card";

function Main({ userData }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode preference from localStorage on initial load
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

  if (!userData || userData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Main">
      
      {userData.map((user, index) => (
        <Card key={index} data={user} />
      ))}
    </div>
  );
}

export default Main;
