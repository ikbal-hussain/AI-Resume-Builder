import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import "../dash-styles/CreateResume.css"; 
import "../dash-styles/previewSection.css"; 
import "../dash-styles/printStyles.css"; 

function PreviewSection({ formData }) {
  const componentRef = useRef();

  // Split skills into an array and trim any whitespace
  const skillsArray = formData.skills.split(',').map(skill => skill.trim());

  return (
    <div>
      <div className="preview-section" ref={componentRef}>
        <div className="preview-content">
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
                {/* <p><i className="fa-brands fa-github"></i><a href={formData.github} target="_blank" rel="noopener noreferrer">{formData.github}</a></p> */}
                <p><i className="fa-brands fa-linkedin"></i><a href={formData.linkedin} target="_blank" rel="noopener noreferrer">{formData.linkedin}</a></p>
              </div>
            </div>
          </div>
          
          <div className="section">
            <h5>PROFESSIONAL SUMMARY</h5>
            <p>{formData.summary}</p>
          </div>

          <div className="section">
            <h5>PROJECTS</h5>
            <p>{formData.projects}</p>
          </div>

          <div className="section">
            <h5>EDUCATION</h5>
            <p>{formData.education}</p>
          </div>

          <div className="section">
            <h5>EXPERIENCE</h5>
            <p>{formData.experience}</p>
          </div>

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

          <div className="section">
            <h5>CERTIFICATIONS</h5>
            <p>{formData.certifications}</p>
          </div>
        </div>
      </div>
      <div className="print-button-container">
        <ReactToPrint
          trigger={() => <button className="print-button">Print Resume</button>}
          content={() => componentRef.current}
        />
      </div>
    </div>
  );
}

export default PreviewSection;
