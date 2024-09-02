import React, { useEffect, useState } from "react";
import "../dash-styles/CreateResume.css";
import "../dash-styles/previewSection.css";

function ViewResumes() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const savedResumes = JSON.parse(localStorage.getItem("resumesData")) || [];
    setResumes(savedResumes);
  }, []);

  return (
    <div className="view-resumes-container grid grid-cols-2 m-8 gap-32">
      {resumes.length === 0 ? (
        <p>No resumes saved yet.</p>
      ) : (
        resumes.map((resume, index) => (
          <div key={index} className="preview-section">
            <div className="preview-content">
              <div className="profile-section">
                <div className="profile-image-container">
                  <img
                    src={resume.profileImage || `https://media.istockphoto.com/id/1214428300/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=vftMdLhldDx9houN4V-g3C9k0xl6YeBcoB_Rk6Trce0=`}
                    alt=""
                    className="profile-image-preview"
                  />
                </div>
                <div className="profile-details">
                  <h4 className="name">{resume.name}</h4>
                  <div className="contact-info">
                    <p><i className="fa fa-phone"></i>{resume.phone}</p>
                    <p><i className="fa fa-envelope"></i>{resume.email}</p>
                    <p><i className="fa-solid fa-location-dot"></i>{resume.location}</p>
                    <p><i className="fa-brands fa-linkedin"></i><a href={resume.linkedin} target="_blank" rel="noopener noreferrer">{resume.linkedin}</a></p>
                  </div>
                </div>
              </div>
              
              <div className="section">
                <h5>PROFESSIONAL SUMMARY</h5>
                <p>{resume.summary}</p>
              </div>

              <div className="section">
                <h5>PROJECTS</h5>
                <p>{resume.projects}</p>
              </div>

              <div className="section">
                <h5>EDUCATION</h5>
                <p>{resume.education}</p>
              </div>

              <div className="section">
                <h5>EXPERIENCE</h5>
                <p>{resume.experience}</p>
              </div>

              <div className="section">
                <h5>SKILLS</h5>
                <p>{resume.skills}</p>
              </div>

              <div className="section">
                <h5>CERTIFICATIONS</h5>
                <p>{resume.certifications}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ViewResumes;
