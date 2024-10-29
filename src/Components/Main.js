import React, { useState, useEffect } from "react";
import "./Main.css";
import Card from "./Card";

function Main({ userData }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [visibleItems, setVisibleItems] = useState(14);
  const itemsPerLoad = 14;

  // Load dark mode preference from localStorage 
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

  // Function to load more items
  const loadMore = () => {
    setVisibleItems(prevVisible => prevVisible + itemsPerLoad);
  };

  if (!userData || userData.length === 0) {
    return <div>Loading...</div>;
  }

  const displayedData = userData.slice(0, visibleItems);
  const hasMore = userData.length > visibleItems;

  return (
    <div className="Main">
      {displayedData.map((user, index) => (
        <Card key={index} data={user} />
      ))}
      
      {hasMore && (
        <div className="view-more-container">
          <button onClick={loadMore} className="view-more-button">
            View More
          </button>
        </div>
      )}
    </div>
  );
}

export default Main;
