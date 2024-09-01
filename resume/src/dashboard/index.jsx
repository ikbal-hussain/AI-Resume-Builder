import React, { useState } from "react";
import "./Dashboard.css";
import CreateResume from "./dashboard-components/CreateResume";
import ViewResumes from "./dashboard-components/ViewResumes";
import Settings from "./dashboard-components/Settings";

function Dashboard() {
  const [activeSection, setActiveSection] = useState("create");

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return <div>Welcome to the ResumeFlow Dashboard</div>;
      case "create":
        return <CreateResume />;
      case "view":
        return <ViewResumes />;
      case "settings":
        return <Settings />;
      default:
        return <div>Select a section to view</div>;
    }
  };

  return (
    <div  className="mt-20">
      <header className="dashboard-header">ResumeFlow Dashboard</header>
      <nav className="top-navbar">
        <ul>
          <li
            className={activeSection === "home" ? "active" : ""}
            onClick={() => setActiveSection("home")}
          >
            <i className="fas fa-home"></i> Home
          </li>
          <li
            className={activeSection === "create" ? "active" : ""}
            onClick={() => setActiveSection("create")}
          >
            <i className="fas fa-file-alt"></i> Create Resume
          </li>
          <li
            className={activeSection === "view" ? "active" : ""}
            onClick={() => setActiveSection("view")}
          >
            <i className="fas fa-folder-open"></i> View Resumes
          </li>
          <li
            className={activeSection === "settings" ? "active" : ""}
            onClick={() => setActiveSection("settings")}
          >
            <i className="fas fa-cog"></i> Settings
          </li>
        </ul>
      </nav>
      <main className="content">{renderContent()}</main>
    </div>
  );
}

export default Dashboard;
