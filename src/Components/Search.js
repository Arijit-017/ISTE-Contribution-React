import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./search.css";

function Search({ onSubmit }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load the theme from localStorage and set it on the initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  // Toggle between dark and light modes
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  };

  // Handle search form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchTerm = formData.get("search");
    if (!searchTerm.trim()) return;
    onSubmit(searchTerm);
  };

  return (
    <div className="search-container">
    

      <form className="search" onSubmit={handleSubmit}>
        <label htmlFor="search-input" className="visually-hidden">
          Search users
        </label>
        <input
          type="text"
          name="search"
          id="search-input"
          placeholder="Search users..."
          autoComplete="off"
        />
        <button type="submit" aria-label="Search">
          <FontAwesomeIcon icon={faMagnifyingGlass} aria-hidden="true" />
        </button>
      </form>
    </div>
  );
}

export default Search;
