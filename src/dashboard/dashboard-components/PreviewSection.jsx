import React, { useRef, useState, useEffect } from 'react';
import ReactToPrint from 'react-to-print';
import "../dash-styles/CreateResume.css"; 
import "../dash-styles/previewSection.css"; 
import "../dash-styles/printStyles.css"; 

function PreviewSection({ formData }) {
  const componentRef = useRef();

  // State to manage the order of sections
  const [sections, setSections] = useState([]);

  useEffect(() => {
    // Update sections based on formData
    setSections([
      { id: 'profile-section', component: renderProfileSection() },
      { id: 'summary-section', component: renderSummarySection() },
      { id: 'projects-section', component: renderProjectsSection() },
      { id: 'education-section', component: renderEducationSection() },
      { id: 'experience-section', component: renderExperienceSection() },
      { id: 'skills-section', component: renderSkillsSection() },
      { id: 'certifications-section', component: renderCertificationsSection() }
    ]);
  }, [formData]);  // Update sections whenever formData changes

  // Handler for drag start
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('draggedIndex', index);
  };

  // Handler for drag over
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Handler for drop
  const handleDrop = (e, dropIndex) => {
    const draggedIndex = e.dataTransfer.getData('draggedIndex');
    const draggedItem = sections[draggedIndex];
    const newSections = [...sections];

    newSections.splice(draggedIndex, 1);
    newSections.splice(dropIndex, 0, draggedItem);

    setSections(newSections);
  };

  // Render functions for each section
  function renderProfileSection() {
    return (
      <div className="profile-section">
        <div className="profile-image-container">
          <img
            src={formData.profileImage || `https://media.istockphoto.com/id/1214428300/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=vftMdLhldDx9houN4V-g3C9k0xl6YeBcoB_Rk6Trce0=`}
            alt=""
            className="profile-image-preview"
          />
        </div>
        <div className="profile-details">
          <h4 className="name">{formData.name}</h4>
          <div className="contact-info">
            <p><i className="fa fa-phone"></i>{formData.phone}</p>
            <p><i className="fa fa-envelope"></i>{formData.email}</p>
            <p><i className="fa-solid fa-location-dot"></i>{formData.location}</p>
            <p><i className="fa-brands fa-linkedin"></i><a href={formData.linkedin} target="_blank" rel="noopener noreferrer">{formData.linkedin}</a></p>
          </div>
        </div>
      </div>
    );
  }

  function renderSummarySection() {
    return (
      <div className="section">
        <h5>PROFESSIONAL SUMMARY</h5>
        <p>{formData.summary}</p>
      </div>
    );
  }

  function renderProjectsSection() {
    return (
      <div className="section">
        <h5>PROJECTS</h5>
        <ul>
          {formData.projects.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
      </div>
    );
  }

  function renderEducationSection() {
    return (
      <div className="section">
        <h5>EDUCATION</h5>
        <ul>
          {formData.education.map((edu, index) => (
            <li key={index}>{edu}</li>
          ))}
        </ul>
      </div>
    );
  }

  function renderExperienceSection() {
    return (
      <div className="section">
        <h5>EXPERIENCE</h5>
        <ul>
          {formData.experience.map((exp, index) => (
            <li key={index}>{exp}</li>
          ))}
        </ul>
      </div>
    );
  }

  function renderSkillsSection() {
    const skillsArray = formData.skills.split(',').map(skill => skill.trim());
    return (
      <div className="section">
        <h5>SKILLS</h5>
        <div className="skills-container">
          {skillsArray.map((skill, index) => (
            <span key={index} className="skill-item">
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  }

  function renderCertificationsSection() {
    return (
      <div className="section">
        <h5>CERTIFICATIONS</h5>
        <ul>
          {formData.certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <div className="preview-section" ref={componentRef}>
        <div className="preview-content">
          {sections.map((section, index) => (
            <div
              key={section.id}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => handleDragOver(e)}
              onDrop={(e) => handleDrop(e, index)}
              className="draggable-section"
            >
              {section.component}
            </div>
          ))}
        </div>
      </div>
      <div className="print-button-container">
        <ReactToPrint
          trigger={() => <button className="print-button"><i class="fa-solid fa-print"></i> Print Resume</button>}
          content={() => componentRef.current}
        />
      </div>
    </div>
  );
}

export default PreviewSection;
