import React from "react";
import styles from "../styles/DarkMode.module.css";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  // TODO: Implement dark mode toggle logic

  return (
    <button
      className={`${styles.toggleButton} ${
        darkMode ? styles.dark : styles.light
      }`}
      onClick={() => setDarkMode((dark) => !dark)}
    >
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
