import React, { useState } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <div>Welcome to the ResumeFlow Dashboard</div>;
      case 'create':
        return <CreateResume />;
      case 'view':
        return <ViewResumes />;
      case 'settings':
        return <Settings />;
      default:
        return <div>Select a section to view</div>;
    }
  };

  return (
    <div>
      <header>ResumeFlow Dashboard</header>
      <div className="dashboard">
        <aside className="sidebar">
          <h2>Menu</h2>
          <ul>
            <li className={activeSection === 'home' ? 'active' : ''} onClick={() => setActiveSection('home')}>
              <i className="fas fa-home"></i> Home
            </li>
            <li className={activeSection === 'create' ? 'active' : ''} onClick={() => setActiveSection('create')}>
              <i className="fas fa-file-alt"></i> Create Resume
            </li>
            <li className={activeSection === 'view' ? 'active' : ''} onClick={() => setActiveSection('view')}>
              <i className="fas fa-folder-open"></i> View Resumes
            </li>
            <li className={activeSection === 'settings' ? 'active' : ''} onClick={() => setActiveSection('settings')}>
              <i className="fas fa-cog"></i> Settings
            </li>
          </ul>
        </aside>
        <main className="content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

function CreateResume() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    skills: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here we can process the resume, e.g., generate a PDF or save it to a database
    console.log('Resume Data:', formData);
    alert('Resume Created Successfully!');
  };

  return (
    <div>
      <h3>Create a New Resume</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Education:</label>
          <textarea
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Experience:</label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Skills:</label>
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create Resume</button>
      </form>
    </div>
  );
}

function ViewResumes() {
  return (
    <div>
      <h3>View Your Resumes</h3>
      {/* Add a component to list or view resumes */}
    </div>
  );
}

function Settings() {
  return (
    <div>
      <h3>Settings</h3>
      {/* Add settings options */}
    </div>
  );
}

export default Dashboard;
