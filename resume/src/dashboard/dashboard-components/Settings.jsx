import React, { useState } from "react";
import "../dash-styles/settings.css";

function Settings() {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    document.body.className = e.target.value;
  };

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <div className="setting-item">
        <label htmlFor="theme-select">Select Theme:</label>
        <select id="theme-select" value={theme} onChange={handleThemeChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </div>
  );
}

export default Settings;
