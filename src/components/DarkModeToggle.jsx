import React from "react";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  // TODO: Implement dark mode toggle logic

  return (
    <button onClick={() => setDarkMode((dark) => !dark)}>
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
