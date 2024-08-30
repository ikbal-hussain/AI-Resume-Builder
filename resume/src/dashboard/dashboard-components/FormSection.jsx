import React from 'react';
import "../dash-styles/CreateResume.css"; // Ensure the path is correct

function FormSection({ formData, handleChange, handleFileChange, handleSubmit }) {
  return (
    <div className="form-section">
      <h3>Create a New Resume</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Profile Image</label>
          <input
            type="file"
            name="profileImage"
            accept="image/*"
            onChange={handleFileChange}
          />
          {/* {formData.profileImage && (
            <img
              src={formData.profileImage}
              alt="Profile Preview"
              className="profile-image-preview"
            />
          )} */}
        </div>
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
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>GitHub:</label>
          <input
            type="text"
            name="github"
            value={formData.github}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>LinkedIn:</label>
          <input
            type="text"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Professional Summary:</label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Projects:</label>
          <textarea
            name="projects"
            value={formData.projects}
            onChange={handleChange}
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
        <div className="form-group">
          <label>Certifications:</label>
          <textarea
            name="certifications"
            value={formData.certifications}
            onChange={handleChange}
          />
        </div>
        
       
        <button type="submit">Create Resume</button>
      </form>
    </div>
  );
}

export default FormSection;
