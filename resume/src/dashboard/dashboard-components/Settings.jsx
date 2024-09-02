import React, { useState } from 'react';
import '../dash-styles/settings.css'; // Ensure this file includes the necessary styles

function Settings() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');
  const [notifications, setNotifications] = useState(true);

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    document.body.className = e.target.value;
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleNotificationsChange = (e) => {
    setNotifications(e.target.checked);
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

      <div className="setting-item">
        <label htmlFor="language-select">Select Language:</label>
        <select id="language-select" value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          {/* Add more languages as needed */}
        </select>
      </div>

      <div className="setting-item">
        <label htmlFor="notifications-toggle">Enable Notifications:</label>
        <input
          type="checkbox"
          id="notifications-toggle"
          checked={notifications}
          onChange={handleNotificationsChange}
        />
      </div>

      {/* <div className="setting-item">
        <button className="save-button">Save Changes</button>
      </div> */}
    </div>
  );
}

export default Settings;
